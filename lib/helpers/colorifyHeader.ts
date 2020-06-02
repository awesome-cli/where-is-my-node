import chalk from 'chalk';

const colorifyHeader = (text: string) => chalk.bold.visible.bgBlueBright(text);

export default colorifyHeader;
