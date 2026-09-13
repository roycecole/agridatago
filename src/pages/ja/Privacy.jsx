import Footer from '../../components/Footer.jsx'
import Heading from '../../components/Heading.jsx'
import { LINE_ADD_FRIEND_URL } from '../../constants.js'

const MOA_OPEN_DATA_URL = 'https://data.moa.gov.tw/index.aspx'
const ANCHOR_LABEL = 'この見出しへのリンク'

export default function Privacy() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        メインコンテンツへスキップ
      </a>

      <main className="wrap doc" id="main-content">
        <article aria-labelledby="page-title">
          <Heading as="h1" id="page-title" anchorLabel={ANCHOR_LABEL}>
            プライバシーポリシー
          </Heading>
          <p className="updated">最終更新日：2026-09-13</p>

          <p>本ページでは、AgriDataGo の LINE 公式アカウント（以下「本サービス」）がお客様のデータをどのように取り扱うかについて説明します。</p>

          <section aria-labelledby="use-heading">
            <Heading as="h2" id="use-heading" anchorLabel={ANCHOR_LABEL}>
              データの利用目的
            </Heading>
            <p>
              本サービスは、LINE プラットフォームを通じて必要最小限の識別子のみを取得し、毎日の価格配信の対象を判定する目的、および友だち解除やグループからの削除があった際に配信を停止する目的にのみ利用します。これらの識別子を他の目的に利用することはなく、価格データの提供元、LINE、データベースのホスティング事業者以外の第三者に販売・提供することもありません。
            </p>
          </section>

          <section aria-labelledby="retention-heading">
            <Heading as="h2" id="retention-heading" anchorLabel={ANCHOR_LABEL}>
              データの保存と削除
            </Heading>
            <p>
              友だち関係が続いている間、または本サービスがグループに残っている間、識別子は保存され続けます。友だち解除やグループからの削除があった場合、該当のレコードは配信対象外としてマークされます。データベースから識別子を完全に削除することをご希望の場合は、下記の連絡先までご連絡ください。
            </p>
          </section>

          <section aria-labelledby="third-party-heading">
            <Heading as="h2" id="third-party-heading" anchorLabel={ANCHOR_LABEL}>
              第三者サービス
            </Heading>
            <dl>
              <dt>LINE Messaging API</dt>
              <dd>メッセージの送信は LINE プラットフォームを通じて行われ、LINE 自身のプライバシーポリシーに従います。</dd>
              <dt>
                <a href={MOA_OPEN_DATA_URL} target="_blank" rel="noopener">
                  台湾農業部「農業資料開放プラットフォーム」<span className="sr-only">（新しいウィンドウで開く）</span>
                </a>
              </dt>
              <dd>価格データの取得元であり、公開されている政府データのため、お客様の個人情報は含まれません。</dd>
            </dl>
          </section>

          <section aria-labelledby="contact-heading">
            <Heading as="h2" id="contact-heading" anchorLabel={ANCHOR_LABEL}>
              お問い合わせ
            </Heading>
            <p>
              本ポリシーに関するご質問や、データの削除をご希望の場合は、
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

      <Footer locale="ja" page="privacy" showPolicyLinks={false} />
    </>
  )
}
