import Footer from '../../components/Footer.jsx'
import Heading from '../../components/Heading.jsx'
import { LINE_ADD_FRIEND_URL } from '../../constants.js'

const MOA_OPEN_DATA_URL = 'https://data.moa.gov.tw/index.aspx'
const ANCHOR_LABEL = '本节的永久链接'

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        跳到主要内容
      </a>

      <header className="hero">
        <div className="wrap">
          <div className="emoji" aria-hidden="true">🌾</div>
          <Heading as="h1" id="page-title" anchorLabel={ANCHOR_LABEL}>
            农产品行情，自动发送到你的 LINE
          </Heading>
          <p className="tagline">
            添加好友或把农数通拉进群组，每天固定时间自动收到你设置的批发市场行情（默认珍珠芭乐），也能随时发消息或点卡片按钮查询其他品类。
          </p>
          <a className="cta-button" href={LINE_ADD_FRIEND_URL} target="_blank" rel="noopener">
            添加 LINE 好友<span className="sr-only">（在新窗口打开 LINE）</span>
          </a>
        </div>
      </header>

      <main className="wrap" id="main-content">
        <section aria-labelledby="about-heading">
          <Heading as="h2" id="about-heading" anchorLabel={ANCHOR_LABEL}>
            这是什么？
          </Heading>
          <p>
            农数通（AgriDataGo）是一个 LINE 官方账号（Bot），提供两种获取农产品批发行情的方式，整理成易读的卡片消息。你可以：
          </p>
          <ul>
            <li>直接添加农数通为好友，或把它拉进 LINE 群组</li>
            <li>
              每天在你设置的时间自动收到行情（默认每日 07:00 推送珍珠芭乐）；如需修改，请发送指令 <code>#設定芭樂08:30</code>{' '}
              （表示品项芭乐、时间 08:30；指令须以繁体中文输入）
            </li>
            <li>
              随时发送品项指令（须以繁体中文输入，例如 <code>#芭樂</code> 表示芭乐）或点卡片按钮，逐层查看品种、地区明细，也能看周／日行情趋势图
            </li>
            <li>不想收了，随时屏蔽好友或把农数通移出群组即可，系统会自动停止推送</li>
          </ul>
        </section>

        <section aria-labelledby="data-source-heading">
          <Heading as="h2" id="data-source-heading" anchorLabel={ANCHOR_LABEL}>
            数据从哪里来？
          </Heading>
          <p>行情数据并非由我们自行调查或估算，而是直接向政府公开数据源查询：</p>
          <div className="card">
            <Heading as="h3" id="moa-open-data" anchorLabel={ANCHOR_LABEL}>
              <a href={MOA_OPEN_DATA_URL} target="_blank" rel="noopener">
                台湾农业部「农业资料开放平台」<span className="sr-only">（在新窗口打开）</span>
              </a>
            </Heading>
            <p>
              原始数据源自「农产品批发市场交易行情站（AMIS）」，涵盖全台多个批发市场的蔬果交易价量（芭乐、香蕉、木瓜、芒果、菠萝等），包含上价、中价、下价、平均价与交易量，每日更新多次。
            </p>
          </div>
          <p style={{ marginTop: 16 }}>
            农数通会即时向这个公开 API 查询数据，整理格式后回复或推送，不经过人工判断或修改数值；另外会标注{' '}
            <a href="https://www.twfood.cc" target="_blank" rel="noopener">
              twfood.cc<span className="sr-only">（在新窗口打开）</span>
            </a>{' '}
            公开页面的预估零售价，作为消费端的补充参考——该数值为 twfood.cc 自行调查与估算所得，并非实际成交价。
          </p>
        </section>

        <section aria-labelledby="disclaimer-heading">
          <Heading as="h2" id="disclaimer-heading" anchorLabel={ANCHOR_LABEL}>
            免责提醒
          </Heading>
          <p>
            推送内容仅供参考：批发行情请以官方行情站或市场公告为准，预估零售价也不是保证售价，请勿作为与店家议价的依据。详见
            <a href="terms.html">使用条款</a>。
          </p>
        </section>
      </main>

      <Footer locale="zh-Hans" page="index" />
    </>
  )
}
