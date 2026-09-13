import Footer from '../../components/Footer.jsx'
import Heading from '../../components/Heading.jsx'
import { LINE_ADD_FRIEND_URL } from '../../constants.js'

const MOA_OPEN_DATA_URL = 'https://data.moa.gov.tw/index.aspx'
const ANCHOR_LABEL = '本节的永久链接'

export default function Terms() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        跳到主要内容
      </a>

      <main className="wrap doc" id="main-content">
        <article aria-labelledby="page-title">
          <Heading as="h1" id="page-title" anchorLabel={ANCHOR_LABEL}>
            使用条款
          </Heading>
          <p className="updated">最后更新：2026-09-13</p>

          <p>欢迎使用农数通 AgriDataGo LINE 官方账号（以下称「本服务」）。将本服务添加为好友或加入群组，即表示您同意以下条款。</p>

          <section aria-labelledby="service-heading">
            <Heading as="h2" id="service-heading" anchorLabel={ANCHOR_LABEL}>
              服务内容
            </Heading>
            <p>
              本服务通过 LINE 官方账号，提供农产品批发市场行情信息的每日定时推送与互动查询，品类与推送时间可由用户自行设置，数据来源为{' '}
              <a href={MOA_OPEN_DATA_URL} target="_blank" rel="noopener">
                台湾农业部农业资料开放平台<span className="sr-only">（在新窗口打开）</span>
              </a>{' '}
              的公开数据。
            </p>
          </section>

          <section aria-labelledby="disclaimer-heading">
            <Heading as="h2" id="disclaimer-heading" anchorLabel={ANCHOR_LABEL}>
              免责声明
            </Heading>
            <p>
              本服务推送之行情信息为自动整理自政府公开数据，仅供参考，<strong>不保证即时性、完整性或正确性</strong>
              。实际交易价格请以官方行情站（
              <a href={MOA_OPEN_DATA_URL} target="_blank" rel="noopener">
                台湾农业部农业资料开放平台<span className="sr-only">（在新窗口打开）</span>
              </a>
              ／AMIS）或各批发市场公告为准。用户依据本服务信息所做之任何决策，本服务不负任何法律责任。
            </p>
            <p>
              本服务标注之预估零售价，系由第三方网站 twfood.cc 依市场调查与算法推估所得之参考数值，
              <strong>并非实际成交价，也不保证其准确性</strong>，请勿以此作为与店家议价之依据。
            </p>
          </section>

          <section aria-labelledby="changes-heading">
            <Heading as="h2" id="changes-heading" anchorLabel={ANCHOR_LABEL}>
              服务变更与中断
            </Heading>
            <p>本服务为非营利之信息整理服务，可能因数据来源变动、LINE 平台政策、运维成本或其他因素，随时调整、暂停或终止服务，恕不另行个别通知。</p>
          </section>

          <section aria-labelledby="conduct-heading">
            <Heading as="h2" id="conduct-heading" anchorLabel={ANCHOR_LABEL}>
              用户行为
            </Heading>
            <p>请勿以本服务进行任何违反 LINE 使用条款、法律法规或公共秩序之行为。若发现滥用情形，本服务保留移除该用户／群组订阅资格之权利。</p>
          </section>

          <section aria-labelledby="amend-heading">
            <Heading as="h2" id="amend-heading" anchorLabel={ANCHOR_LABEL}>
              条款修改
            </Heading>
            <p>本条款可能不定期更新，更新后将公告于本页面，请留意最后更新日期。</p>
          </section>

          <section aria-labelledby="contact-heading">
            <Heading as="h2" id="contact-heading" anchorLabel={ANCHOR_LABEL}>
              联系方式
            </Heading>
            <p>
              如对本条款有疑问，请通过{' '}
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

      <Footer locale="zh-Hans" page="terms" showPolicyLinks={false} />
    </>
  )
}
