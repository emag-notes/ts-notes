// TypeScript 独自仕様
enum Suit {
  Heart,
  Diamond,
  Club,
  Spade,
}

console.log(Suit.Heart, Suit[Suit.Heart]); // => 0 'Heart'

const enum Permission {
  Execute = 1,
  Read = 2,
  Write = 4,
  All = Execute | Read | Write
}

console.log(Permission.All); // => 7

enum Tree {
  Node = "node",
  Leaf = "leaf",
}

console.log(Tree.Node); // => node

export {Suit, Permission, Tree}