// 引数を 1 つ取って返り値なしの関数を表す
function asyncModoki(callback: (value: string) => void) {
  callback('TypeScript');
}

// アロー関数をコールバック関数として渡す。関数の方は型推論される
asyncModoki(value => console.log(`Hello, ${value}`));

// アロー関数に明示的に型を付与する場合
asyncModoki((value: string) => console.log(`Hello, ${value}`));