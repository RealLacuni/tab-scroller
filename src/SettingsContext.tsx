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
  const updateSettings = (settings: Settings) => {
    setSettings(settings);
    const success = window.Main.UpdateSettings(settings);
    if (!success) {
      window.Main.PrintInBackend("Error updating settings");
    }
  };

  return <SettingsContext.Provider value={{updateSettings, settings }}>{children}</SettingsContext.Provider>;
}

export { SettingsContext, SettingsContextProvider };
