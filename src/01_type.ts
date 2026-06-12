// type / const
// クラフトレシピ（設計図）とガラスケース

// typeはクラフトレシピ（設計図）
// 素材が揃っていないとクラフトできない！
type Item = {
  name:  string; // アイテム名
  count: number; // 個数
};

// constはガラスケースに飾ったアイテム
// 一度入れたら箱ごと上書きできない
const sword: Item = {
  name:  "ダイヤの剣",
  count: 1,
};

const arrow: Item = {
  name:  "矢",
  count: 64,
};

// sword = { name: "鉄の剣", count: 1 }; // ❌ constは再代入不可
// sword.count = 2;                        // ✅ 中身の変更はOK
