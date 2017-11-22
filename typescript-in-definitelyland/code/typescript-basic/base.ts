class Base {
  // インスタンス変数
  num = 1;

  // 初期値を与えない場合は型の指定が必要
  str: string;

  // プロパティ名に ? をつけると省略可能(undefined である可能性がある)ことを表せる
  regExpOptional?: RegExp;

  constructor(str: string) {
    // str は省略可能でないのでコンストラクタで初期値を設定しなければならない
    // ただし設定しわすれていても特にコンパイルエラーにはならない
    this.str = str;
  }

  // メソッドの定義。返り値は省略できる
  hello(): string {
    return `Hello, ${this.str}`;
  }

  getRegExp() {
    if (!this.regExpOptional) {
      return new RegExp('test');
    }
    return this.regExpOptional;
  }
}

const base = new Base("world");
console.log(base.hello());

export {};
