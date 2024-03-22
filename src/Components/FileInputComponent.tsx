import React from 'react';
// import + from heroicon
import { PlusIcon } from '@heroicons/react/20/solid';

type FileInputComponentProps = {
  setFile : (file: File) => void
}
const FileInputComponent = ({setFile} : FileInputComponentProps) => {

  const handleClick = () => {
    document.getElementById('file-input')?.click();
  };
  return (
    <div className="w-48 relative">
      <PlusIcon className="w-8 h-8 top-1 cursor-pointer text-black bg-pink-200" onClick={handleClick} />
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
