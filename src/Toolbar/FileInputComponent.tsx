import React, { useContext } from 'react';
import { FolderOpenIcon } from '@heroicons/react/24/outline';
import { FilesContext } from '../FilesContext';


const FileInputComponent = () => {
  const files = useContext(FilesContext).openFiles;
  const currentFile = useContext(FilesContext).currentFile;
  const updateCurrentFile = useContext(FilesContext).updateCurrentFile;
  const updateOpenFiles = useContext(FilesContext).updateOpenFiles;

  const handleClick = () => {
    document.getElementById('file-input')?.click();
  };
  return (
    <div className="w-8">
      <FolderOpenIcon className="w-8 h-8 cursor-pointer border border-slate-400 text-slate-600 bg-slate-300 rounded-sm p-0.5  hover:text-white" onClick={handleClick} />
      <input
        id="file-input"
        aria-label="file-input"
        type="file"
        accept=".text/plain, application/pdf, images/*"
        className="w-48 h-8 bg-transparent hidden"
        onChange={(e) => {
          const selectedFile = e.target.files?.[0];
          if (selectedFile) {
            if (!currentFile) updateCurrentFile(selectedFile);
            const newFiles = [...files, selectedFile];
            updateOpenFiles(newFiles);
          }
        }}
      />
    </div>
  );
};

export default FileInputComponent;
