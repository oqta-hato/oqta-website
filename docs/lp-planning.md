# OQTA LP planning notes

作成日: 2026-05-28

このメモは、サービスサイト完成後に着手する LP 実装の準備用です。現時点では Figma MCP による精査前の仮説メモとして扱い、最終実装前に Figma のレイヤー名・寸法・テキストを Claude Code 側で確認してください。

## Source of truth

- Primary visual reference: `public/assets/LP.png`
  - Size: 1440 x 6967
  - 1枚の縦長スクリーンショットとして LP 全体を確認できる
- Secondary detailed reference: `OQTA.fig`
  - 後で Claude Code + Figma MCP で、テキスト原文、余白、画像レイヤー、コンポーネント構成を確認する
- Do not rely on `OQTA@2x.png` for runtime rendering
  - 17285 x 21238 / 約40MBで巨大。参照・切り出し用途に留める

## LP structure hypothesis

`LP.png` から見える構成は以下。

1. Hero
   - 左上 OQTA ロゴ、右上「OQTAを購入する」系の小さいピンク CTA
   - 右側に大きい製品ライフスタイル写真
   - 左側に青枠のコピー:
     - 「実家に」
     - 「ハトを贈ろう。」
     - 小コピー「想いを届ける鳩時計『OQTA Heart Poppo』」
   - ピンクの「商品を購入する」CTA

2. Rating / social proof strip
   - 星5つ付きの横スクロール風レビューカード
   - PCでは左右に切れて見えるカードあり
   - 実装時は CSS scroll-snap か、静的横並び + overflow-hidden で再現

3. Intro: OQTA Heart Poppo
   - 中央見出し「OQTA Heart Poppo」
   - 短い説明文
   - 中央に製品正面画像

4. Target users
   - 見出し「こんな方々にお使いいただいています」
   - 4カード:
     - 01 女性ポートレート
     - 02 オフィスワーカー
     - 03 車いす
     - 04 後ろ姿の人物
   - 既存 `AboutOqta.tsx` の `targetUsers` テキストと対応している可能性あり
   - 画像は既存素材で概ね揃っている

5. Mid CTA
   - 「OQTA Heart Poppoで、日本の中にやさしいつながりを。あなたの想いが、ハトの音になって届きます。」
   - ピンクの「商品を購入する」CTA
   - 点線の波形装飾

6. Concept / value section
   - 見出し:
     - 「ことばに頼らず、想いだけを届ける」
     - 「OQTA Heart Poppo」
   - 白鳩/雲のような背景装飾
   - 緑背景の大きい製品写真セクション
   - 左に白文字コピー「用事がなくても 音なら想いを届けられる」

7. How to use
   - 見出し「使いかた」
   - 4カード:
     - STEP.1: 購入後にプレゼント/ネット接続
     - STEP.2: 専用アプリから鳴らす人のサークル作成
     - STEP.3: 目の前で鳴らして説明
     - STEP.4: 離れた場所から想いを送る
   - サービスサイトは3ステップ、LPは4ステップで分ける

8. Media / awards
   - 見出し「メディア掲載・受賞歴」
   - `jisseki.png` に近い情報をテキストロゴ風に横配置
   - 権利確認前はテキスト表現が安全

9. Reviews
   - 見出し「レビュー」
   - 3カード:
     - 大久保知裕さん
     - 山中一司さん
     - WAOさん
   - 既存 `Reviews.tsx` を LP 用に流用可能
   - 公開前に掲載同意確認が必要

10. Product
    - 白い大カード
    - 左: `OQTA HATO しろ`, `29,800円（税込モデル？）`
    - 右: 製品写真
    - ピンクの「商品を購入する」CTA
    - 価格表記は税込/税別を要確認

11. FAQ
    - 見出し「よくある質問」
    - 3問だけ表示されている
    - 既存 `FAQ.tsx` は5問なので、LPでは3問構成にする可能性あり

12. Footer
    - 濃い青のフッター
    - 左 OQTA ロゴ、右に会社概要/プライバシーポリシー

## Asset audit

Likely usable as-is:

- `public/assets/LP.png`
  - LP full-page screenshot for visual QA/reference
- `public/assets/logo-blue.png`
  - Header logo
- `public/assets/logo-alt.png`
  - Footer logo candidate
- `public/assets/hato-white-angle.jpg`
  - Product card / hero candidate, good resolution
- `public/assets/product-front.jpg`
  - Review/media card candidate
- `public/assets/hero-headline.png`
  - Hero headline image candidate if text should be raster-exact
- `public/assets/card-bg.png`
  - Target-user card overlay/background candidate
- `public/assets/lifestyle-office-worker.png`
  - Target user 02
- `public/assets/lifestyle-wheelchair.jpg`
  - Target user 03
- `public/assets/video-thumbnail.png`
  - Large green product photo candidate
