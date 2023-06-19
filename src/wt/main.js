import { Worker } from 'worker_threads';
import { cpus } from 'os';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const workerFile = join(__dirname, 'worker.js');

const performCalculations = async () => {
    let incNumber = 25;

    const workerResults = await Promise.allSettled(cpus().map(() => {
        return new Promise((result, reject) => {
            const worker = new Worker(workerFile, { workerData: incNumber++ });
            worker.on('message', message => result(message));
            worker.on('error', error => reject(error));
        });
    }))

    const resultsArr = workerResults.map(({ status, value }) => {
        if (status === 'fulfilled') {
            return { status: 'resolved', data: value };
        } else {
            return { status: 'error', data: null };
        }
    });

    console.log(resultsArr);
};

await performCalculations();