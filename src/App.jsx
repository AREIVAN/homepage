import AreivanLandingPage, { RoboticsPage } from "../areivan_landing_page.jsx";

export default function App() {
  if (window.location.pathname === "/robotics") {
    return <RoboticsPage />;
  }

  return <AreivanLandingPage />;
}
