# ⛏ TypeScript × Minecraft 学習ログ

Minecraftで例えながら学ぶ TypeScript の基礎まとめです。

🌐 **ブログ版はこちら** → [GitHub Pages で見る](https://Linux-Saito.github.io/typescript-study/)

---

## 📦 目次

- [01. type / const — クラフトレシピとガラスケース](#01-type--const)
- [02. オプショナル（?）— オプション素材](#02-オプショナル)
- [03. readonly — スロットの鍵](#03-readonly)
- [04. const vs readonly — 違いまとめ](#04-const-vs-readonly)
- [05. 関数 — 自動クラフト機械](#05-関数)

---

## 01. type / const

### type — クラフトレシピ（設計図）

`type` はオブジェクトの「形」を定義する設計図。  
素材（プロパティ）が揃っていないとクラフト（インスタンス化）できない。

```ts
type Person = {
  name: string;
  age:  number;
};
```

### const — ガラスケース

一度入れたら箱ごと上書きできない。

```ts
const taro: Person = { name: "taro", age: 18 };

taro = { name: "hanako", age: 20 }; // ❌ constは再代入不可
taro.age = 20;                       // ✅ 中身の変更はOK
```

---

## 02. オプショナル（?）

### ? — オプション素材（染料など）

`?` をつけると「あってもなくてもOK」なプロパティになる。  
値は `string | undefined` のどちらかになる。

```ts
type Person = {
  name:   string;
  age:    number;
  hobby?: string; // あってもなくてもOK
};

const taro: Person = { name: "taro", age: 18, hobby: "game" }; // ✅ hobbyあり
const jiro: Person = { name: "jiro", age: 16 };                // ✅ hobbyなしもOK
```

使うときは存在チェックを忘れずに：

```ts
if (taro.hobby) {
  console.log(taro.hobby); // "game"
}
```

---

## 03. readonly

### readonly — スロットの鍵🔒

`readonly` をつけると、読めるけど書き換えられないプロパティになる。  
**特定のスロットだけ**鍵がかかっているイメージ。

```ts
type Person = {
  readonly name: string; // 🔒 変更不可
  age:           number; // 🔓 変更可
};

const taro: Person = { name: "taro", age: 18 };

taro.name = "TARO"; // ❌ readonlyなので不可
taro.age  = 20;     // ✅ OK
```

---

## 04. const vs readonly

似ているけど守る範囲が違う。

| 操作 | const | readonly |
|------|-------|----------|
| 変数ごと上書き `taro = {...}` | ❌ 不可 | ✅ 可 |
| 中身の書き換え `taro.name = "..."` | ✅ 可 | ❌ 不可 |

- `const` = **ガラスケース**（箱ごと触れない）
- `readonly` = **スロットの鍵**（その枠だけ書き換え不可）

```ts
// constだけの場合
const taro = { name: "taro", age: 18 };
taro = { name: "hanako", age: 20 }; // ❌ 箱ごとは無理
taro.name = "TARO";                 // ✅ 中身はOK

// readonlyだけの場合
type P = { readonly name: string };
let taro: P = { name: "taro" };
taro = { name: "hanako" }; // ✅ letなので箱ごとはOK
taro.name = "TARO";        // ❌ nameスロットは不可
```

---

## 05. 関数

### function / アロー関数 — 自動クラフト機械⚙️

素材（引数）を入れると、加工して結果（返り値）を出してくれる機械。

```ts
// functionを使った書き方
function double(input: number): number {
  return input * 2;
}

// アロー関数を使った書き方（同じ意味）
const double = (input: number): number => {
  return input * 2;
};

// 1行に省略した書き方
const double = (input: number): number => input * 2;
```

### 関数の型をtypeで定義する

同じ形の関数が複数あるとき、`type` で使い回せる。

```ts
type NumberFunc = (input: number) => number;

const double: NumberFunc = (input) => input * 2; // 2倍
const triple: NumberFunc = (input) => input * 3; // 3倍
```

### void — 何も返さない関数

表示・保存など、結果を返す必要がない処理に使う。

```ts
const hello = (): void => {
  console.log("hello"); // 表示するだけ
};

hello(); // → "hello"
```

### 型推論 — TypeScriptが型を自動で判断する

返り値の型注釈は省略できる場合がある。

```ts
// `: number` を省略してもTypeScriptが自動で推論してくれる
const double = (input: number) => {
  return input * 2;
};
```

### 各パーツまとめ

| パーツ | 意味 | Minecraftで例えると |
|---|---|---|
| `function` / `=>` | 関数の宣言 | 機械を設置する |
| 引数 `(input: number)` | 受け取る値 | 投入口に入れる素材 |
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
