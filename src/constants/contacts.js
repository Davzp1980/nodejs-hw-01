import path from 'node:path';

const rootPath = path.join(process.cwd());
export const PATH_DB = path.join(rootPath, 'src', 'db', 'db.json');
