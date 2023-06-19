import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const scriptFile = join(__dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
    const child = spawn('node', [scriptFile, ...args]);

    process.stdin.on('data', (data) => child.stdin.write(data));
    child.stdout.on('data', (data) => console.log(`Child process stdout:\n${data.toString()}`));
};

spawnChildProcess(['--someArgument1', '--someArgument2']);

