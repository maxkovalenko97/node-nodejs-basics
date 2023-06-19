import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFile } from 'fs';

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);

const read = async () => {
    const filePath = join(_dirname, 'files', 'fileToRead.txt');

    readFile(filePath, "utf-8", (err, data) => {
        if (err) throw new Error("FS operation failed");
        console.log(data);
    })
};

await read();