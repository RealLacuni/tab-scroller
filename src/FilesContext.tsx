import {createContext } from 'react';
import React from 'react';

type FilesContextType = {
    openFiles: File[],
    currentFile: File | null,
    setCurrentFile: (file: File) => void
    setFile: (file: File) => void
}

const initialValues = {
    openFiles: [],
    currentFile: null,
    setCurrentFile: () => {},
    setFile: () => {}
  } as FilesContextType;

const FilesContext = createContext<FilesContextType>(initialValues);

function FilesContextProvider({children}: {children: React.ReactNode}) {
    const [openFiles, setOpenFiles] = React.useState<File[]>([]);
    const [currentFile, setCurrentFile] = React.useState<File | null>(null);

    const setFile = (file: File) => {
        setOpenFiles([...openFiles, file]);
        setCurrentFile(file);
    }

    return (
        <FilesContext.Provider value={{openFiles, currentFile, setCurrentFile, setFile}}>
            {children}
        </FilesContext.Provider>
    )
}

export { FilesContext, FilesContextProvider};
export type {FilesContextType};
