import Footer from '../../components/Footer.jsx'
import Heading from '../../components/Heading.jsx'
import { LINE_ADD_FRIEND_URL } from '../../constants.js'

const MOA_OPEN_DATA_URL = 'https://data.moa.gov.tw/index.aspx'
const ANCHOR_LABEL = 'この見出しへのリンク'

export default function Terms() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        メインコンテンツへスキップ
      </a>

      <main className="wrap doc" id="main-content">
        <article aria-labelledby="page-title">
          <Heading as="h1" id="page-title" anchorLabel={ANCHOR_LABEL}>
            利用規約
          </Heading>
          <p className="updated">最終更新日：2026-09-13</p>

          <p>
            AgriDataGo の LINE 公式アカウント（以下「本サービス」）をご利用いただきありがとうございます。友だち追加またはグループへの参加をもって、以下の規約に同意したものとみなされます。
          </p>

          <section aria-labelledby="service-heading">
            <Heading as="h2" id="service-heading" anchorLabel={ANCHOR_LABEL}>
              サービス内容
            </Heading>
            <p>
              本サービスは、LINE 公式アカウントを通じて、農産物卸売市場の価格情報を定時配信および対話形式で提供します。品目や配信時刻はユーザー自身が設定できます。データは台湾{' '}
              <a href={MOA_OPEN_DATA_URL} target="_blank" rel="noopener">
                農業部「農業資料開放プラットフォーム」<span className="sr-only">（新しいウィンドウで開く）</span>
              </a>
              が公開するデータに基づきます。
            </p>
          </section>

          <section aria-labelledby="disclaimer-heading">
            <Heading as="h2" id="disclaimer-heading" anchorLabel={ANCHOR_LABEL}>
              免責事項
            </Heading>
            <p>
              本サービスが配信する価格情報は、政府の公開データを自動的に整理したものであり、参考情報として提供されます。
              <strong>その適時性、完全性、正確性を保証するものではありません。</strong>
              実際の取引価格については、公式の価格情報サイト（
              <a href={MOA_OPEN_DATA_URL} target="_blank" rel="noopener">
                農業部農業資料開放プラットフォーム<span className="sr-only">（新しいウィンドウで開く）</span>
              </a>
              ／AMIS）または各卸売市場の発表をご確認ください。ユーザーが本サービスの情報に基づいて行ったいかなる判断についても、本サービスは法的責任を負いません。
            </p>
            <p>
              本サービスが併記する推定小売価格は、第三者サイトである twfood.cc が独自の市場調査とアルゴリズムにより算出した参考数値です。
              <strong>実際の取引価格ではなく、その正確性も保証されません。</strong>
              店舗との価格交渉の根拠として使用しないでください。
            </p>
          </section>

          <section aria-labelledby="changes-heading">
            <Heading as="h2" id="changes-heading" anchorLabel={ANCHOR_LABEL}>
              サービスの変更・中断
            </Heading>
            <p>
              本サービスは非営利の情報整理サービスであり、データ提供元の変更、LINE プラットフォームのポリシー、運用コストその他の事情により、予告なく内容の変更、一時停止、または終了を行う場合があります。
            </p>
          </section>

          <section aria-labelledby="conduct-heading">
            <Heading as="h2" id="conduct-heading" anchorLabel={ANCHOR_LABEL}>
              禁止事項
            </Heading>
            <p>
              LINE の利用規約、法令、または公序良俗に反する目的で本サービスを利用しないでください。不正利用が確認された場合、本サービスは該当ユーザーまたはグループの利用資格を停止する権利を有します。
            </p>
          </section>

          <section aria-labelledby="amend-heading">
            <Heading as="h2" id="amend-heading" anchorLabel={ANCHOR_LABEL}>
              規約の変更
            </Heading>
            <p>本規約は予告なく変更される場合があります。変更内容は本ページに掲載しますので、最終更新日をご確認ください。</p>
          </section>

          <section aria-labelledby="contact-heading">
            <Heading as="h2" id="contact-heading" anchorLabel={ANCHOR_LABEL}>
              お問い合わせ
            </Heading>
            <p>
              本規約に関するご質問は、
              <a href={LINE_ADD_FRIEND_URL} target="_blank" rel="noopener">
                AgriDataGo の LINE 公式アカウント<span className="sr-only">（新しいウィンドウで LINE を開きます）</span>
              </a>
              までメッセージをお送りください。
            </p>
          </section>

          <a className="back-link" href="index.html">
            <span aria-hidden="true">←</span> トップページへ戻る
          </a>
        </article>
      </main>

      <Footer locale="ja" page="terms" showPolicyLinks={false} />
    </>
  )
}
