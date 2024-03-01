import { ipcRenderer, contextBridge } from 'electron';

declare global {
  interface Window {
    Main: typeof api;
    ipcRenderer: typeof ipcRenderer;
  }
}

const api = {
  addFile: (fString : string) => {
    ipcRenderer.send('add-file', fString);
  },

  // takes a callback function that will be called  with the files array when the main process invokes the ipc, performs some action
  onReceivingFiles: (callback: (files: string[]) => void) => {
    ipcRenderer.on('open-files', (_, files: string[]) => {
      callback(files);
    });
  },
  /**
    Appbar utility functions
   */
  Minimize: () => {
    ipcRenderer.send('minimize');
  },
  Maximize: () => {
    ipcRenderer.send('maximize');
  },
  Close: () => {
    ipcRenderer.send('close');
  }
};
contextBridge.exposeInMainWorld('Main', api);
/**
 * Using the ipcRenderer directly in the browser through the contextBridge ist not really secure.
 * I advise using the Main/api way !!
 */
contextBridge.exposeInMainWorld('ipcRenderer', ipcRenderer);
