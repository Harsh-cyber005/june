import { promises as fs } from 'fs';

async function fetchBody(){
    const body = await fs.readFile('app/constants/body.txt', 'utf-8');
    return body;
}

export { fetchBody };