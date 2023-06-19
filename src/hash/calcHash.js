import fs from 'fs';
import crypto from 'crypto';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);

const calculateHash = async () => {
    const rdf = fs.createReadStream(join(_dirname, 'files', 'fileToCalculateHashFor.txt'));
    const hash = crypto.createHash('sha256');
    hash.setEncoding('hex');
    rdf.on('end', function () {
        hash.end();
        console.log(hash.read());
    });

    rdf.pipe(hash);
};

await calculateHash();