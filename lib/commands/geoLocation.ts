import fetch from 'node-fetch';
import chalk from 'chalk';

import { spinner } from '../functions/spinner';

import colorifyHeader from '../helpers/colorifyHeader';

import { IpWhoIsResult } from '../interfaces/ipWhoIsResult';

const url = 'http://free.ipwhois.io/json/';

const getLocationFromIP = async (url: string) => {
  const res = await fetch(url);

  const data: IpWhoIsResult = await res.json();

  return data;
};

export default async () => {
  spinner.text = 'Checking geolocation';
  spinner.start();

  try {
    const geoLocation = await getLocationFromIP(url);

    spinner.stop();

    console.log(
      `${colorifyHeader('Computer geolocation:')}\n` +
        `${chalk.cyan('coordinates')}: ` +
        `(${geoLocation.latitude}, ${geoLocation.longitude})\n` +
        `${chalk.cyan('city')}: ${geoLocation.city}\n` +
        `${chalk.cyan('region')}: ${geoLocation.region}\n` +
        `${chalk.cyan('country')}: ${geoLocation.country}\n` +
        `${chalk.cyan('continent')}: ${geoLocation.continent}`
    );
  } catch {
    spinner.fail(chalk.red('Unable to get computer geolocation'));
  }
};
