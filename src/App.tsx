import React from 'react';
import AppBar from './AppBar';
import Toolbar from './Components/Toolbar';
import PDFWindow from './Components/PDFWindow';

let openFiles : File[] = [];

const FilesCallback = (files : string[]) => {
  openFiles = [];
  files.map((file) => {
    openFiles.push(JSON.parse(file));
  });
}

window.Main.onReceivingFiles(FilesCallback);
const App = () => {
  const [currentFilePath, setCurrentFilePath] = React.useState('');

  return (
      <div className='flex flex-col h-screen bg-slate-50'>
      <AppBar />
      <Toolbar openFiles={openFiles} setFilePath = {setCurrentFilePath}/>
      <PDFWindow filePath={currentFilePath}/>
      </div>
  );
};
export default App;
