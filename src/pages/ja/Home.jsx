import Footer from '../../components/Footer.jsx'
import Heading from '../../components/Heading.jsx'
import { LINE_ADD_FRIEND_URL } from '../../constants.js'

const MOA_OPEN_DATA_URL = 'https://data.moa.gov.tw/index.aspx'
const ANCHOR_LABEL = 'この見出しへのリンク'

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        メインコンテンツへスキップ
      </a>

      <header className="hero">
        <div className="wrap">
          <div className="emoji" aria-hidden="true">🌾</div>
          <Heading as="h1" id="page-title" anchorLabel={ANCHOR_LABEL}>
            農産物の卸売価格を、あなたの LINE へ
          </Heading>
          <p className="tagline">
            友だち追加するか、グループに招待するだけで、毎日決まった時間に設定した卸売市場の価格を自動で受け取れます（初期設定はパールグアバ、07:00）。メッセージを送ったり、カードのボタンをタップしたりすれば、いつでも他の品目も検索できます。
          </p>
          <a className="cta-button" href={LINE_ADD_FRIEND_URL} target="_blank" rel="noopener">
            LINEで友だち追加<span className="sr-only">（新しいウィンドウで LINE を開きます）</span>
          </a>
        </div>
      </header>

      <main className="wrap" id="main-content">
        <section aria-labelledby="about-heading">
          <Heading as="h2" id="about-heading" anchorLabel={ANCHOR_LABEL}>
            これは何ですか？
          </Heading>
          <p>
            AgriDataGo は、農産物の卸売価格を見やすいカード形式のメッセージで届ける LINE 公式アカウント（ボット）です。次の 2 つの方法で価格を確認できます：
          </p>
          <ul>
            <li>AgriDataGo を友だち追加する、または LINE グループに招待する</li>
            <li>
              毎日、設定した時間に自動で価格を受け取れます（初期設定はパールグアバ、07:00）。変更するには、トーク画面でコマンドを送信します。例：
              <code>#設定芭樂08:30</code>{' '}
              と送るとパールグアバ・08:30 に設定されます。コマンドと品目名は中国語（繁体字）で入力する必要があります。
            </li>
            <li>
              <code>#</code> に続けて品目名を中国語で送信する（例：グアバは <code>#芭樂</code>）か、カードのボタンをタップすると、いつでも品種・地域別の詳細を確認でき、週次／日次の価格推移グラフも見られます
            </li>
            <li>受け取りをやめたい場合は、友だち解除するか、グループから削除するだけで、自動的に配信が停止します</li>
          </ul>
        </section>

        <section aria-labelledby="data-source-heading">
          <Heading as="h2" id="data-source-heading" anchorLabel={ANCHOR_LABEL}>
            データの出所は？
          </Heading>
          <p>価格データは独自に調査・推定したものではなく、政府のオープンデータを直接取得しています：</p>
          <div className="card">
            <Heading as="h3" id="moa-open-data" anchorLabel={ANCHOR_LABEL}>
              <a href={MOA_OPEN_DATA_URL} target="_blank" rel="noopener">
                台湾 農業部「農業資料開放プラットフォーム」<span className="sr-only">（新しいウィンドウで開く）</span>
              </a>
            </Heading>
            <p>
              元データは「農産物卸売市場取引価格情報システム（AMIS）」に由来し、台湾全土の卸売市場における青果の取引価格・数量（グアバ、バナナ、パパイヤ、マンゴー、パイナップルなど）を網羅しています。高値・中値・安値・平均値および取引量を含み、1 日に複数回更新されます。
            </p>
          </div>
          <p style={{ marginTop: 16 }}>
            AgriDataGo はこの公開 API にリアルタイムでアクセスし、返信やプッシュ配信用に整形するのみで、数値を人為的に判断・変更することはありません。また、
            <a href="https://www.twfood.cc" target="_blank" rel="noopener">
              twfood.cc<span className="sr-only">（新しいウィンドウで開く）</span>
            </a>
            の公開ページに掲載された推定小売価格も参考情報として併記します。この数値は twfood.cc 独自の調査とアルゴリズムによる推定であり、実際の取引価格ではありません。
          </p>
        </section>

        <section aria-labelledby="disclaimer-heading">
          <Heading as="h2" id="disclaimer-heading" anchorLabel={ANCHOR_LABEL}>
            ご利用にあたっての注意
          </Heading>
          <p>
            配信内容はあくまで参考情報です。卸売価格は公式の価格情報サイトまたは市場発表をご確認ください。推定小売価格も保証された価格ではありませんので、店舗との価格交渉の根拠にはしないでください。詳しくは
            <a href="terms.html">利用規約</a>をご覧ください。
          </p>
        </section>
      </main>

      <Footer locale="ja" page="index" />
    </>
  )
}
