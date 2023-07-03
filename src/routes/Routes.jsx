// import { useContext } from "react";
import {
  Routes as RoutesWrapper,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import { mainRoutes } from "./const";

const { Layout, routes } = mainRoutes;

const Routes = () => {
  return (
    <Router>
      <RoutesWrapper>
        {routes.map(({ path, Component }) => (
          <Route
            key={path}
            path={path}
            element={
              <Layout>
                <Component />
              </Layout>
            }
          />
        ))}
      </RoutesWrapper>
    </Router>
  );
};

export default Routes;
