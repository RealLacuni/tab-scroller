import {createContext, useRef } from 'react';
import React from 'react';

type AutoScrollContextType = {
    isPlaying: boolean;
    setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
    containerRef: React.RefObject<HTMLDivElement> | null;
};

const AutoScrollContext = createContext<AutoScrollContextType>({
    isPlaying: false,
    setIsPlaying: () => {},
    containerRef: null
});

function AutoScrollContextProvider({children}: {children: React.ReactNode}) {
    const [isPlaying, setIsPlaying] = React.useState<boolean>(false);
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <AutoScrollContext.Provider value={{ isPlaying, setIsPlaying, containerRef }}>
            {children}
        </AutoScrollContext.Provider>
    )
}

export { AutoScrollContext, AutoScrollContextProvider};
