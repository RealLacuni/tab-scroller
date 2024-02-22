import React from 'react';
import AppBar from './AppBar';
import Header from './Components/Header';
import PDFContent from './Components/PDFContent';

const App = () => {
  return (
      <div className='flex flex-col h-screen'>
      <AppBar />
      <Header />
      <PDFContent />
      </div>
  );
};
export default App;
