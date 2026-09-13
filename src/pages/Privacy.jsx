import Footer from '../components/Footer.jsx'
import Heading from '../components/Heading.jsx'
import { LINE_ADD_FRIEND_URL } from '../constants.js'

const MOA_OPEN_DATA_URL = 'https://data.moa.gov.tw/index.aspx'

export default function Privacy() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        跳到主要內容
      </a>

      <main className="wrap doc" id="main-content">
        <article aria-labelledby="page-title">
          <Heading as="h1" id="page-title">
            隱私權政策
          </Heading>
          <p className="updated">最後更新：2026-09-13</p>

          <p>本頁說明農數通 AgriDataGo LINE 官方帳號（以下稱「本服務」）如何處理您的資料。</p>

          <section aria-labelledby="use-heading">
            <Heading as="h2" id="use-heading">
              資料用途
            </Heading>
            <p>
              我們僅透過 LINE 平台取得必要的識別碼，用於判斷每日應推播行情訊息的對象，以及在您封鎖好友或將本服務移出群組時停止對您的推播。我們不會將這些識別碼用於其他目的，也不會出售或提供給行情資料、LINE、資料庫託管以外的第三方。
            </p>
          </section>

          <section aria-labelledby="retention-heading">
            <Heading as="h2" id="retention-heading">
              資料保存與刪除
            </Heading>
            <p>
              只要您維持好友關係或本服務仍在群組中，識別碼會持續保存。當您封鎖好友、將本服務移出群組時，系統會將您的紀錄標記為不再推播。若您希望徹底從資料庫中刪除您的識別碼，請透過下方聯絡方式提出。
            </p>
          </section>

          <section aria-labelledby="third-party-heading">
            <Heading as="h2" id="third-party-heading">
              第三方服務
            </Heading>
            <dl>
              <dt>LINE Messaging API</dt>
              <dd>訊息傳送透過 LINE 平台進行，受 LINE 自身的隱私權政策規範。</dd>
              <dt>
                <a href={MOA_OPEN_DATA_URL} target="_blank" rel="noopener">
                  農業部農業資料開放平臺<span className="sr-only">（開啟新視窗）</span>
                </a>
              </dt>
              <dd>行情資料來源，屬公開政府資料，不涉及您的個人資料。</dd>
            </dl>
          </section>

          <section aria-labelledby="contact-heading">
            <Heading as="h2" id="contact-heading">
              聯絡方式
            </Heading>
            <p>
              如對本政策有疑問，或希望刪除您的資料，請透過{' '}
              <a href={LINE_ADD_FRIEND_URL} target="_blank" rel="noopener">
                LINE 官方帳號<span className="sr-only">（開啟新視窗前往 LINE）</span>
              </a>{' '}
              傳訊息與我們聯絡。
            </p>
          </section>

          <a className="back-link" href="index.html">
            <span aria-hidden="true">←</span> 回首頁
          </a>
        </article>
      </main>

      <Footer locale="zh-Hant" page="privacy" showPolicyLinks={false} />
    </>
  )
}
