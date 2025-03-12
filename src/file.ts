import { readFile, unlink, writeFile } from "fs/promises";

const exec = async () => {
  await unlink("./teste.txt");
};

exec();
