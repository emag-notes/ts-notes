function returnByPromise(word: string): Promise<string> {
  return new Promise(resolve =>{
    setTimeout(() => {
      resolve(word);
    }, 100);
  });
}

// この関数は A, TypeScript, B と順番に実行される
async function helloAsync(): Promise<string> {
  console.log('A');

  // Promise な値を await すると中身が取り出せる(ように見える)
  const word = await returnByPromise('TypeScript');
  console.log(word);
  console.log('B');

  return `Hello, ${word}`;
}

// await が使えるのは必ず async function の中
(async () => {
  const hello = await helloAsync();
  console.log(hello);
})();

// 普通に Promise として扱うこともできる
// helloAsync().then(hello => console.log(hello));