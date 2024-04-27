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
