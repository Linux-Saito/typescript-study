// 関数（function / アロー関数）
// 自動クラフト機械 = 素材を入れると加工して結果を出してくれる

// ① functionを使った書き方
function doubleItem(count: number): number {
  return count * 2;
}

// ② アロー関数を使った書き方（同じ意味）
const tripleItem = (count: number): number => {
  return count * 3;
};

// ③ 1行に省略した書き方
const smelt = (count: number): number => count * 2; // 精錬で倍になるイメージ

// ④ 関数の型をtypeで定義して使い回す
type CraftFunc = (count: number) => number;

const craftSword:  CraftFunc = (count) => count * 2; // 剣は素材2倍
const craftBow:    CraftFunc = (count) => count * 3; // 弓は素材3倍

// ⑤ voidは何も返さない関数（表示・保存など）
const spawnPlayer = (): void => {
  console.log("プレイヤーがスポーンしました！");
};

// ⑥ 型推論（返り値の型を省略できる）
const craft = (count: number) => count * 2; // TypeScriptが number と推論してくれる

// 使い方
console.log(doubleItem(32));  // 64
console.log(tripleItem(10));  // 30
console.log(craftSword(16));  // 32
console.log(craftBow(10));    // 30
spawnPlayer();                // プレイヤーがスポーンしました！
