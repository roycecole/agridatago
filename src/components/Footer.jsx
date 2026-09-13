import { LOCALES, pathFor } from '../i18n/locales.js'

const FOOTER_TEXT = {
  'zh-Hant': { privacy: '隱私權政策', terms: '使用條款', nav: '頁尾連結', lang: '語言切換' },
  'zh-Hans': { privacy: '隐私权政策', terms: '使用条款', nav: '页尾链接', lang: '语言切换' },
  en: { privacy: 'Privacy Policy', terms: 'Terms of Service', nav: 'Footer links', lang: 'Language' },
  ja: { privacy: 'プライバシーポリシー', terms: '利用規約', nav: 'フッターリンク', lang: '言語切替' },
}

export default function Footer({ locale, page, showPolicyLinks = true }) {
  const t = FOOTER_TEXT[locale]

  return (
    <footer>
      {showPolicyLinks && (
        <nav aria-label={t.nav}>
          <a href="privacy.html">{t.privacy}</a>
          <span aria-hidden="true">·</span>
          <a href="terms.html">{t.terms}</a>
        </nav>
      )}
      <nav aria-label={t.lang} className="lang-switcher">
        {LOCALES.map((l, i) => (
          <span key={l.code}>
            {i > 0 && <span aria-hidden="true">·</span>}
            {l.code === locale ? (
              <span aria-current="true">{l.label}</span>
            ) : (
              <a href={pathFor(l.code, page)}>{l.label}</a>
            )}
          </span>
        ))}
      </nav>
    </footer>
  )
}