- `public/assets/STEP1.png`, `STEP2.png`, `STEP3.png`
  - How-to cards, but confirm these match LP icons
- `public/assets/Rectangle 19.png`, `Rectangle 21.png`
  - Possible alternate STEP icons/placeholders from Figma export
- `public/assets/jisseki.png`
  - Media/awards reference only until logo usage is cleared

Needs confirmation or replacement:

- Hero main photo
  - `LP.png` hero uses a warm tabletop product photo. Current closest candidates:
    - `hato-white-angle.jpg`
    - `video-thumbnail.png`
  - Figma MCP should identify the exact image asset/layer.
- Target user 01
  - Screenshot shows a woman portrait. Current closest candidate may be `app-screenshot-grandma.jpg`, but it is 400 x 280 and may be an app screenshot, not the same portrait.
- Target user 04
  - `lifestyle-grandma-kitchen.png` or `lifestyle-wheelchair.jpg` may not match the back-view walking image in LP.
- STEP.4 icon
  - Service-site docs say STEP.4 image is not yet exported. LP needs it.
- Dotted wave decoration
  - Could use CSS/SVG instead of exporting, but Figma MCP should confirm shape.
- Pink CTA style
  - Requires exact color from Figma. Approx visually: soft pink button with white text.

Avoid in runtime:

- `public/assets/OQTA@2x.png`
  - Too large for web use; slice/export needed assets instead.
- `clock-side.png`
  - 320 x 168, too low resolution for prominent display.
- `lifestyle-clock-room.png`
  - 360 x 225, too low resolution for large sections.

## Implementation recommendation

Create LP as a separate route, not by mixing into the service site:

- Route: `app/lp/page.tsx` or `app/lp/oyakoko/page.tsx`
- Components:
  - `app/components/lp/LpHero.tsx`
  - `LpRatingStrip.tsx`
  - `LpIntro.tsx`
  - `LpTargetUsers.tsx`
  - `LpConcept.tsx`
  - `LpHowItWorks.tsx`
  - `LpMediaAwards.tsx`
  - `LpReviews.tsx`
  - `LpProduct.tsx`
  - `LpFaq.tsx`
  - `LpFooter.tsx`
- Keep shared constants in `app/lib/links.ts` if the codebase already has or accepts a small shared module.

Do not reuse service-site components directly when LP layout differs significantly. Reuse data and small helpers where practical, but keep LP-specific visual components separate so the two pages do not keep fighting each other.

## Copy and conversion notes

Primary LP goal appears to be purchase conversion for `OQTA Heart Poppo`.

Conversion path:

- Header CTA
- Hero CTA
- Mid CTA after target users
- Product CTA near bottom

Messaging arc:

- Gift framing: "実家にハトを贈ろう。"
- Low-friction emotional connection: "ことばに頼らず、想いだけを届ける"
- Social proof: ratings, user reviews, media/awards
- Practical clarity: target users, how-to, FAQ
- Purchase: product card with price

## Open questions before implementation

1. LP route name
   - Candidate: `/lp/`, `/lp/oyakoko/`, `/lp/kaigo/`
2. Purchase URL
   - Current candidate: `https://oqta.shop-pro.jp/?pid=143680804`
   - Confirm current availability and whether tracking parameters are needed.
3. Price display
   - Confirm whether `29,800円` is税込 or税別.
4. Review consent
   - Confirm consent for names and text: 大久保知裕さん, 山中一司さん, WAOさん.
5. Logo/media rights
   - Use text-based awards/media until logo usage rights are confirmed.
6. STEP.4 icon
   - Export from Figma or recreate in matching line style.
7. Hero and target-user images
   - Identify exact Figma images and export web-ready assets.

## Claude Code / Figma MCP checklist

When service-site work is done, ask Claude Code to run a Figma MCP pass for the LP:

1. Identify the LP frame and record exact frame dimensions.
2. Export exact hero image, target-user card images, STEP.4 icon, and dotted wave decoration.
3. Extract all visible text from the LP frame.
4. Record key colors:
   - background blue
   - primary blue
   - CTA pink
   - card border blue
   - muted text blue
5. Record desktop section y-positions and section heights.
6. Check whether mobile frames exist. If not, create responsive interpretation from desktop LP.
7. Confirm whether ratings strip is static or intended as carousel/marquee.
8. Confirm FAQ count for LP: screenshot shows 3 questions.
9. Export assets at web-ready sizes, avoiding giant full-frame PNGs.

## Suggested first implementation pass

1. Scaffold separate LP route with static sections and current available assets.
2. Use `LP.png` as visual reference, not as a rendered page image.
3. Build desktop layout first against 1440px width.
4. Add responsive mobile layout.
5. Run `npm run build`.
6. Start dev server and compare screenshot against `public/assets/LP.png`.
7. Replace provisional assets after Figma MCP export.

