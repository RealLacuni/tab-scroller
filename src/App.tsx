import React from 'react';
import AppBar from './AppBar';
import Toolbar from './Toolbar/Toolbar';
import PDFWindow from './Components/PDFWindow';

const App = () => {


  return (
      <div className='flex flex-col h-screen bg-slate-50 pt-7'>
      <AppBar />
      <Toolbar />
      <PDFWindow />
      </div>
  );
};
export default App;
