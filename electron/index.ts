// Native
import { join } from 'path';
import * as fs from 'fs';
// Packages
import { BrowserWindow, app, ipcMain } from 'electron';
import isDev from 'electron-is-dev';
import { getSettings, updateSettings } from './settings';

const height = 600;
const width = 800;
//  file path handling here
const openFiles: string[] = [];

function createWindow() {
  // Create the browser window.
  const window = new BrowserWindow({
    width,
    height,
    //  change to false to use AppBar
    frame: false,
    show: false,
    resizable: true,
    fullscreenable: true,
    webPreferences: {
      preload: join(__dirname, 'preload.js')
    }
  });
  console.log('dirname', __dirname);
  
  // create new file containing the dirname
  const asarPath = join("..", "..", __dirname);
  const asarBuffer = fs.readFileSync(asarPath);
    fs.writeFile(join('F:\\Programming\\tab-scroller', 'test.json'), JSON.stringify(fs.readdirSync(asarPath)), (err) => {
      if (err) {
        console.error(err);
      }
    });

    fs.writeFile(join('F:\\Programming\\tab-scroller', 'test2.json'), JSON.parse(asarBuffer.toString()) ,(err) => {
      if (err) {
        console.error(err);
      }
    });
  
  const port = process.env.PORT || 3000;
  const mainUrl = isDev
    ? `http://localhost:${port}`
    : join(__dirname, 'src/out/index.html');
  // and load the index.html of the app.
  if (isDev) {
    window?.loadURL(mainUrl);
  } else {
    window?.loadFile(mainUrl);
  }

  ipcMain.on('add-file', (_, file: string) => {
    if (file === null) {
      return;
    }
    openFiles.push(file);
    window.webContents.send('open-files', openFiles);
  });

  // For AppBar
  ipcMain.on('minimize', () => {
    // eslint-disable-next-line no-unused-expressions
    window.isMinimized() ? window.restore() : window.minimize();
    // or alternatively: win.isVisible() ? win.hide() : win.show()
  });
  ipcMain.on('maximize', () => {
    // eslint-disable-next-line no-unused-expressions
    window.isMaximized() ? window.restore() : window.maximize();
  });

  ipcMain.on('close', () => {
    window.close();
  });

  ipcMain.on('getSettings', (event) => {
    event.returnValue = getSettings();
  });

  ipcMain.on('updateSettings', (event, settings) => {
    event.returnValue = updateSettings(settings);
  });

  ipcMain.on('PrintInBackend', (_, message) => {
    console.log(message);
  });

  ipcMain.handle('read-image-file', async (_event, filePath) => {
    try {
      return fs.readFileSync(filePath, { encoding: 'base64' })
    } catch (err) {
      console.error(err);
      return null;
    }
  });

  window.once('ready-to-show', () => {
    window.show();
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});