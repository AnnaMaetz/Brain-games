export const decorateText = text => `\x1B[31m${text}\x1B[39m`;

export const getRandomInt = (min, max) => Math.floor(Math.random() * (Math.floor(max)
 - Math.ceil(min))) + Math.ceil(min);
