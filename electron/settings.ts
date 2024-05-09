import fs from 'fs';
import path from 'path';
import { app } from 'electron';
import { Settings } from '../shared/types';

const appPath = app.getPath('userData');
const settingsPath = path.join(appPath, 'profiles', 'settings.json');
const dirPath = path.dirname(settingsPath);

function getSettings(): Settings {
    //TODO: validation
    if (!fs.existsSync(dirPath)) {
        console.log("settings directory not found, creating in dir", dirPath);
        fs.mkdirSync(dirPath, { recursive: true });
    }

    if (!fs.existsSync(settingsPath)) {
        console.log("settings file not found, creating defaults");
        createSettings(defaultSettings);
        return defaultSettings;
    }

    const file = fs.readFileSync(settingsPath, 'utf8');
    // check that file was able to be opened
    if (file === undefined) {
        createSettings(defaultSettings);
        return defaultSettings;
    }
    const pref = JSON.parse(file);
    return pref;
}

function createSettings(preferences: Settings) {
    fs.writeFileSync(settingsPath, JSON.stringify(preferences));
}

function updateSettings(settings: Settings): boolean {
    try {
        fs.writeFileSync(settingsPath, JSON.stringify(settings));
        return true;
    }
    catch {
        console.log("error updating settings file");
        return false;
    }
}

const defaultSettings: Settings = {
    width: 50,
    height: 10,
    scale: 1,
    doublePage: false,
    scrollSpeed: 0,
}

export { getSettings, createSettings, updateSettings };