import React from 'react'
import FileInputComponent from './FileInputComponent'
import SettingsComponent from './SettingsComponent'

type ToolbarProps = {
    openFiles: File[],
    setFile: (file: File) => void
}

const Toolbar = ({openFiles, setFile} : ToolbarProps) => (
    <div className='grid grid-cols-12 bg-slate-200 border-b border-slate-800 py-0.5'>
        <div className='flex flex-row items-start col-start-1 gap-1'>
        <FileInputComponent setFile={setFile}/>
        <SettingsComponent  />
        </div>
        
        <div>
        {openFiles.map((file, index) => (
        <div key={index}>
          {file.name}
          </div>))}
        </div>
    </div>
)

export default Toolbar