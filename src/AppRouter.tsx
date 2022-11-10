import { HomePage } from "./pages/HomePage";
import { PageFlowEditor } from "./pages/PageFlowEditor";
import { PageGallery } from "./pages/PageGallery";
import { PageFlowEditorPoc } from "./pages/PageFlowEditorPoc";
import { PageAbout } from "./pages/PageAbout";
import { createRouteConfig, createReactRouter } from "@tanstack/react-router";
import { PageFlowEditorPocStressTest } from "./pages/PageFlowEditorPocStressTest";

const routeConfig = createRouteConfig().createChildren((createRoute) => [
  createRoute({ path: "/", element: <HomePage /> }),
  createRoute({ path: "/editor", element: <PageFlowEditor /> }),
  createRoute({ path: "/poc", element: <PageFlowEditorPoc /> }),
  createRoute({
    path: "/stressTest",
    element: <PageFlowEditorPocStressTest />,
  }),
  createRoute({ path: "/gallery", element: <PageGallery /> }).createChildren(
    (createRoute) => [
      createRoute({ path: "/", element: <PageGallery /> }),
      createRoute({ path: "/:id", element: <PageFlowEditor /> }),
    ]
  ),
  createRoute({ path: "/about", element: <PageAbout /> }),
]);

export const router = createReactRouter({
  routeConfig,
  defaultPreload: "intent",
});

export const links = [
  { label: "Browse", link: "/gallery", links: null },
  {
    label: "Create",
    link: "/editor",
    links: [
      { label: "Editor", link: "/editor" },
      { label: "POC", link: "/poc" },
      { label: "Stress Test", link: "/stressTest" },
    ],
  },
  { label: "About", link: "/about", links: null },
];
