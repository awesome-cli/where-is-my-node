import fetch from 'node-fetch';
import chalk from 'chalk';

import { spinner } from '../functions/spinner';

import colorifyHeader from '../helpers/colorifyHeader';

import IpWhoIsResult from '../interfaces/ipWhoIsResult';

const url = 'http://free.ipwhois.io/json/';

const geoLocation = async () => {
  spinner.text = 'Checking geolocation';
  spinner.start();

  try {
    const res = await fetch(url);

    const data: IpWhoIsResult = await res.json();

    spinner.stop();

    console.log(
      `${colorifyHeader('Computer geolocation:')}\n` +
        `${chalk.cyan('coordinates')}: ` +
        `(${data.latitude}, ${data.longitude})\n` +
        `${chalk.cyan('city')}: ${data.city}\n` +
        `${chalk.cyan('region')}: ${data.region}\n` +
        `${chalk.cyan('country')}: ${data.country}\n` +
        `${chalk.cyan('continent')}: ${data.continent}`
    );
  } catch (err) {
    console.log(err); // TODO

    spinner.fail(chalk.red('Unable to get computer geolocation'));
  }
};

export default geoLocation;
