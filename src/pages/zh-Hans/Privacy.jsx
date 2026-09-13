import Footer from '../../components/Footer.jsx'
import Heading from '../../components/Heading.jsx'
import { LINE_ADD_FRIEND_URL } from '../../constants.js'

const MOA_OPEN_DATA_URL = 'https://data.moa.gov.tw/index.aspx'
const ANCHOR_LABEL = '本节的永久链接'

export default function Privacy() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        跳到主要内容
      </a>

      <main className="wrap doc" id="main-content">
        <article aria-labelledby="page-title">
          <Heading as="h1" id="page-title" anchorLabel={ANCHOR_LABEL}>
            隐私政策
          </Heading>
          <p className="updated">最后更新：2026-09-13</p>

          <p>本页说明农数通 AgriDataGo LINE 官方账号（以下称「本服务」）如何处理您的数据。</p>

          <section aria-labelledby="use-heading">
            <Heading as="h2" id="use-heading" anchorLabel={ANCHOR_LABEL}>
              数据用途
            </Heading>
            <p>
              我们仅通过 LINE 平台获取必要的识别码，用于判断每日应推送行情消息的对象，以及在您屏蔽好友或将本服务移出群组时停止对您的推送。我们不会将这些识别码用于其他目的，也不会出售或提供给行情数据、LINE、数据库托管以外的第三方。
            </p>
          </section>

          <section aria-labelledby="retention-heading">
            <Heading as="h2" id="retention-heading" anchorLabel={ANCHOR_LABEL}>
              数据保存与删除
            </Heading>
            <p>
              只要您维持好友关系或本服务仍在群组中，识别码会持续保存。当您屏蔽好友、将本服务移出群组时，系统会将您的记录标记为不再推送。若您希望彻底从数据库中删除您的识别码，请通过下方联系方式提出。
            </p>
          </section>

          <section aria-labelledby="third-party-heading">
            <Heading as="h2" id="third-party-heading" anchorLabel={ANCHOR_LABEL}>
              第三方服务
            </Heading>
            <dl>
              <dt>LINE Messaging API</dt>
              <dd>消息传送通过 LINE 平台进行，受 LINE 自身的隐私政策规范。</dd>
              <dt>
                <a href={MOA_OPEN_DATA_URL} target="_blank" rel="noopener">
                  台湾农业部农业资料开放平台<span className="sr-only">（在新窗口打开）</span>
                </a>
              </dt>
              <dd>行情数据来源，属公开政府数据，不涉及您的个人信息。</dd>
            </dl>
          </section>

          <section aria-labelledby="contact-heading">
            <Heading as="h2" id="contact-heading" anchorLabel={ANCHOR_LABEL}>
              联系方式
            </Heading>
            <p>
              如对本政策有疑问，或希望删除您的数据，请通过{' '}
              <a href={LINE_ADD_FRIEND_URL} target="_blank" rel="noopener">
                LINE 官方账号<span className="sr-only">（在新窗口打开 LINE）</span>
              </a>{' '}
              发消息与我们联系。
            </p>
          </section>

          <a className="back-link" href="index.html">
            <span aria-hidden="true">←</span> 返回首页
          </a>
        </article>
      </main>

      <Footer locale="zh-Hans" page="privacy" showPolicyLinks={false} />
    </>
  )
}
