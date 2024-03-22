import React, { useEffect } from 'react'
import { pdfjs, Document, Page } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();


type PDFWindowProps = {
  filePath: string
}

const PDFWindow = ({filePath= ''}: PDFWindowProps) => {
  //TODO: pdf render, load state, error state
  return (<>
  </>)
};


export default PDFWindow