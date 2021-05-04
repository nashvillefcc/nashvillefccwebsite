/**
 * Takes a unix timestamp and converts it to a locale string.
 * @param {number} unixTimestamp A unix timestamp, e.g. 1617145200000
 * @returns {string} A formatted locale string, e.g. "April 3, 2:30 PM"
 */
export const formatUnixToLocaleString = unixTimestamp => {
  return new Date(unixTimestamp).toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    year: 'numeric',
    minute: '2-digit',
    timeZone: 'GMT',
  });
};
