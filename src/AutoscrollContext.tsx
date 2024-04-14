import {createContext } from 'react';
import React from 'react';

type AutoScrollType = {
    speed: number,
    setSpeed: (speed: number) => void

}

const initialValues = {
    speed: 0,
    setSpeed: () => {}
} as AutoScrollType;

const AutoScrollContext = createContext<AutoScrollType>(initialValues);

function AutoScrollContextProvider({children}: {children: React.ReactNode}) {
    const [speed, setSpeed] = React.useState<number>(0);
    
    return (
        <AutoScrollContext.Provider value={{speed, setSpeed}}>
            {children}
        </AutoScrollContext.Provider>
    )
}

export { AutoScrollContext, AutoScrollContextProvider};
