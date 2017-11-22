import log from "../../utils";

namespace a {
  // export してないものは外部からは見えない
  class Sample {
    hello(word = 'TypeScript') {
      return `Hello, ${word}`;
    }
  }

  export interface Hello {
    hello(word?: string): string;
  }

  export let obj: Hello = new Sample();
}

namespace a {
  export function bye(word = 'JavaScript') {
    return `Bye, ${word}`;
  }

  // 定義を分けると同名の namespace でも export していないものは見えない
  // let tmp = new Sample();
  // tmp.hello();
}

// ネストした namespace
namespace b {
  export namespace c {
    export function hello() {
      return a.obj.hello();
    }
  }
}

// ネストした namespace の短縮表記も存在する
namespace d.e {
  export function hello() {
    return a.obj.hello();
  }
}

log('b.c.hello()', b.c.hello());
log('d.e.hello()', d.e.hello());