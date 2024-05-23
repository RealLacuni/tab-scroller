import React, { useContext, useRef } from 'react';
import { FolderOpenIcon } from '@heroicons/react/24/outline';
import { FilesContext } from '../FilesContext';

const FileInputComponent = () => {
  const files = useContext(FilesContext).openFiles;
  const updateCurrentFile = useContext(FilesContext).updateCurrentFile;
  const updateOpenFiles = useContext(FilesContext).updateOpenFiles;
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const handleClick = () => {
    document.getElementById('file-input')?.click();
  };

  const handleFileSelection = (selectedFile: File | undefined) => {
    if (selectedFile) {
      const newFiles = [...files, selectedFile]
      updateOpenFiles(newFiles);
      updateCurrentFile(selectedFile);

      // Reset the file input value to allow the same file to be selected again
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };
  
  return (
    <div>
      <FolderOpenIcon
        className="w-8 h-8 cursor-pointer border rounded-lg p-0.5
        bg-slate-300 border-slate-400 text-slate-600  hover:text-white"
        onClick={handleClick}
      />
      <input
        id="file-input"
        aria-label="file-input"
        type="file"
        accept=".text/plain, application/pdf, images/*, .pdf, .jpeg, .png, .jpg"
        className="w-48 h-8 bg-transparent hidden"
        ref={fileInputRef}
        onChange={(e) => {
          const selectedFile = e.target.files?.[0];
          handleFileSelection(selectedFile);
        }}
      />
    </div>
  );
};

export default FileInputComponent;
