# ⛏ TypeScript × Minecraft 学習ログ

Minecraftで例えながら学ぶ TypeScript の基礎まとめです。

🌐 **ブログ版はこちら** → [GitHub Pages で見る](https://Linux-Saito.github.io/typescript-study/)

---

## 📦 目次

- [01. type / const — クラフトレシピとガラスケース](#01-type--const)
- [02. オプショナル（?）— オプション素材](#02-オプショナル)
- [03. readonly — スロットの鍵](#03-readonly)
- [04. const vs readonly — 違いまとめ](#04-const-vs-readonly)

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

## 🗂 ファイル構成

```
typescript-study/
├── README.md   ← このファイル（学習まとめ）
└── index.html  ← Minecraft風ブログ版
```
