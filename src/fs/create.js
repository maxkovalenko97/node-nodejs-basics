import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { access, writeFile } from 'fs';

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);

const create = async () => {
    const pathToFile = join(_dirname, 'files', 'fresh.txt');

    access(pathToFile, (err) => {
        if (!err) {
            // console.error("FS operation failed")
            throw new Error("FS operation failed");
        } else {
            writeFile(pathToFile, 'I am fresh and young', (err) => {
                if (err) throw err;
                console.log('Файл создан');
            }
            )
        }
    });
};

await create();
