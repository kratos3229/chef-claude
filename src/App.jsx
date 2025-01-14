import { createRoot } from "react-dom/client";
import Header from "./Header.jsx";
import Main from "./main.jsx";

const root = createRoot(document.getElementById("root"));

root.render(
  <>
    <Header />
    <Main />
  </>
);
