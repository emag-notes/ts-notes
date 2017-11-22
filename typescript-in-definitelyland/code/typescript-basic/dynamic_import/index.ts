async function main() {
  // 動的にモジュールを import できる Promise が返ってくる
  // 即値(文字列リテラル)でモジュール名を指定すると型がついている
  const sub = await import('./sub');
  console.log(sub.hello());
}

function mainAnother() {
  // Promise なのでこのような書き方もできる
  import('./sub').then(sub => {
    console.log(sub.hello());
  });
}

main();
mainAnother();



