// readonly
// スロットの鍵🔒 = 読めるけど書き換えられない

type Person = {
  readonly name: string; // 🔒 変更不可
  age:           number; // 🔓 変更可
};

const taro: Person = { name: "taro", age: 18 };

// taro.name = "TARO"; // ❌ readonlyなので不可
// taro.age  = 20;     // ✅ OK