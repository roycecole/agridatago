import Footer from '../components/Footer.jsx'
import Heading from '../components/Heading.jsx'
import { LINE_ADD_FRIEND_URL } from '../constants.js'

const MOA_OPEN_DATA_URL = 'https://data.moa.gov.tw/index.aspx'

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        跳到主要內容
      </a>

      <header className="hero">
        <div className="wrap">
          <div className="emoji" aria-hidden="true">🌾</div>
          <Heading as="h1" id="page-title">
            農產品行情，自動送到你的 LINE
          </Heading>
          <p className="tagline">
            加入好友或把農數通拉進群組，每天固定時間自動收到你設定的批發市場行情（預設珍珠芭樂），也能隨時傳訊息或點卡片按鈕查詢其他品項。
          </p>
          <a className="cta-button" href={LINE_ADD_FRIEND_URL} target="_blank" rel="noopener">
            加入 LINE 好友<span className="sr-only">（開啟新視窗前往 LINE）</span>
          </a>
        </div>
      </header>

      <main className="wrap" id="main-content">
        <section aria-labelledby="about-heading">
          <Heading as="h2" id="about-heading">
            這是什麼？
          </Heading>
          <p>
            農數通（AgriDataGo）是一個 LINE 官方帳號（Bot），提供兩種取得農產品批發行情的方式，整理成好讀的卡片訊息。你可以：
          </p>
          <ul>
            <li>直接加農數通為好友，或把它拉進 LINE 群組</li>
            <li>
              每天在你設定的時間自動收到行情（預設每日 07:00 推播珍珠芭樂，可傳 <code>#設定品項 時間</code>{' '}
              更改，例如 <code>#設定芭樂08:30</code>）
            </li>
            <li>
              隨時傳 <code>#品項名稱</code>（例如 <code>#芭樂</code>）或點卡片按鈕，逐層查看品種、地區明細，也能看週／日行情趨勢圖
            </li>
            <li>不想收了，隨時封鎖好友或把農數通移出群組即可，系統會自動停止推播</li>
          </ul>
        </section>

        <section aria-labelledby="data-source-heading">
          <Heading as="h2" id="data-source-heading">
            資料怎麼來的？
          </Heading>
          <p>行情資料並非由我們自行調查或估算，而是直接向政府公開資料源查詢：</p>
          <div className="card">
            <Heading as="h3" id="moa-open-data">
              <a href={MOA_OPEN_DATA_URL} target="_blank" rel="noopener">
                農業部「農業資料開放平臺」<span className="sr-only">（開啟新視窗）</span>
              </a>
            </Heading>
            <p>
              原始資料源自「農產品批發市場交易行情站（AMIS）」，涵蓋全台多個批發市場的蔬果交易價量（芭樂、香蕉、木瓜、芒果、鳳梨等），包含上價、中價、下價、平均價與交易量，每日更新多次。
            </p>
          </div>
          <p style={{ marginTop: 16 }}>
            農數通會即時向這個公開 API 查詢資料，整理格式後回覆或推播，不經過人工判斷或修改數值；另外會標註{' '}
            <a href="https://www.twfood.cc" target="_blank" rel="noopener">
              twfood.cc<span className="sr-only">（開啟新視窗）</span>
            </a>{' '}
            公開頁面的預估零售價，作為消費端的補充參考——該數值為 twfood.cc 自行調查與估算所得，並非實際成交價。
          </p>
        </section>

        <section aria-labelledby="disclaimer-heading">
          <Heading as="h2" id="disclaimer-heading">
            免責提醒
          </Heading>
          <p>
            推播內容僅供參考：批發行情請以官方行情站或市場公告為準，預估零售價亦非保證售價，請勿作為與店家議價的依據。詳見<a href="terms.html">使用條款</a>。
          </p>
        </section>
      </main>

      <Footer locale="zh-Hant" page="index" />
    </>
  )
}
