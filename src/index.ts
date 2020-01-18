#!/usr/bin/env node

import path from 'path';
import program from 'commander';
import chalk from 'chalk';

import geoLocation from './commands/geoLocation';
import diskLocation from './commands/diskLocation';

const pkg = require(path.join(__dirname, '../package.json'));

program
  .usage('[options]')
  .option('-g, --geo', 'output computer geolocation')
  .option('-d, --disk', 'output directory on disk')
  .version(pkg.version)
  .description(chalk.blue('checks node location'))
  .action(async cmd => {
    if (cmd.geo) {
      await geoLocation();
    }

    if (cmd.geo && cmd.disk) {
      console.log('');
    }

    if (cmd.disk) {
      diskLocation();
    }
  });

program.on('command:*', (commands?: string[]) => {
  if (commands) {
    console.error('error: unknown command');

    process.exit(1);
  }
});

if (!process.argv.slice(2).length) {
  program.outputHelp();

  process.exit(1);
}

program.parse(process.argv);
