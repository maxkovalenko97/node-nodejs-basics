import { pipeline, Transform } from 'stream';

const transform = async () => {
    const input = process.stdin;
    const output = process.stdout;
    const transform = new Transform({
        transform(chunk, enc, cb) {
            const chunkStr = chunk.toString().trim();
            const reverseChunk = chunkStr.split('').reverse().join('');
            this.push(reverseChunk + '\n');
            cb();
        }
    }
    );

    pipeline(
        input,
        transform,
        output,
        (err) => console.err('Error')
    );
};

await transform();