// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { ipcRenderer } from "electron";

window.addEventListener("DOMContentLoaded", () => {
  console.log('loaded');

  document.getElementById('click').addEventListener('click', () => {
    ipcRenderer.send("screenshot:capture", {})
  })

  ipcRenderer.on("screenshot:captured", (e, imageData) => {
    document.getElementById('placeholder').src = imageData;
  })
})