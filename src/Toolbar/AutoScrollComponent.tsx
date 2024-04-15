import React, { useContext } from 'react';

import { PlayIcon, PauseIcon, BarsArrowUpIcon } from '@heroicons/react/24/outline';
import { AutoScrollContext } from '../AutoscrollContext';


const AutoScrollComponent = () => {
  const {isPlaying, playFunction, backToTopFunction} = useContext(AutoScrollContext);
  return (
    <>
      {/* TODO: implement Play, Pause, and Back to Top component buttons*/}
{!isPlaying ?      <PlayIcon className="w-8 h-8 cursor-pointer border border-slate-400 text-slate-600 bg-slate-300 rounded-sm p-0.5  hover:text-white"
      onClick={playFunction}/> : 
      <PauseIcon className="w-8 h-8 cursor-pointer border border-slate-400 text-slate-600 bg-slate-300 rounded-sm p-0.5  hover:text-white"
      onClick={playFunction}/>}
      <BarsArrowUpIcon className="w-8 h-8 cursor-pointer border border-slate-400 text-slate-600 bg-slate-300 rounded-sm p-0.5 hover:text-white" 
      onClick={backToTopFunction}/>
    </>
  );
};

export default AutoScrollComponent;
