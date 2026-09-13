import Footer from '../components/Footer.jsx'
import Heading from '../components/Heading.jsx'
import { LINE_ADD_FRIEND_URL } from '../constants.js'

const MOA_OPEN_DATA_URL = 'https://data.moa.gov.tw/index.aspx'

export default function Terms() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        跳到主要內容
      </a>

      <main className="wrap doc" id="main-content">
        <article aria-labelledby="page-title">
          <Heading as="h1" id="page-title">
            使用條款
          </Heading>
          <p className="updated">最後更新：2026-09-13</p>

          <p>歡迎使用農數通 AgriDataGo LINE 官方帳號（以下稱「本服務」）。將本服務加為好友或加入群組，即表示您同意以下條款。</p>

          <section aria-labelledby="service-heading">
            <Heading as="h2" id="service-heading">
              服務內容
            </Heading>
            <p>
              本服務透過 LINE 官方帳號，提供農產品批發市場行情資訊的每日定時推播與互動查詢，品項與推播時間可由使用者自行設定，資料來源為{' '}
              <a href={MOA_OPEN_DATA_URL} target="_blank" rel="noopener">
                農業部農業資料開放平臺<span className="sr-only">（開啟新視窗）</span>
              </a>{' '}
              之公開資料。
            </p>
          </section>

          <section aria-labelledby="disclaimer-heading">
            <Heading as="h2" id="disclaimer-heading">
              免責聲明
            </Heading>
            <p>
              本服務推播之行情資訊為自動整理自政府公開資料，僅供參考，<strong>不保證即時性、完整性或正確性</strong>
              。實際交易價格請以官方行情站（
              <a href={MOA_OPEN_DATA_URL} target="_blank" rel="noopener">
                農業部農業資料開放平臺<span className="sr-only">（開啟新視窗）</span>
              </a>
              ／AMIS）或各批發市場公告為準。使用者依據本服務資訊所做之任何決策，本服務不負任何法律責任。
            </p>
            <p>
              本服務標註之預估零售價，係由第三方網站 twfood.cc 依市場調查與演算法推估所得之參考數值，
              <strong>並非實際成交價，亦不保證其準確性</strong>，請勿以此作為與店家議價之依據。
            </p>
          </section>

          <section aria-labelledby="changes-heading">
            <Heading as="h2" id="changes-heading">
              服務變更與中斷
            </Heading>
            <p>本服務為非營利之資訊整理服務，可能因資料來源異動、LINE 平台政策、維運成本或其他因素，隨時調整、暫停或終止服務，恕不另行個別通知。</p>
          </section>

          <section aria-labelledby="conduct-heading">
            <Heading as="h2" id="conduct-heading">
              使用者行為
            </Heading>
            <p>請勿以本服務進行任何違反 LINE 使用條款、法令或公共秩序之行為。若發現濫用情形，本服務保留移除該使用者／群組訂閱資格之權利。</p>
          </section>

          <section aria-labelledby="amend-heading">
            <Heading as="h2" id="amend-heading">
              條款修改
            </Heading>
            <p>本條款可能不定期更新，更新後將公告於本頁面，請留意最後更新日期。</p>
          </section>

          <section aria-labelledby="contact-heading">
            <Heading as="h2" id="contact-heading">
              聯絡方式
            </Heading>
            <p>
              如對本條款有疑問，請透過{' '}
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

      <Footer locale="zh-Hant" page="terms" showPolicyLinks={false} />
    </>
  )
}
