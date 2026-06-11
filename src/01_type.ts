// type / const
// クラフトレシピ（設計図）とガラスケース

type Person = {
  name: string;
  age: number;
};

const taro: Person = {
  name: "taro",
  age: 18,
};

// taro = { name: "hanako", age: 20 }; // ❌ constは再代入不可
// taro.age = 20;                       // ✅ 中身の変更はOK
