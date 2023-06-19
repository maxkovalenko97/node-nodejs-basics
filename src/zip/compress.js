import { pipeline } from 'stream';
import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';


const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);
const pathFile = join(_dirname, 'files', 'fileToCompress.txt');

const compress = async () => {
    const gzip = createGzip();
    const sourceFile = createReadStream(pathFile);
    const archivedFile = createWriteStream(join(_dirname, 'files', 'archive.gz'));

    pipeline(sourceFile, gzip, archivedFile, (err) => {
        if (err) {
            console.error('An error occurred:', err);
            process.exitCode = 1;
        }
    });
};

await compress();