import { Console } from '@woowacourse/mission-utils';

const REGEX = /^\/\/([^0-9])\\n/;

class App {
  async run() {
    Console.readLine('덧셈할 문자열을 입력해 주세요.\n', (userInput) => {
      const match = userInput.match(REGEX)
      
      if (match) {
        const customDelimiter = match[1];
        // extract numbers by delimiters
      } else {
        // extract numbers by delimiter
      }

      // print sum of numbers
    });
  }
}

export default App;
