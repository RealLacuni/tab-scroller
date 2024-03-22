import React from 'react'
import FileInputComponent from './FileInputComponent'

type ToolbarProps = {
    openFiles: File[],
    setFile: (file: File) => void
}

const Toolbar = ({openFiles, setFile} : ToolbarProps) => (
    <div className='flex w-full h-12 border-b border-ebony-400 flex-col justify-center gap-4 px-2'>
        <FileInputComponent setFile={setFile}/>
        <div>
        {openFiles.map((file, index) => (
        <div key={index}>
          {file.name}
          </div>))}
        </div>
    </div>
)

export default Toolbar