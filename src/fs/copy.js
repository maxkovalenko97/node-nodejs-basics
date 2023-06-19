import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { access, readdir, mkdir, copyFile } from 'fs';

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);

const copy = async () => {
    const pathDirFrom = join(_dirname, 'files');
    const pathDirTo = join(_dirname, 'files_copy');

    access(pathDirFrom, (err) => {
        if (err) throw new Error("FS operation failed");
    })

    readdir(pathDirFrom, (err, files) => {
        if (err) throw err;

        mkdir(pathDirTo, (err) => {
            if (err) throw new Error("FS operation failed");

            files.forEach(file => {
                copyFile(join(pathDirFrom, file), join(pathDirTo, file), (err) => {
                    if (err) throw new Error("dddd");
                })
            })
        })
    })
};

await copy();
