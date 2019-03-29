#!/usr/bin/env node

const path = require('path');
const program = require('commander');
const chalk = require('chalk');

const pkg = require(path.join(__dirname, '../package.json'));

program.version(pkg.version).description(chalk.blue('where is my node'));

const geoLocationCommand = require('./commands/geoLocation');
const diskLocationCommand = require('./commands/diskLocation');

program
  .command('location')
  .alias('lc')
  .description('checks node geolocation and disk location')
  .action(async () => {
    await geoLocationCommand();
    await diskLocationCommand();
  });

program
  .command('geolocation')
  .alias('glc')
  .description('checks node geolocation')
  .action(() => geoLocationCommand());

program
  .command('disklocation')
  .alias('dlc')
  .description('checks node disk location')
  .action(() => diskLocationCommand());

program.on('command:*', () => {
  console.error(chalk.red('Invalid command'));

  process.exit(1);
});

if (!process.argv.slice(2).length) {
  console.warn('No command specified');

  process.exit(1);
}

program.parse(process.argv);
