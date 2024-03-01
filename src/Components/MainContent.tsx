import React from 'react'

let openFiles : File[] = [];

const FilesCallback = (files : string[]) => {
  openFiles = [];
  files.map((file) => {
    openFiles.push(JSON.parse(file));
  });
}

window.Main.onReceivingFiles(FilesCallback);

const MainContent = () => {
  return (
    <div className='flex-1 bg-amber-900'>
      {openFiles.map((file, index) => (
        <div key={index}>
          {file.name}
          </div>))}
    </div>
  )
}

export default MainContent