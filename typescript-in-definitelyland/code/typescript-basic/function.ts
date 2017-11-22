import {log} from "util";

function hello(word: string): string {
  return `Hello, ${word}`;
}

log(hello('TypeScript'));

// 返り値の型を省略すると推論される
function bye(word: string) {
  return `Bye, ${word}`;
}

log(bye('TypeScript'));

// ? をつけると呼び出したときに引数が省略可能になる
function hey(word?: string) {
  return `Hey, ${word || 'TypeScript'}`;
}

log(hey('JavaScript'));
log(hey());

// デフォルト値の指定で仮引数の型を省略できる
function ahoy(word = 'TypeScript') {
  return `Ahoy! ${word}`;
}

log(ahoy('JavaScript'));
log(ahoy());



