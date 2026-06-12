// オプショナル（?）
// オプション素材（染料など）= あってもなくてもOK

type Item = {
  name:      string;  // アイテム名（必須）
  count:     number;  // 個数（必須）
  enchant?:  string;  // エンチャント（あってもなくてもOK）
};

// エンチャントありの剣
const enchantedSword: Item = {
  name:    "ダイヤの剣",
  count:   1,
  enchant: "シャープネスV", // ✅ あり
};

// エンチャントなしの剣
const normalSword: Item = {
  name:  "鉄の剣",
  count: 1,
  // enchant なし → OK！
};

// 使うときはエンチャントの存在チェックを忘れずに
if (enchantedSword.enchant) {
  console.log(enchantedSword.enchant); // "シャープネスV"
}
