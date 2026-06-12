// 関数（function / アロー関数）
// 自動クラフト機械 = 素材を入れると加工して結果を出してくれる

// ① functionを使った書き方
function double1(input: number): number {
  return input * 2;
}

// ② アロー関数を使った書き方（同じ意味）
const double2 = (input: number): number => {
  return input * 2;
};

// ③ 1行に省略した書き方（さらに同じ意味）
const double3 = (input: number): number => input * 2;

// ④ 型注釈を省略した書き方（TypeScriptが型を推論してくれる）
const double4 = (input: number) => {
  return input * 2;
};

// ⑤ 関数の型をtypeで定義して使い回す
type NumberFunc = (input: number) => number;

const double: NumberFunc = (input: number): number => {
  return input * 2; // 2倍
};

const triple: NumberFunc = (input: number): number => {
  return input * 3; // 3倍
};

// ⑥ voidは「何も返さない」関数
const hello = (): void => {
  console.log("hello"); // 表示するだけ、returnなし
};

// 使い方
console.log(double(5)); // 10
console.log(triple(5)); // 15
hello();                // hello
