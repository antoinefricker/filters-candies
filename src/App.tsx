import { RouterProvider, Outlet } from "@tanstack/react-router";

import { AppHeaderMenu } from "./components/AppHeaderMenu";
import { router, links } from "./AppRouter";
import { createStyles, MantineProvider } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  app: {
    display: "grid",
    width: "100vw",
    height: "100vh",
    gridTemplateRows: "auto 1fr",
    gridTemplateColumns: "1fr",
  },
  header: {
    gridRowStart: 1,
    gridColumnStart: 1,
  },
  main: {
    gridColumnStart: 1,
    gridRowStart: 2,
  },
}));

function App() {
  const { classes } = useStyles();
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div className={classes.app}>
        <RouterProvider router={router}>
          <div className={classes.header}>
            <AppHeaderMenu links={links} />
          </div>
          <div className={classes.main}>
            <Outlet />
          </div>
        </RouterProvider>
      </div>
    </MantineProvider>
  );
}

export default App;
