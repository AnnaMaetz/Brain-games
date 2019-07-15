export const decorateText = text => `\x1B[31m${text}\x1B[39m`;

export const getRandomInt = (min = 0, max = 30) => Math.floor(Math.random() * (Math.floor(max)
 - Math.ceil(min) + 1)) + Math.ceil(min);
