import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
    const readableStream = fs.createReadStream(join(__dirname, 'files', 'fileToRead.txt'), 'utf-8');
    readableStream.on('data', chunk => console.log(chunk));
};

await read();