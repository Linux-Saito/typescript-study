// 配列・ジェネリクス・タプル
// チェストの種類と中身の管理

// ① 配列（Array）= 同じ種類のアイテムをまとめるチェスト
const weapons: string[] = ["ダイヤの剣", "鉄の剣", "弓"];
const counts:  number[] = [1, 64, 32];

weapons.push("斧");  // ✅ 文字列ならOK
// weapons.push(100); // ❌ 数字は入れられない

// ② Array<T> = string[] と同じ意味（ジェネリクスの書き方）
const weaponChest:  Array<string>  = ["ダイヤの剣", "鉄の剣"];
const countChest:   Array<number>  = [1, 64];
const mixedChest:   Array<string | number> = ["ダイヤの剣", 1, "弓", 64]; // 混在OK

// ③ ジェネリクス = 中身の型を後から決められる万能設計図
type Chest<T> = {
  items: T[];
  addItem: (item: T) => void;
};

// 使うときに型を指定する
const swordChest:   Chest<string>  = { items: [], addItem: (item) => {} };
const durabilityChest: Chest<number>  = { items: [], addItem: (item) => {} };

// ④ Array<number> = 数字なら何個でも入るチェスト（個数制限なし）
type Coordinate = Array<number>;
const tokyoCoord:  Coordinate = [35.689, 139.692];
const myHomeCoord: Coordinate = [35.180, 136.907, 100]; // ✅ 3個でも入ってしまう（問題！）

// ⑤ タプル型 = スロット数と型が固定のチェスト
type Location = [number, number]; // 2スロット固定
const tokyo: Location = [35.689, 139.692]; // ✅ ぴったり2個
const osaka: Location = [34.686, 135.520]; // ✅ ぴったり2個
// const myHome: Location = [35.180, 136.907, 100]; // ❌ 3個はエラー！

// ⑥ タプル型 = スロットごとに型も固定できる
type WeaponInfo = [string, number]; // 1番目: 武器名, 2番目: 耐久値
const diamondSword: WeaponInfo = ["ダイヤの剣", 1561];
const ironSword:    WeaponInfo = ["鉄の剣",     250];
