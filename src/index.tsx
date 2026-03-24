import React from "react";
import { createRoot } from "react-dom/client"; // Cambia esta línea
import App from "./components/App";

const container = document.getElementById("app");
if (container) {
    const root = createRoot(container); // Nueva forma de React 18/19
    root.render(<App message="Hello, World!" />);
}
