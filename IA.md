# OQTA サービスサイト 新IA（情報設計）v0

> レンズ: [[BRAND_FOUNDATION.md]] / 素体: [[PHASE0_ANALYSIS.md]] / 値: [[DESIGN_SYSTEM.md]]。
> 方針: 「ZINEのWeb版」。重心を購入・製品 → 文化・想い・応援へ。英語主役のバイリンガル。

## 1. i18n（多言語）方針 ※要JQ確定・推奨案
- **推奨：ロケール・ルート分割** `/`(=英語デフォルト) と `/ja`。Next.js 16 static export ＋ `generateStaticParams` で両言語を静的生成。
- **コピー辞書**：[[CONTENT.md]] を `dictionaries/{en,ja}.ts` に落とし、コンポーネントは辞書キーで描画。
- ナビに言語トグル。英語を“顔”に（逆輸入の匂い）。
- 代替：①トグルのみ(単一ルート) ②日本語デフォルト+/en。SEO・世界狙いなら推奨案(ルート分割)が有利。

## 2. サイト構成（セクション順）＝ ZINE由来IA
| # | セクション | 役割 | 旧→新 |
|---|---|---|---|
| 0 | Nav | ロゴ / 言語トグル / 主要リンク / 応援ボタン | TRANSFORM(言語トグル追加) |
| 1 | **Hero** | INORI定義＋「1秒の、言葉のいらない想い」。CTAに「実家にハトを贈ろう」降格 | TRANSFORM |
| 2 | **問題提起** | 言葉を使いすぎた時代 | ADD(ZINE) |
| 3 | **思想** | 余白という思想／見返りを求めない祈り（OQTAに込めた想い・タブ4） | KEEP+深化 |
| 4 | **体感** | 想いが届く瞬間（マンガ／"I'm thinking of you"） | ADD(ZINE) |
| 5 | **使い方** | STEP1〜3（線画・枠カード） | KEEP |
| 6 | **証明＝ストーリー** | 利用者の声(カルーセル)＋3つの利用シーン(介護施設/仏壇/分身)＋LINE証言＝“定義できない”の証明 | TRANSFORM(格上げ) |
| 7 | **共鳴マップ** | inoree.world 埋め込み/誘導＋カウンター（目玉・インタラクティブ） | ADD |
| 8 | **京都の鳩を鳴らす** | QR/ボタンで実機を鳴らす体験フック | ADD |
| 9 | **製品** | Heart Poppo / INORI Clock（地域名）。家電販売色を抑え“家族”として | TRANSFORM(脱・家電) |
| 10 | **メディア・受賞** | 実績（本日リニューアル済の中央寄せ2行） | KEEP |
| 11 | **物語と招待** | 創業ストーリー＋僧侶ファウンダー＋**神社モデル(応援＝外部決済)**＋購入 | ADD/TRANSFORM |
| 12 | **Hub** | YouTube / note / Heart Poppo Radio へのトンマナ統一リンク | ADD |
| 13 | **FAQ** | よくある質問 | KEEP |
| 14 | Footer | リンク（実URL維持）／会社概要・プライバシー | KEEP |

## 3. コンポーネント・インベントリ（DESIGN_SYSTEM 準拠）
- Eyebrow(Bold20) / H2(Bold42) / Body(Medium16) / 装飾数字(Italianno286 #c5cdda)
- カード(白/border#003da6/rounded-50) / 証言カード(rounded-20/影/**カルーセル**) / ボタン・ピル(rounded-60) / タブ(選択白・非選択#e5ecf6/#7488a9)
- LPペルソナカード(写真+暗幕グラデ+白文字 rounded-30) ※LPで使用
- 新規実装要：言語トグル / inoree.world 埋め込み / 京都QR鳴動ボタン / 応援(外部決済)導線

## 4. 不足アセット（Phase2でFigmaから再エクスポート）
- LPペルソナ写真 `pixta_*` ×4 / カルーセル矢印 arrow-left|right-circle / 証言写真 DSC02541-18・180827_hip_top / kv_img4
- 既存ローカル：`public/assets/` + `OQTA/`（生エクスポート: Twitter post 1-3, Rectangle, アセット, Vector, kv_img1/3）

## 5. トンマナ統一の宿題
- LPのピンクCTA → サービスサイトの紺に統一（or 応援=別色の意図を決める）
- レガシー文言「OQTA HATO」→ Heart Poppo / INORI Clock
