import {createContext } from 'react';
import React from 'react';

type AutoScrollType = {
    speed: number,
    handleSpeedChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isPlaying : boolean;
    playFunction: () => void;
    backToTopFunction: () => void;
}

const initialValues = {
    speed: 0,
    handleSpeedChange: () => {},
    isPlaying: false,
    playFunction: () => {},
    backToTopFunction: () => {},
} as AutoScrollType;

const AutoScrollContext = createContext<AutoScrollType>(initialValues);

function AutoScrollContextProvider({children}: {children: React.ReactNode}) {
    const [speed, setSpeed] = React.useState<number>(0);
    const [isPlaying, setIsPlaying] = React.useState<boolean>(false);

    const handleSpeedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSpeed(parseInt(e.target.value));
    }

    const playFunction = () => {
        setIsPlaying(!isPlaying);
    }
    const backToTopFunction = () => {
        window.scrollTo(0,0);
    }
    
    return (
        <AutoScrollContext.Provider value={{speed, handleSpeedChange, isPlaying, playFunction, backToTopFunction}}>
            {children}
        </AutoScrollContext.Provider>
    )
}

export { AutoScrollContext, AutoScrollContextProvider};
