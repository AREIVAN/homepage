import { resolveRoute } from "./routes.jsx";

export default function App() {
  const Page = resolveRoute();

  return <Page />;
}
