import { h, render } from "preact";
import App from "./App";

const init = () => {
  const MOUNT_NODE = document.createElement("div");
  MOUNT_NODE.setAttribute("id", "plugin");
  document.body.appendChild(MOUNT_NODE);
  render(<App />, MOUNT_NODE);
};

window.onload = () => {
  init();
};
