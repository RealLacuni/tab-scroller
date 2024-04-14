import React from 'react';
import AppBar from './AppBar';
import Toolbar from './Toolbar/Toolbar';
import PDFWindow from './Components/PDFWindow';
import { AutoScrollContextProvider } from './AutoscrollContext';
const App = () => {


  return (
      <div className='flex flex-col h-screen bg-slate-50 pt-6'>
      <AppBar />
      <AutoScrollContextProvider>
      <Toolbar />
      <PDFWindow />
      </AutoScrollContextProvider>
      </div>
  );
};
export default App;
