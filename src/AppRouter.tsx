import { HomePage } from "./pages/HomePage";
import { PageFlowEditor } from "./pages/PageFlowEditor";
import { PageFirstGallop } from "./pages/PageFirstGallop";
import { PageFlowEditorPoc } from "./pages/PagePoc";
import { createRouteConfig, createReactRouter } from "@tanstack/react-router";
import { PageStressTest } from "./pages/PageStressTest";
import { PageMegaStressTest } from "./pages/PageMegaStressTest";
import { PageBabySteps } from "./pages/PageBabySteps";

const routeConfig = createRouteConfig().createChildren((createRoute) => [
  createRoute({ path: "/", element: <HomePage /> }),
  createRoute({ path: "/firstGallop", element: <PageFirstGallop /> }),
  createRoute({ path: "/poc", element: <PageFlowEditorPoc /> }),
  createRoute({ path: "/babysteps", element: <PageBabySteps /> }),
  createRoute({
    path: "/stressTest",
    element: <PageStressTest />,
  }),
  createRoute({
    path: "/megaStressTest",
    element: <PageMegaStressTest />,
  }),
  createRoute({ path: "/editor", element: <PageFlowEditor /> }),
]);

export const router = createReactRouter({
  routeConfig,
  defaultPreload: "intent",
});

export const links = [
  {
    label: "Graphs",
    link: "/editor",
    links: [
      { label: "First gallop", link: "/firstGallop" },
      { label: "POC", link: "/poc" },
      { label: "Baby steps", link: "/babysteps" },
      { label: "Stress Test", link: "/stressTest" },
      { label: "Mega stress Test", link: "/megaStressTest" },
      { label: "Editor", link: "/editor" },
    ],
  },
];
