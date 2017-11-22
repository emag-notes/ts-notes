namespace a {
  export class Sample {}
}

namespace b {
  // 他のモジュールも参照できる
  export let objA: a.Sample;
  objA = new a.Sample();

  // import 句も利用可
  import Sample = a.Sample;
  export let objB: Sample;
  objB = new Sample;

  // エイリアスもできる
  import Test = a.Sample
  export let objC: Test;
  objC = new Test;

  // エイリアスでも型の互換性は問題なし
  objA = new Test
}
