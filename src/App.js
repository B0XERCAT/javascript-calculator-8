import { Console } from '@woowacourse/mission-utils';

const CUSTOM_DELIMITER_EXTRACTOR = /^\/\/([^0-9]+)\\n/;
const DEFAULT_DELIMITER = /,|:/;

function extractCustomDelimiter(input) {
  const match = input.match(CUSTOM_DELIMITER_EXTRACTOR);

  if (!match) return null;

  const delimiter = match[1];
  if (delimiter.length !== 1) {
    throw new Error('[ERROR] 커스텀 구분자는 한 글자만 허용됩니다.');
  }

  return delimiter;
}

function parseNumbers(input, delimiter) {
  return input.split(delimiter).map((value) => {
    const parsed = Number(value);
    if (Number.isNaN(parsed)) {
      throw new Error('[ERROR] 숫자가 아닌 값이 포함되어 있습니다.');
    }
    return parsed;
  });
}

function validateNoNegatives(numbers) {
  const negatives = numbers.filter((num) => num < 0);
  if (negatives.length > 0) {
    throw new Error(
      '[ERROR] 음수는 입력할 수 없습니다. 양의 정수를 입력해주세요.',
    );
  }
}

function extractNumberSection(input) {
  return input.split('\\n')[1];
}

function sumNumbers(numbers) {
  const sum = numbers.reduce((acc, cur) => acc + cur);
  return sum;
}

class App {
  async run() {
    const userInput = await Console.readLineAsync(
      '덧셈할 문자열을 입력해 주세요.\n',
    );
    const customDelimiter = extractCustomDelimiter(userInput);

    const numberSection = customDelimiter
      ? extractNumberSection(userInput)
      : userInput;

    const numbers = parseNumbers(
      numberSection,
      customDelimiter || DEFAULT_DELIMITER,
    );
    validateNoNegatives(numbers);

    const sum = sumNumbers(numbers);
    Console.print(`결과 : ${sum}`);
  }
}

export default App;
