import { Console } from '@woowacourse/mission-utils';

const CUSTOM_DELIMITER_EXTRACTOR = /^\/\/([^0-9])\\n/;
const DEFAULT_DELIMITER = /,|:/;

function extractNumbers(inputString, delimiter) {
  const splitValues = inputString.split(delimiter);
  const parsedNumbers = splitValues.map(Number);
  return parsedNumbers;
}

class App {
  async run() {
    Console.readLine('덧셈할 문자열을 입력해 주세요.\n', (userInput) => {
      const customDelimiterMatch = userInput.match(CUSTOM_DELIMITER_EXTRACTOR);
      let parsedNumbers;

      if (customDelimiterMatch) {
        const numberSection = userInput.split('\\n')[1];
        const customDelimiter = customDelimiterMatch[1];
        parsedNumbers = extractNumbers(numberSection, customDelimiter);
      } else {
        parsedNumbers = extractNumbers(userInput, DEFAULT_DELIMITER);
      }

      // print sum of numbers
    });
  }
}

export default App;
