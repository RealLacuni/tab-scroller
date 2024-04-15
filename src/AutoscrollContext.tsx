import {createContext } from 'react';
import React from 'react';

type AutoScrollType = {
    isPlaying : boolean;
    playFunction: () => void;
    backToTopFunction: () => void;
}

const initialValues = {
    isPlaying: false,
    playFunction: () => {},
    backToTopFunction: () => {},
} as AutoScrollType;

const AutoScrollContext = createContext<AutoScrollType>(initialValues);

function AutoScrollContextProvider({children}: {children: React.ReactNode}) {
    const [isPlaying, setIsPlaying] = React.useState<boolean>(false);

    const playFunction = () => {
        setIsPlaying(!isPlaying);
    }
    const backToTopFunction = () => {
        window.scrollTo(0,0);
    }
    
    return (
        <AutoScrollContext.Provider value={{ isPlaying, playFunction, backToTopFunction}}>
            {children}
        </AutoScrollContext.Provider>
    )
}

export { AutoScrollContext, AutoScrollContextProvider};
