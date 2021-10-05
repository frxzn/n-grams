/**
 * @param str Text to be sanitized
 * @returns Text input without punctuation and collapses adjacent whitespaces into one
 */

const strip = (str: string) => {
  return str
    .replace(/[^\w\s]|_/g, '')
    .replace(/\s+/g, ' ')
    .trim();
};

/**
 * @param input Text from which the n-gram will be generated
 * @returns A set of every permutation of contiguous n-grams from a string of text
 */

export const nGrams = (text: string) => {
  if (text === undefined || typeof text !== 'string') {
    throw new Error('Invalid input');
  }

  const cleanText = strip(text);
  const words = cleanText.split(' ');
  const result = [];

  if (cleanText.length) {
    while (words.length) {
      let temp = '';

      for (let i = 0; i < words.length; i++) {
        const word = words[i];
        temp = temp.length ? `${temp} ${word}` : word;
        result.push(temp);
      }
      words.shift();
    }
  }

  return result;
};
