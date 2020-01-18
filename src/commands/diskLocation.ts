import npmPath from 'npm-path';

import colorifyHeader from '../helpers/colorifyHeader';

export default () => {
  npmPath((_: Error, PATH: string) =>
    console.log(`${colorifyHeader('Directory on disk:')}\n${PATH}`)
  );
};
