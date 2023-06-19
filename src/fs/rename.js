import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);

const rename = async () => {
    const pathDir = join(_dirname, 'files');
    fs.rename(join(pathDir, 'wrongFilename.txt'), join(pathDir, 'properFilename.md'), (err) => {
        if (err) throw new Error('FS operation failed');
        console.log('Файл переименован');
    })
};

await rename();