import React, { createContext, useState } from 'react';

interface FileContextType {
    file: File | null;
    setFile: (file: File | null) => void;
}

const FileContext = createContext<FileContextType>({
    file: null,
    setFile: () => {}
});

const FileContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [file, setFile] = useState<File | null>(null);

    return (
        <FileContext.Provider value={{ file, setFile }}>
            {children}
        </FileContext.Provider>
    );
};

export default FileContextProvider;
