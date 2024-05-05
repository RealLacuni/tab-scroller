// custom script that copies pdf.worker.js to dist folder after building

import path from 'node:path';
import fs from 'node:fs';

function copyWorker() {
    

const pdfjsDistPath = path.dirname(require.resolve('pdfjs-dist/package.json'));
const pdfWorkerPath = path.join(pdfjsDistPath, 'build', 'pdf.worker.js');

fs.copyFileSync(pdfWorkerPath, './dist/pdf.worker.js');
}

export default copyWorker;