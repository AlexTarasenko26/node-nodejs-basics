import {readFile} from "fs/promises";
import {writeFile} from "fs/promises";
import path from "path";
const __dirname = path.resolve();
const create = async () => {
    // Write your code here
    const filePath = path.join(__dirname, 'files', 'fresh.txt');
    const message = 'I am fresh and young';
    const error = 'FS operation failed';
    let result = ''

    try {
        const contents = await readFile(filePath);
        if (contents.length > 0) {
            throw new Error(error);
        } else {
            result = await writeFile(filePath, message);
        }
        console.log(result);
    } catch (err) {
        console.error(err.message);
    }
};

create();