class Base {
  a = "a";
  public b = "b";
  protected c = "c";
  private d = "d";

  method() {
    // private なプロパティを利用しているコードが無いと警告される
    this.d;
  }
}

class Inherit extends Base {
  method() {
    // 子クラスから public, protected へアクセス可能
    this.a;
    this.b;
    this.c;
    // private はコンパイルエラー
    // this.d;
  }
}

const base = new Base();
// public はアクセス可
base.a;
base.b;
// protected, private はコンパイルエラー
// base.c;
// base.d;