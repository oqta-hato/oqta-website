# 未配置・代替素材トラッカー

Figma原稿と実装の間で、画像素材が未配置または暫定代替になっている箇所の一覧。
差し替え作業の際にここを参照すること。

---

## Featuresセクション (`components/Features.tsx`)

| # | 特徴 | 状態 | 現在の実装 | Figma素材名 | 備考 |
|---|---|---|---|---|---|
| 02 | 想う | ❌ 未配置 | 画像なし (`img: null`) | `OQTAHATOしろアングル-20MB 2` | 製品写真（白鳩、斜めアングル）。配置後は `imgStyle: "circle-right"` 等でレイアウト調整が必要な可能性あり |
| 03 | 繋がる | ❌ 未配置 | 画像なし (`img: null`) | `アセット 1@1500x 1` | Figmaでの用途・サイズ未確認。アプリまたはライフスタイル写真と推定 |
| 01 | 贈る | ⚠️ 代替中 | `/assets/app-screenshot-grandma.jpg` | Figma上のハッシュ画像（`43aca5837e286e683d68d4ef8c1ac1b7_t` 相当） | 円形クロップ・右上配置。差し替え後も同じレイアウトで使用可能 |
| 04 | 眺める | ⚠️ 代替中 | `/assets/lifestyle-clock-room.png` | `スクリーンショット 2025-03-26 22.39.28 1`（Figmaでマスク処理済み） | 左カラム大画像。差し替え後は `rounded-[16px] md:rounded-[20px]` 適用済み |

### 差し替え手順（共通）

1. 素材を `/public/assets/` に配置（命名例: `feature-02-omou.jpg`）
2. `components/Features.tsx` の該当 feature の `img` プロパティを更新
3. 02・03 は `imgStyle: null` → 適切な値に変更してレイアウトも調整

---

## HowItWorksセクション (`components/HowItWorks.tsx`)

| STEP | 状態 | 現在の実装 | Figma素材名 | 備考 |
|---|---|---|---|---|
| STEP.1 | ✅ 配置済み | `/assets/STEP1.png` | `_レイヤー_1-2` (icon frame) | 797×812px。カード内イラストとして使用 |
| STEP.2 | ✅ 配置済み | `/assets/STEP2.png` | `アセット 5 1` (icon frame) | 同上 |
| STEP.3 | ✅ 配置済み | `/assets/STEP3.png` | （対応アイコン未確認） | 同上 |
| STEP.4 | ❌ 未配置 | 装飾数字プレースホルダー表示中 | `_レイヤー_1-2` (icon frame, x=1130) | Figmaのベクターアイコン。PNG書き出しまたはSVG実装が必要 |

### 差し替え手順（STEP.4）

1. Figmaから STEP.4 のアイコンを PNG または SVG で書き出す
2. `/public/assets/STEP4.png`（または `.svg`）として配置
3. `components/HowItWorks.tsx` の `steps[3].img` を `"/assets/STEP4.png"` に更新
4. `img: null` の分岐は削除してよい

---

## Productセクション (`components/Product.tsx`)

| 素材 | 状態 | 現在の実装 | Figma素材名 | 備考 |
|---|---|---|---|---|
| `hato-white-angle.jpg` | ✅ 配置済み・採用 | `/assets/hato-white-angle.jpg` | `OQTAHATOしろアングル-20MB 1` | 1116×792px / 144DPI。Figma実寸の2倍。本番品質 |
| `clock-closeup.png` | ✅ 配置済み・未使用 | 未使用 | — | 1280×670px。Product内でクローズアップ用途として利用候補 |
| `clock-side.png` | ⚠️ 低解像度 | 未使用 | — | 320×168px。粗すぎるため本番使用不可。高解像版が必要 |
| `lifestyle-clock-room.png` | ⚠️ 低解像度・旧実装 | 旧 Product で使用していたが削除 | — | 360×225px。粗すぎるため本番使用不可 |

### 確認事項

- `29,800円（Wi-Fiモデル）` の税込/税別表示はFigma上で未指定。本番前に確認が必要
- `商品を購入する` のリンク先 `https://oqta.shop-pro.jp/?pid=143680804` は既存コードから継承。本番前に有効性確認を推奨

---
