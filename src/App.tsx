import React from 'react';
import AppBar from './AppBar';
import Toolbar from './Toolbar/Toolbar';
import PDFWindow from './Components/PDFWindow';
import { AutoScrollContextProvider } from './AutoscrollContext';
import { SettingsContextProvider } from './SettingsContext';

const App = () => {
  return (
    <AutoScrollContextProvider>
      <SettingsContextProvider>
        <div className="flex flex-col h-screen bg-slate-50 pt-6">
          <AppBar />
          <Toolbar />
          <PDFWindow />
        </div>
      </SettingsContextProvider>
    </AutoScrollContextProvider>
  );
};
export default App;
