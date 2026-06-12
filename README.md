# ⛏ TypeScript × Minecraft 学習ログ

Minecraftで例えながら学ぶ TypeScript の基礎まとめです。

🌐 **ブログ版はこちら** → [GitHub Pages で見る](https://Linux-Saito.github.io/typescript-study/)

---

## 📦 目次

- [01. type / const — クラフトレシピとガラスケース](#01-type--const)
- [02. オプショナル（?）— エンチャントはなくてもOK](#02-オプショナル)
- [03. readonly — アイテム名に鍵をかける](#03-readonly)
- [04. const vs readonly — 違いまとめ](#04-const-vs-readonly)
- [05. 関数 — 自動クラフト機械](#05-関数)

---

## 01. type / const

### type — クラフトレシピ（設計図）

`type` はオブジェクトの「形」を定義する設計図。  
素材（プロパティ）が揃っていないとクラフトできない。

```ts
type Item = {
  name:  string; // アイテム名
  count: number; // 個数
};
```

### const — ガラスケース

一度入れたら箱ごと上書きできない。

```ts
const sword: Item = { name: "ダイヤの剣", count: 1 };

sword = { name: "鉄の剣", count: 1 }; // ❌ constは再代入不可
sword.count = 2;                        // ✅ 中身の変更はOK
```

---

## 02. オプショナル（?）

### ? — エンチャントはオプション素材

`?` をつけると「あってもなくてもOK」なプロパティになる。  
値は `string | undefined` のどちらかになる。

```ts
type Item = {
  name:     string;
  count:    number;
  enchant?: string; // エンチャントはあってもなくてもOK
};

const enchantedSword: Item = { name: "ダイヤの剣", count: 1, enchant: "シャープネスV" }; // ✅ あり
const normalSword:    Item = { name: "鉄の剣",     count: 1 };                           // ✅ なしもOK
```

使うときは存在チェックを忘れずに：

```ts
if (enchantedSword.enchant) {
  console.log(enchantedSword.enchant); // "シャープネスV"
}
```

---

## 03. readonly

### readonly — アイテム名に鍵🔒

`readonly` をつけると、読めるけど書き換えられないプロパティになる。  
**特定のスロットだけ**鍵がかかっているイメージ。

```ts
type Item = {
  readonly name: string; // 🔒 アイテム名は変更不可
  durability:    number; // 🔓 耐久値は変更可
};

const diamondPickaxe: Item = { name: "ダイヤのツルハシ", durability: 1561 };

diamondPickaxe.name       = "鉄のツルハシ"; // ❌ readonlyなので不可
diamondPickaxe.durability = 1000;            // ✅ OK
```

---

## 04. const vs readonly

似ているけど守る範囲が違う。

| 操作 | const | readonly |
|------|-------|----------|
| 変数ごと上書き `sword = {...}` | ❌ 不可 | ✅ 可 |
| 中身の書き換え `sword.name = "..."` | ✅ 可 | ❌ 不可 |

- `const` = **ガラスケース**（箱ごと触れない）
- `readonly` = **スロットの鍵**（その枠だけ書き換え不可）

```ts
// constだけの場合
const sword = { name: "ダイヤの剣", durability: 1561 };
sword = { name: "鉄の剣", durability: 250 }; // ❌ 箱ごとは無理
sword.durability = 1000;                      // ✅ 中身はOK

// readonlyだけの場合
type Item = { readonly name: string };
let sword: Item = { name: "ダイヤの剣" };
sword = { name: "鉄の剣" };  // ✅ letなので箱ごとはOK
sword.name = "鉄の剣";       // ❌ nameスロットは不可
```

---

## 05. 関数

### function / アロー関数 — 自動クラフト機械⚙️

素材（引数）を入れると、加工して結果（返り値）を出してくれる機械。

```ts
// functionを使った書き方
function doubleItem(count: number): number {
  return count * 2;
}

// アロー関数を使った書き方（同じ意味）
const tripleItem = (count: number): number => {
  return count * 3;
};
```

### 関数の型をtypeで定義する

同じ形の関数が複数あるとき、`type` で使い回せる。

```ts
type CraftFunc = (count: number) => number;

const craftSword: CraftFunc = (count) => count * 2; // 剣は素材2倍
const craftBow:   CraftFunc = (count) => count * 3; // 弓は素材3倍
```

### void — 何も返さない関数

表示・保存など、結果を返す必要がない処理に使う。

```ts
const spawnPlayer = (): void => {
  console.log("プレイヤーがスポーンしました！");
};

spawnPlayer(); // → "プレイヤーがスポーンしました！"
```

### 型推論 — TypeScriptが型を自動で判断する

返り値の型注釈は省略できる場合がある。

```ts
// `: number` を省略してもTypeScriptが自動で推論してくれる
const craft = (count: number) => count * 2;
```

### 各パーツまとめ

| パーツ | 意味 | Minecraftで例えると |
|---|---|---|
| 引数 `(count: number)` | 受け取る値 | 投入口に入れる素材 |
| 返り値 `: number` | 返す値の型 | 出口から出るもの |
| `void` | 何も返さない | 音を鳴らすだけの機械 |
| 型推論 | 型を自動判断 | 素材から結果を自動判断 |

---

## 🗂 ファイル構成

```
typescript-study/
├── README.md        ← このファイル（学習まとめ）
├── index.html       ← Minecraft風ブログ版
└── src/
    ├── 01_type.ts
    ├── 02_optional.ts
    ├── 03_readonly.ts
    └── 04_function.ts
```
