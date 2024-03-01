import React from 'react';
import AppBar from './AppBar';
import Toolbar from './Components/Header';
import MainContent from './Components/MainContent';

const App = () => {
  return (
      <div className='flex flex-col h-screen bg-slate-50'>
      <AppBar />
      <Toolbar />
      <MainContent />
      </div>
  );
};
export default App;
