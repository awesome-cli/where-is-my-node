const fetch = require('node-fetch');
const chalk = require('chalk');

const url = 'http://free.ipwhois.io/json/';

const getLocationFromIP = async url => {
  const res = await fetch(url);

  const data = await res.json();

  return data;
};

module.exports = async () => {
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
