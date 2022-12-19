import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { FlowEditorPOC } from "../components/FlowEditorPOC/FlowEditorPOC";
import { useImageAnalysis } from "../components/imageAnalysis/useImageAnalysis";

export const PageMegaStressTest = () => {
  const { width, height, getPixelValue } = useImageAnalysis(
    "./painting.png",
    1 / 16
  );

  const nodes = [];
  const edges = [];

  if (width && height && width > 0 && height > 0) {
    const pixelSize = 20;
    let nodeId = 1;
    let recentNodeId = null;
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const position = { x: x * pixelSize, y: y * pixelSize };
        const node = {
          id: `stress-${nodeId.toString()}`,
          type: "color",
          style: { width: pixelSize, height: pixelSize },
          data: { color: getPixelValue(x, y) },
          position,
        };
        nodes.push(node);

        if (recentNodeId && nodeId <= width * height) {
          edges.push({
            id: `${x}-${y}`,
            source: `stress-${recentNodeId.toString()}`,
            target: `stress-${nodeId.toString()}`,
          });
        }

        recentNodeId = nodeId;
        nodeId++;
      }
    }
  }

  return nodes.length > 0 ? (
    <FlowEditorPOC id="mega-stress-test" nodes={nodes} edges={edges} />
  ) : (
    <>Loading</>
  );
};
