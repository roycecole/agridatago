import Footer from '../../components/Footer.jsx'
import Heading from '../../components/Heading.jsx'
import { LINE_ADD_FRIEND_URL } from '../../constants.js'

const MOA_OPEN_DATA_URL = 'https://data.moa.gov.tw/index.aspx'
const ANCHOR_LABEL = 'Permalink to this section'

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <header className="hero">
        <div className="wrap">
          <div className="emoji" aria-hidden="true">🌾</div>
          <Heading as="h1" id="page-title" anchorLabel={ANCHOR_LABEL}>
            Wholesale Produce Prices, Delivered to Your LINE
          </Heading>
          <p className="tagline">
            Add AgriDataGo as a friend, or invite it into a group chat, to automatically receive wholesale market
            prices at a time you choose (pearl guava by default) — or message it, or tap the card buttons, anytime
            to look up other crops.
          </p>
          <a className="cta-button" href={LINE_ADD_FRIEND_URL} target="_blank" rel="noopener">
            Add on LINE<span className="sr-only">（opens LINE in a new window）</span>
          </a>
        </div>
      </header>

      <main className="wrap" id="main-content">
        <section aria-labelledby="about-heading">
          <Heading as="h2" id="about-heading" anchorLabel={ANCHOR_LABEL}>
            What is this?
          </Heading>
          <p>
            AgriDataGo is a LINE official account (bot) that delivers wholesale produce prices as easy-to-read card
            messages, in two ways. You can:
          </p>
          <ul>
            <li>Add AgriDataGo as a friend, or invite it into a LINE group</li>
            <li>
              Get prices automatically every day at a time you set (pearl guava is sent at 07:00 by default). To
              change it, send a command in the chat — for example, <code>#設定芭樂08:30</code> sets it to guava at
              8:30. Commands and crop names are entered in Chinese.
            </li>
            <li>
              Send a crop name with <code>#</code> in front — in Chinese, e.g. <code>#芭樂</code> for guava — or tap
              a card button, anytime, to drill down through variety and region detail, and view weekly/daily price
              trend charts
            </li>
            <li>Done with it? Just unfriend AgriDataGo or remove it from the group — pushes stop automatically</li>
          </ul>
        </section>

        <section aria-labelledby="data-source-heading">
          <Heading as="h2" id="data-source-heading" anchorLabel={ANCHOR_LABEL}>
            Where does the data come from?
          </Heading>
          <p>Price data isn't researched or estimated by us — we query a government open-data source directly:</p>
          <div className="card">
            <Heading as="h3" id="moa-open-data" anchorLabel={ANCHOR_LABEL}>
              <a href={MOA_OPEN_DATA_URL} target="_blank" rel="noopener">
                Taiwan Ministry of Agriculture — Agricultural Data Open Platform
                <span className="sr-only">（opens in a new window）</span>
              </a>
            </Heading>
            <p>
              The raw data comes from the Agricultural Products Wholesale Market Price Information System (AMIS),
              covering fruit and vegetable trading prices and volumes across Taiwan's wholesale markets (guava,
              banana, papaya, mango, pineapple, and more), including high, mid, low, and average prices plus trading
              volume, updated multiple times daily.
            </p>
          </div>
          <p style={{ marginTop: 16 }}>
            AgriDataGo queries this open API in real time and formats the results for replies and push messages,
            without manual review or alteration of the figures. It also cites an estimated retail price from{' '}
            <a href="https://www.twfood.cc" target="_blank" rel="noopener">
              twfood.cc<span className="sr-only">（opens in a new window）</span>
            </a>
            's public page as a supplementary reference for consumers — that figure is twfood.cc's own survey- and
            algorithm-based estimate, not an actual transaction price.
          </p>
        </section>

        <section aria-labelledby="disclaimer-heading">
          <Heading as="h2" id="disclaimer-heading" anchorLabel={ANCHOR_LABEL}>
            A note on accuracy
          </Heading>
          <p>
            Pushed content is for reference only: for wholesale prices, defer to the official price-reporting site
            or market announcements — and the estimated retail price is not a guaranteed price either, so please
            don't use it to negotiate with vendors. See the <a href="terms.html">Terms of Service</a> for details.
          </p>
        </section>
      </main>

      <Footer locale="en" page="index" />
    </>
  )
}
