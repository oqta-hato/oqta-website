# OQTA デザインシステム（Figma `OQTA-Renewal` 抽出 / 2026-05-29）

> 出典: Figma MCP `get_design_context`（fileKey AQ2NpCInRanyjeU3CXGDJ5）。1440px幅デザイン。
> ⚠️ 旧ブランド(1.5年前)のため文言は `OQTA HATO` 等レガシーが残る。新ブランドでは Heart Poppo / INORI Clock に。値はそのまま実装の基準として使える。

## 1. カラー
| 用途 | 値 |
|---|---|
| Primary（テキスト/ボーダー/ボタン） | `#003da6` |
| Accent 背景（タブ非選択・淡背景） | `#e5ecf6` |
| Muted テキスト（非選択タブ等） | `#7488a9` |
| 装飾数字 | `#c5cdda` |
| カード影 | `0px 5px 20px rgba(4,67,176,0.05)` |
| 画像オーバーレイ（LPペルソナ） | gradient transparent → `rgba(12,12,12,0.5)` |

## 2. タイポグラフィ
**書体**：本文・見出し・UI = **Zen Kaku Gothic New**（Bold / Medium / **Black**）。装飾数字 = **Italianno: Regular**。Latin補助 = Inter（実装）。

| 役割 | 書体/ウェイト | サイズ | 行間 | 色 | 備考 |
|---|---|--:|--:|---|---|
| Hero 大見出し（ハトを贈ろう。） | Zen Kaku **Medium** | 38 | 40 | #003da6 | ※太字でなくMedium |
| セクション英語ラベル（Service/Media等） | Zen Kaku Bold | 20 | 40 | #003da6 | |
| セクションH2（OQTAに込めた想い等） | Zen Kaku Bold | **42** | 40 | #003da6 | |
| サブ見出し（問いの文） | Zen Kaku Bold | 26 | 24 | #003da6 | |
| 本文 | Zen Kaku Medium | 16 | **40**（思想）/ **30**（カード） | #003da6 | |
| カード/証言タイトル | Zen Kaku Medium | 18 | 30 | #003da6 | text-justify |
| STEPラベル（STEP.1） | Zen Kaku Bold | 30 | 40 | #003da6 | center |
| STEPサブ | Zen Kaku Medium | 20 | 40 | #003da6 | center |
| タブ（選択） | Zen Kaku Bold | 18 | 40 | #003da6 | bg白 |
| タブ（非選択） | Zen Kaku Bold | 18 | 40 | **#7488a9** | bg #e5ecf6 |
| ボタン文字 | Zen Kaku Bold | 20 | 40 | 白(塗)/#003da6(枠) | |
| 装飾数字 01-04（Features） | **Italianno Regular** | **286** | 357 | #c5cdda | center |
| LPペルソナ番号 | Zen Kaku **Black** | 30 | 40 | 白 | 画像上・text-shadow |
| LPペルソナ本文 | Zen Kaku Medium | 18 | 32 | 白 | 画像上・text-shadow |
| LPペルソナ見出し | Zen Kaku Bold | 32 | 40 | #003da6 | center |

## 3. コンポーネント
- **カード（サービス/STEP）**：白・border 1px #003da6・**rounded-[50px]**。STEPカード w398×h405。
- **証言カード（利用者の声）**：白・**rounded-[20px]**・shadow `0 5 20 rgba(4,67,176,0.05)`・w400×h440。**カルーセル矢印あり**（arrow-left/right-circle, size 51.5）← 現実装は静的なので差分。
- **ボタン/ピル**：**rounded-[60px]**・h≈57・w220。塗り=bg #003da6/白文字、枠=白/border #003da6/#003da6文字。
- **タブピル**：rounded-[60px]・h57×w181。選択=白bg、非選択=#e5ecf6 bg、border #003da6。
- **LPペルソナカード**：人物写真 + 下方向グラデ暗幕(透明→rgba(12,12,12,0.5)) + rounded-[30px]・w295×h343。番号(白Black30)＋本文(白Medium18)を画像上にオーバーレイ。
- **大カード枠（サービス）**：白・border #003da6・rounded-[50px]・w1242×h549。

## 4. レイアウト
- 基準幅 1440px。セクション左パディング ≈ 98–145px。コンテンツ最大幅 ≈ 1242px。
- 装飾数字は巨大(286px)で薄色(#c5cdda)、セクションの背面装飾として配置。

## 5. 実装との差分メモ
- 現実装の装飾数字は ~180px → Figmaは **286px**。
- 利用者の声の**カルーセル矢印**がFigmaにあり（実装は静的3枚）。
- Hero大見出しは **Medium 38px**（太字でない）。
- 「OQTAに込めた想い」英語ラベル＝**インフォメーションからエモーションへ**（本日実装で反映済み・Figmaと一致）。

## 6. LP固有
- LPはCTAが**ピンク系**（サービスサイトは紺）＝トンマナ統一の対象。
- LPペルソナ4枚の本文（実物コピー）：
  1. 遠くに住む親と、電話やLINEをする時間がなくても、気にかけていることを伝えたい人
  2. 親に感謝を伝えるタイミングを失ったまま、このまま何もせずに、後悔したくない人
  3. 介護施設入居者や長期入院患者さんなど、気軽な声かけが難しい人
  4. 海外赴任や海外留学中のご家族とのコミュニケーションツールとして

> 関連: [[BRAND_FOUNDATION.md]] / [[PHASE0_ANALYSIS.md]]。Phase2実装時はこの値を基準に、新ブランド（pray不使用・英語主役・神社モデル・ZINE思想）へTRANSFORM。
