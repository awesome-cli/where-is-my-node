#!/usr/bin/env node

import path from 'path';
import program from 'commander';
import figlet from 'figlet';
import chalk from 'chalk';

import geoLocation from './commands/geoLocation';
import diskLocation from './commands/diskLocation';

const pkg = require(path.join(__dirname, '../package.json'));

program
  .version(pkg.version)
  .usage('<options>')
  .option('-g, --geo', 'output computer geolocation')
  .option('-d, --disk', 'output directory on disk')
  .action(async cmd => {
    if (cmd.geo) await geoLocation();

    if (cmd.geo && cmd.disk) console.log('');

    if (cmd.disk) diskLocation();
  });

program.on('command:*', (commands?: string[]) => {
  if (commands) {
    console.error(`error: unknown command: ${commands[0]}`);

    process.exit(1);
  }
});

program.on('--help', () => {
  console.log(
    chalk.magentaBright(
      figlet.textSync('Where is\nmy Node', {
        horizontalLayout: 'full',
        verticalLayout: 'full',
      })
    )
  );
});

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.help();
}