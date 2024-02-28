import React from 'react';
import AppBar from './AppBar';
import Header from './Components/Header';
import MainContent from './Components/MainContent';

const App = () => {
  return (
      <div className='flex flex-col h-screen'>
      <AppBar />
      <Header />
      <MainContent />
      </div>
  );
};
export default App;
