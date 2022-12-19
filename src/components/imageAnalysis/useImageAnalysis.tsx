import React, { useState, useEffect } from "react";

export const useImageAnalysis = (imageSource: string, scale: number = 0.5) => {
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const [imageData, setImageData] = useState<ImageData | null>(null);

  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  useEffect(() => {
    const image = new Image();
    image.src = imageSource;
    image.addEventListener("load", () => {
      setImage(image);
    });
  }, []);

  useEffect((): void => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    if (!image || !context) return;

    context.drawImage(image, 0, 0, image.width * scale, image.height * scale);
    const imageData = context.getImageData(
      0,
      0,
      image.width * scale,
      image.height * scale,
      { colorSpace: "srgb" }
    );
    setImageData(imageData);
  }, [image, setImageData]);

  return imageData
    ? {
        loaded: true,
        width: imageData.width,
        height: imageData.height,
        getPixelValue: (x: number, y: number): string | null => {
          const startIndex = (y * imageData.width + x) * 4;
          return `rgba(${imageData.data[startIndex]}, ${
            imageData.data[startIndex + 1]
          }, ${imageData.data[startIndex + 2]}, ${
            imageData.data[startIndex + 3]
          })`;
        },
      }
    : {
        loaded: false,
        width: 0,
        height: 0,
        getPixelValue: () => null,
      };
};
