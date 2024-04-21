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

  const contextValue = React.useMemo(() => {
    const updateSettings = (newSettings: Settings) => {
      setSettings((prevSettings) => {
        return { ...prevSettings, ...newSettings };
      });
      const success = window.Main.UpdateSettings(newSettings);
      if (!success) {
        window.Main.PrintInBackend("Error updating settings");
      }
    };

    return { updateSettings, settings };
  }, [settings]);

  return (
    <SettingsContext.Provider value={contextValue}>
      {children}
    </SettingsContext.Provider>
  );
}

export { SettingsContext, SettingsContextProvider };
