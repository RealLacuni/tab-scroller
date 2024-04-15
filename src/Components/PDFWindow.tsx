import React, { useContext } from 'react'
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { FilesContext } from '../FilesContext';

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   'pdfjs-dist/build/pdf.worker.min.js',
//   import.meta.url,
// ).toString();

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFWindow = () => {
  const [numPages, setNumPages] = React.useState(0);
  // const isPlaying = useContext(AutoScrollContext).isPlaying;
  const file = useContext(FilesContext).currentFile;
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const extractFileInfo = (pdf: any) => {
    setNumPages(pdf._pdfInfo.numPages);
  }
  
  if (!file) {
    return (
      <div className='flex flex-col flex-1 bg-slate-50 '>
        <div className='flex items-center justify-center flex-1'>
          <div className='text-2xl text-ebony-500'>No file selected</div>
        </div>
      </div>
    )
  }

  return (
    <div className='flex flex-col flex-1 overflow-y-auto'>
      <Document
        file={file}
        onLoadSuccess={extractFileInfo}
        // styling for 2-page layout like in Adobe Reader or Word, without overlapping pages
        className={'grid grid-cols-2 gap-4'}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            scale={1}
            width={800}
          />
        ))}
      </Document>
    </div>
    )
};


export default PDFWindow