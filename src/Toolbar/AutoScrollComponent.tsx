import React, { useContext } from 'react';

import { PlayIcon, PauseIcon, BarsArrowUpIcon } from '@heroicons/react/24/outline';
import { AutoScrollContext } from '../AutoscrollContext';
import Slider from '../Components/Slider';


const AutoScrollComponent = () => {
  const { isPlaying, setIsPlaying } = useContext(AutoScrollContext);

  const playFunction = () => {
    setIsPlaying(!isPlaying);
  }

  const backToTopFunction = () => {
    window.scrollTo(0, 0);
  }

  return (
    <div className='flex flex-row items-center gap-1 text-slate-600'>
      {/* TODO: implement Play, Pause, and Back to Top component buttons*/}
      <Slider minVal={0} maxVal={100} stepSize={1}  fieldName='scrollSpeed'/>
{!isPlaying ?      <PlayIcon className="w-6 h-6 cursor-pointer border border-slate-400 text-slate-600 bg-slate-300 rounded-sm p-0.5  hover:text-white"
      onClick={playFunction}/> : 
      <PauseIcon className="w-6 h-6 cursor-pointer border border-slate-400 text-slate-600 bg-slate-400 rounded-sm p-0.5 hover:text-white"
      onClick={playFunction}/>}
      <BarsArrowUpIcon className="w-6 h-6 cursor-pointer border border-slate-400 text-slate-600 bg-slate-300 rounded-sm p-0.5 hover:text-white" 
      onClick={backToTopFunction}/>
    </div>
  );
};

export default AutoScrollComponent;
