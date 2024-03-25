import {createContext } from 'react';
import React from 'react';

type FilesContextType = {
    openFiles: File[],
    currentFile: File | null,
    setCurrentFile: (file: File) => void
    setFiles: (files: File[]) => void
}

const initialValues = {
    openFiles: [],
    currentFile: null,
    setCurrentFile: () => {},
    setFiles: () => {}
  } as FilesContextType;

const FilesContext = createContext<FilesContextType>(initialValues);

function FilesContextProvider({children}: {children: React.ReactNode}) {
    const [openFiles, setOpenFiles] = React.useState<File[]>([]);
    const [currentFile, setCurrentFile] = React.useState<File | null>(null);

    const setFiles = (files : File[]) => {
        setOpenFiles(files);
    }
    
    return (
        <FilesContext.Provider value={{openFiles, currentFile, setCurrentFile, setFiles}}>
            {children}
        </FilesContext.Provider>
    )
}

export { FilesContext, FilesContextProvider};
export type {FilesContextType};
