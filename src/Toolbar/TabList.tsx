import React, { useContext } from 'react'
import { FilesContext } from '../FilesContext';

    
const TabList = () => {
  const tabs = useContext(FilesContext).openFiles;

  return (
    <div>TabList</div>
  )
}

export default TabList