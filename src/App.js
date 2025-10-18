import { Console } from '@woowacourse/mission-utils';

const CUSTOM_DELIMITER_EXTRACTOR = /^\/\/([^0-9])\\n/;
const DEFAULT_DELIMITER = /,|:/;

class App {
  async run() {
    Console.readLine('덧셈할 문자열을 입력해 주세요.\n', (userInput) => {
      const customDelimiter = extractCustomDelimiter(userInput);
      let numbers;

      if (customDelimiter) {
        const numberSection = extractNumberSection(userInput);
        numbers = extractNumbers(numberSection, customDelimiter);
      } else {
        numbers = extractNumbers(userInput, DEFAULT_DELIMITER);
      }

      const sum = sumNumbers(numbers);

      Console.print(`결과 : ${sum}`);
    });
  }
}

function extractCustomDelimiter(input) {
  const match = input.match(CUSTOM_DELIMITER_EXTRACTOR);
  return match ? match[1] : null;
}

function extractNumbers(input, delimiter) {
  const splits = input.split(delimiter);
  const numbers = splits.map(Number);
  return numbers;
}

function extractNumberSection(input) {
  return input.split('\\n')[1];
}

function sumNumbers(numbers) {
  const sum = numbers.reduce((acc, cur) => acc + cur);
  return sum;
}

export default App;
