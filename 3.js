const patternCount = (text, pattern) => {
  let count = 0;
  const textLength = text.length;
  const patternLength = pattern.length;

  if (patternLength < 1) return 0;

  for (let i = 0; i <= textLength - patternLength; i++) {
    let foundPattern = true;
    for (j = 0; j < patternLength; j++) {
      if (text[i + j] != pattern[j]) {
        foundPattern = false;
        break;
      }
    }
    if (foundPattern) {
      count++;
    }
  }

  return count;
};

function printTestCase(text, pattern) {
  result = patternCount(text, pattern);
  console.log('-----------------------');
  console.log(`${text} - ${pattern} - ${result}`);
  console.log('-----------------------');
  console.log('text', text);
  console.log('pattern', pattern);
  console.log('result', result);
  console.log('-----------------------');
}

// Test With "palindrom" Word
printTestCase('palindrom', 'ind');

// Test With "abrakadabra" Word
printTestCase('abrakadabra', 'ab');

// Test With "hello" Word
printTestCase('hello', '');

// Test With "ababab" Word
printTestCase('ababab', 'aba');

// Test With "aaaaaa" Word
printTestCase('aaaaaa', 'aa');

// Test With "hello" Word
printTestCase('hello', 'hello');
