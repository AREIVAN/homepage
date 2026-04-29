import AreivanLandingPage, { RoboticsPage } from "../areivan_landing_page.jsx";
import SecurityPage from "./SecurityPage.jsx";

export default function App() {
  if (window.location.pathname === "/security") {
    return <SecurityPage />;
  }

  if (window.location.pathname === "/robotics") {
    return <RoboticsPage />;
  }

  return <AreivanLandingPage />;
}
