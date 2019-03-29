const npmPath = require('npm-path');
const PATH = npmPath.PATH;

module.exports = async () => {
  npmPath((err, $PATH) => console.log('And here:\n' + `${$PATH}`));
};
