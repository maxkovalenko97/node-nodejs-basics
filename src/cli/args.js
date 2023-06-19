const parseArgs = () => {
    process.argv.slice(2).forEach((element, index, array) => {
        if (index % 2) return
        console.log(`${element.slice(2)} is ${array[index + 1]}`);
    });
};

parseArgs();