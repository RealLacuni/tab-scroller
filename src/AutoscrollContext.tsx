import {createContext } from 'react';
import React from 'react';

type AutoScrollType = {
    speed: number,
    handleSpeedChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

}

const initialValues = {
    speed: 0,
    handleSpeedChange: () => {},
} as AutoScrollType;

const AutoScrollContext = createContext<AutoScrollType>(initialValues);

function AutoScrollContextProvider({children}: {children: React.ReactNode}) {
    const [speed, setSpeed] = React.useState<number>(0);

    const handleSpeedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSpeed(parseInt(e.target.value));
    }
    
    return (
        <AutoScrollContext.Provider value={{speed, handleSpeedChange}}>
            {children}
        </AutoScrollContext.Provider>
    )
}

export { AutoScrollContext, AutoScrollContextProvider};
