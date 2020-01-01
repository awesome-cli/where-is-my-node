#!/usr/bin/env node

import path from 'path';
import program from 'commander';
import chalk from 'chalk';

import geoLocationCommand from './commands/geoLocation';
import diskLocationCommand from './commands/diskLocation';

const pkg = require(path.join(__dirname, '../package.json'));

program.version(pkg.version).description(chalk.blue('where is my node'));

program
  .command('location')
  .alias('lc')
  .description('checks node location')
  .option('-g --geo', 'output computer geolocation')
  .option('-d --disk', 'output directory on disk')
  .action(async cmd => {
    if (cmd.geo || cmd.disk) {
      console.log(`${chalk.magenta('Your node.js is here:')}`);
    }

    if (cmd.geo) {
      await geoLocationCommand();
    }

    if (cmd.geo && cmd.disk) {
      console.log(`${chalk.magenta('And here:')}`);
    }

    if (cmd.disk) {
      await diskLocationCommand();
    }
  });

program.on('command:*', () => {
  console.error(chalk.red('Invalid command'));

  process.exit(1);
});

if (!process.argv.slice(2).length) {
  console.warn('No command specified');

  process.exit(1);
}

if (!process.argv.slice(3).length) {
  program.command('location').outputHelp();

  process.exit(1);
}

program.parse(process.argv);
