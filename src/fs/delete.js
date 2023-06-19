import { unlink } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);

const remove = async () => {
    const pathToFile = join(_dirname, 'files', 'fileToRemove.txt');
    unlink(pathToFile, (err) => {
        if (err) throw new Error('FS operation failed');
    })
};

await remove();
