export const LOCALES = [
  { code: 'zh-Hant', label: '繁體中文', dir: '' },
  { code: 'zh-Hans', label: '简体中文', dir: 'zh-Hans' },
  { code: 'en', label: 'English', dir: 'en' },
  { code: 'ja', label: '日本語', dir: 'ja' },
]

export function pathFor(locale, page) {
  const entry = LOCALES.find((l) => l.code === locale)
  return entry.dir ? `/${entry.dir}/${page}.html` : `/${page}.html`
}
