import { createContext } from 'react';
import React from 'react';
import { Settings } from '../shared/types';

type UserSettingsType = {
  settings: Settings;
  updateSettings: (settings: Settings) => void;
};


const initialValues = window.Main.GetSettings() as Settings;
const SettingsContext = createContext<UserSettingsType>({ settings: initialValues, updateSettings: () => {} });

function SettingsContextProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = React.useState<Settings>(initialValues);
//   updates both local copy of settings and persistent settings in the backend
  const updateSettings = (newSettings: Settings) => {
    console.log('updating settings, ', newSettings);
    
    setSettings({ ...newSettings });
    const success = window.Main.UpdateSettings(newSettings);
    if (!success) {
      window.Main.PrintInBackend("Error updating settings");
    }
  };

  return <SettingsContext.Provider value={{updateSettings, settings }}>{children}</SettingsContext.Provider>;
}

export { SettingsContext, SettingsContextProvider };
