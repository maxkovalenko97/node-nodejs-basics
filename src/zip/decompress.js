import { pipeline } from 'stream';
import { createUnzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);
const pathFile = join(_dirname, 'files', 'archive.gz');


const decompress = async () => {
    const gunzip = createUnzip();
    const sourceFile = createReadStream(pathFile);
    const destination = createWriteStream(join(_dirname, 'files', 'fileToCompress.txt'));

    pipeline(sourceFile, gunzip, destination, (err) => {
        if (err) {
            console.error('An error occurred:', err);
            process.exitCode = 1;
        }
    });
};

await decompress();