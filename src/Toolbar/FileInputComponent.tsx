import React from 'react';
import { FolderOpenIcon } from '@heroicons/react/24/outline';

type FileInputComponentProps = {
  setFile : (file: File) => void
}
const FileInputComponent = ({setFile} : FileInputComponentProps) => {

  const handleClick = () => {
    document.getElementById('file-input')?.click();
  };
  return (
    <div className="">
      <FolderOpenIcon className="w-8 h-8 cursor-pointer text-slate-600 bg-slate-300 rounded-sm p-0.5  hover:text-white" onClick={handleClick} />
      <input
        id="file-input"
        aria-label="file-input"
        type="file"
        accept=".text/plain, application/pdf, images/*"
        className="w-48 h-8 bg-transparent hidden"
        onChange={(e) => {
          const selectedFile = e.target.files?.[0];
          if (selectedFile) {
            console.log('sending file');
            setFile(selectedFile);
            window.Main.addFile(JSON.stringify(selectedFile));
          }
        }}
      />
    </div>
  );
};

export default FileInputComponent;
