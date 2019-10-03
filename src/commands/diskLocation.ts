import npmPath from 'npm-path';

export default async () => {
  npmPath((err: Error, PATH: string) => console.log(PATH));
};
