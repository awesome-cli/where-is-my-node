import fetch from 'node-fetch';
import chalk from 'chalk';

const url = 'http://free.ipwhois.io/json/';

const getLocationFromIP = async (url: string) => {
  const res = await fetch(url);

  const data = await res.json();

  return data;
};

export default async () => {
  try {
    const geoLocation = await getLocationFromIP(url);

    console.log(
      `${chalk.cyan('coordinates')}: (${geoLocation.latitude}, ${
        geoLocation.longitude
      })\n` +
        `${chalk.cyan('city')}: ${geoLocation.city}\n` +
        `${chalk.cyan('region')}: ${geoLocation.region}\n` +
        `${chalk.cyan('country')}: ${geoLocation.country}\n` +
        `${chalk.cyan('continent')}: ${geoLocation.continent}\n`
    );
  } catch (err) {
    console.error(chalk.red(`${err}`));
  }
};
