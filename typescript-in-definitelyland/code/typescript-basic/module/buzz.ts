function bye(word = 'TypeScript') {
  return `Good bye, ${word}`;
}

// foo.ts で ECMAScript 2015 形式で import する際、
// コンパイルエラー(TS2497)の抑止をするためのハック
namespace bye {}

// CommonJS 向け。ECMAScript 2015 では NG。今後は使わなくてよい
export = bye;