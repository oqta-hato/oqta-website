export default function Footer() {
  return (
    <footer className="bg-[#1a2540] text-white/50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
          <div>
            <p className="font-[family-name:var(--font-italianno)] text-white text-3xl mb-3">
              OQTA
            </p>
            <p className="text-sm leading-relaxed max-w-xs">
              想いを届ける、静かなつながり。
            </p>
          </div>
          <div className="flex gap-12 text-sm">
            <div className="flex flex-col gap-3">
              <p className="text-white/80 font-medium mb-1">サービス</p>
              <a href="#concept" className="hover:text-white transition-colors">コンセプト</a>
              <a href="#features" className="hover:text-white transition-colors">機能</a>
              <a href="#how" className="hover:text-white transition-colors">使い方</a>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-white/80 font-medium mb-1">会社</p>
              <a href="https://oqta.com" className="hover:text-white transition-colors">会社概要</a>
              <a href="mailto:kiopi@oqta.com" className="hover:text-white transition-colors">お問い合わせ</a>
              <a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-xs">
          © {new Date().getFullYear()} OQTA, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
