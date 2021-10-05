import { nGrams } from '../src/n-grams';

const expected = [
  'Show',
  'Show me',
  'Show me the',
  'Show me the code',
  'me',
  'me the',
  'me the code',
  'the',
  'the code',
  'code',
];

const getLength = (str: string) => {
  const n = str.split(' ').length;
  return (n * (n + 1)) / 2;
};

test('Example input matches output, has correct length and has no punctuation', () => {
  const testString = 'Show me the code.';
  const nGramLength = getLength(testString);
  const recieved = nGrams(testString);

  expect(recieved).toHaveLength(nGramLength);
  expect(recieved).toStrictEqual(expected);
  recieved.forEach((word) => {
    expect(word).not.toMatch(/[^\w\s]|_/g);
  });
});

test('Empty input', () => {
  expect(nGrams).toThrowError('Invalid input');
});

test('Empty string', () => {
  const recieved = nGrams('');
  expect(recieved).toHaveLength(0);
  expect(recieved).toStrictEqual([]);
});

test('String of only punctuation', () => {
  const recieved = nGrams('!@#$%^&*().?/');
  expect(recieved).toHaveLength(0);
  expect(recieved).toStrictEqual([]);
});

test('String of only whitespaces', () => {
  const recieved = nGrams('   ');
  expect(recieved).toHaveLength(0);
  expect(recieved).toStrictEqual([]);
});

test('Invalid input type', () => {
  expect(() => {
    nGrams(123 as any);
  }).toThrowError('Invalid input');
});
