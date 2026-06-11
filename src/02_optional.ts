// オプショナル（?）
// オプション素材（染料など）= あってもなくてもOK

type Person = {
  name:   string;
  age:    number;
  hobby?: string; // あってもなくてもOK
};

const taro: Person = { name: "taro", age: 18, hobby: "game" }; // ✅ hobbyあり
const jiro: Person = { name: "jiro", age: 16 };                // ✅ hobbyなしもOK

if (taro.hobby) {
  console.log(taro.hobby); // "game"
}