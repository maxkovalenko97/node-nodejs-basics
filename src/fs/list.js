import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readdir } from 'fs';

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);

const list = async () => {
    const pathDirFrom = join(_dirname, 'files');

    readdir(pathDirFrom, (err, files) => {
        if (err) throw new Error("FS operation failed");
        console.log(files);
    })
};

await list();
