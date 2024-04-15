import { ipcRenderer, contextBridge } from 'electron';
import { Settings } from '../shared/types';

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
  PrintInBackend: (message: string) => {
    return ipcRenderer.send('printInBackend', message);
  },
  UpdateSettings: (preferences: Settings) => {
    return ipcRenderer.sendSync('updateSettings', preferences);
  },
  GetSettings: () => {
    return ipcRenderer.sendSync('getSettings');
  },
  // unused
  onUpdatedSettings: (callback: (settings: Settings) => void) => {
    ipcRenderer.on('updatedSettings', (_, settings) => callback(settings));
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
