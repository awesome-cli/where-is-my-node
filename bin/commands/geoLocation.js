const fetch = require('node-fetch');
const chalk = require('chalk');

const getLocationFromIP = async url => {
  const res = await fetch(url);

  const data = await res.json();

  return data;
};

module.exports = async () => {
  try {
    const geoLocation = await getLocationFromIP(url);

    console.log(
      'Your node.js is here:\n' +
        `coordinates: (${geoLocation.latitude}, ${geoLocation.longitude})\n` +
        `city: ${geoLocation.city}\n` +
        `region: ${geoLocation.region}\n` +
        `country: ${geoLocation.country_name} ${geoLocation.emoji_flag}\n` +
        `continent: ${geoLocation.continent_name}\n`
    );
  } catch (err) {
    console.error(chalk.red(`${err}`));
  }
};
