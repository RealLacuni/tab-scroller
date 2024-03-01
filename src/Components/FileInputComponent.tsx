import React, { useState } from 'react';
// import + from heroicon
import { PlusIcon } from '@heroicons/react/20/solid';

const FileInputComponent = () => {
  const [file, setFile] = useState<File | null>(null);
  const path = file?.path;
  console.log(path);

  const handleClick = () => {
    document.getElementById('file-input')?.click();
  };
  return (
    <div className="w-48 relative">
      <PlusIcon className="w-8 h-8 absolute top-1 cursor-pointer" onClick={handleClick} />
      <input
        id="file-input"
        aria-label="file-input"
        type="file"
        accept=".text/plain, application/pdf, images/*"
        className="w-48 h-8 bg-transparent hidden"
        onChange={(e) => {
          const selectedFile = e.target.files?.[0];
          if (selectedFile) {
            setFile(selectedFile);
          }
        }}
      />
    </div>
  );
};

export default FileInputComponent;
