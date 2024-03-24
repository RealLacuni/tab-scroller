import React, { useState } from 'react';
import AppBar from './AppBar';
import Toolbar from './Toolbar/Toolbar';
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
  const [file, setFile] = useState(null as File | null);

  return (
      <div className='flex flex-col h-screen bg-slate-50 pt-7'>
      <AppBar />
      <Toolbar openFiles={openFiles} setFile = {setFile}/>
      <PDFWindow file={file}/>
      </div>
  );
};
export default App;
