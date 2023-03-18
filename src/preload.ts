// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { ipcRenderer } from "electron";
import axios from "axios";

window.addEventListener("DOMContentLoaded", () => {
  console.log('loaded');

  document.getElementById('click').addEventListener('click', () => {
    ipcRenderer.send("screenshot:capture", {})
  })

  ipcRenderer.on("screenshot:captured", async (e, imageData) => {
    console.log(imageData);

    const data = await axios({
      method: 'post',
      url: 'http://localhost:8080/api/parseData',
      data: {
        imagePayloadBase64: imageData
      }
    })
    
    console.log(data);
  })
})