import npmPath from 'npm-path';
import chalk from 'chalk';

import colorifyHeader from '../helpers/colorifyHeader';

const diskLocation = () => {
  npmPath((err: Error, path: string) => {
    if (err) {
      return console.log(chalk.red('Unable to get directory on disk'));
    }

    console.log(
      `${colorifyHeader('Directory on disk:')}\n${
        path.split(npmPath.SEPARATOR)[0]
      }`
    );
  });
};

export default diskLocation;
