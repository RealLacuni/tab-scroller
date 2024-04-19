import {createContext } from 'react';
import React from 'react';

type AutoScrollContextType = {
    isPlaying: boolean;
    setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
};

const AutoScrollContext = createContext<AutoScrollContextType>({
    isPlaying: false,
    setIsPlaying: () => {},
});

function AutoScrollContextProvider({children}: {children: React.ReactNode}) {
    const [isPlaying, setIsPlaying] = React.useState<boolean>(false);

    
    return (
        <AutoScrollContext.Provider value={{ isPlaying, setIsPlaying}}>
            {children}
        </AutoScrollContext.Provider>
    )
}

export { AutoScrollContext, AutoScrollContextProvider};
