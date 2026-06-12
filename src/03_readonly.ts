// readonly
// スロットの鍵🔒 = 読めるけど書き換えられない

type Item = {
  readonly name: string; // 🔒 アイテム名は変更不可
  durability:    number; // 🔓 耐久値は変更可
};

const diamondPickaxe: Item = {
  name:       "ダイヤのツルハシ",
  durability: 1561,
};

// diamondPickaxe.name       = "鉄のツルハシ"; // ❌ readonlyなので不可
// diamondPickaxe.durability = 1000;            // ✅ 耐久値はOK
