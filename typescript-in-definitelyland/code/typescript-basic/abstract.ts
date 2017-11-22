abstract class Animal {
  abstract name: string;
  abstract get poo(): string;

  abstract speak(): string;
  sleep(): string {
    return "zzzZZZ...";
  }
}
// abstract クラスはそのままインスタンス化できない
// new Animal();

class Cat extends Animal {
  // プロパティの実装を強制される
  name = 'Cat';
  poo = 'poo...';

  // メソッドの実装を強制される
  speak(): string {
    return "meow";
  }
}

const cat = new Cat();
console.log(`${cat.name}: ${cat.speak()} and ${cat.poo} and ${cat.sleep()}`);

export {}