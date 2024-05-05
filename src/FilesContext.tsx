import {createContext } from 'react';
import React from 'react';

type FilesContextType = {
    openFiles: File[],
    currentFile: File | null,
    updateCurrentFile: (file: File | null) => void,
    updateOpenFiles: (files: File[]) => void
}

const initialValues = {
    openFiles: [],
    currentFile: null,
    updateOpenFiles: () => {},
    updateCurrentFile: () => {}
  } as FilesContextType;

const FilesContext = createContext<FilesContextType>(initialValues);

function FilesContextProvider({children}: {children: React.ReactNode}) {
    const [openFiles, setOpenFiles] = React.useState<File[]>([]);
    const [currentFile, setCurrentFile] = React.useState<File | null>(null);

    const updateOpenFiles = (files : File[]) => {
        setOpenFiles(files);
    }

    const updateCurrentFile = (file: File | null) => {
        setCurrentFile(file);
    }
    
    return (
        <FilesContext.Provider value={{openFiles, currentFile, updateCurrentFile, updateOpenFiles}}>
            {children}
        </FilesContext.Provider>
    )
}

export { FilesContext, FilesContextProvider};
export type {FilesContextType};
