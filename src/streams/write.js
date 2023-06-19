import fs from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const { stdin } = process;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const write = async () => {
    console.log(`Write smth: (use "ctrl" + "c" to finish input)`);
    const output = fs.createWriteStream(join(__dirname, 'files', 'fileToWrite.txt'));
    stdin.on('data', data => output.write(data));
};

await write();