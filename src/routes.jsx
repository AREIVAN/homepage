import SecurityPage from "./SecurityPage.jsx";
import { AreivanLandingPage, RoboticsPage } from "./pages/index.js";

const routes = {
  "/": AreivanLandingPage,
  "/robotics": RoboticsPage,
  "/security": SecurityPage,
};

export function resolveRoute(pathname = window.location.pathname) {
  return routes[pathname] ?? AreivanLandingPage;
}
