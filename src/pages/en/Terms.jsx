import Footer from '../../components/Footer.jsx'
import Heading from '../../components/Heading.jsx'
import { LINE_ADD_FRIEND_URL } from '../../constants.js'

const MOA_OPEN_DATA_URL = 'https://data.moa.gov.tw/index.aspx'
const ANCHOR_LABEL = 'Permalink to this section'

export default function Terms() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <main className="wrap doc" id="main-content">
        <article aria-labelledby="page-title">
          <Heading as="h1" id="page-title" anchorLabel={ANCHOR_LABEL}>
            Terms of Service
          </Heading>
          <p className="updated">Last updated: 2026-09-13</p>

          <p>
            Welcome to the AgriDataGo LINE official account (the “Service”). By adding it as a friend or to a
            group, you agree to the following terms.
          </p>

          <section aria-labelledby="service-heading">
            <Heading as="h2" id="service-heading" anchorLabel={ANCHOR_LABEL}>
              The service
            </Heading>
            <p>
              The Service delivers wholesale produce market price information through a LINE official account, via
              scheduled daily pushes and interactive queries. Users can set their own crop and delivery time. Data
              is sourced from public data published by Taiwan's{' '}
              <a href={MOA_OPEN_DATA_URL} target="_blank" rel="noopener">
                Ministry of Agriculture — Agricultural Data Open Platform
                <span className="sr-only">（opens in a new window）</span>
              </a>
              .
            </p>
          </section>

          <section aria-labelledby="disclaimer-heading">
            <Heading as="h2" id="disclaimer-heading" anchorLabel={ANCHOR_LABEL}>
              Disclaimer
            </Heading>
            <p>
              Price information pushed by the Service is automatically compiled from public government data, for
              reference only. <strong>We do not guarantee its timeliness, completeness, or accuracy.</strong> For
              actual transaction prices, defer to the official price-reporting site (
              <a href={MOA_OPEN_DATA_URL} target="_blank" rel="noopener">
                Ministry of Agriculture Agricultural Data Open Platform
                <span className="sr-only">（opens in a new window）</span>
              </a>
              /AMIS) or individual wholesale market announcements. The Service bears no legal liability for any
              decisions users make based on its information.
            </p>
            <p>
              The estimated retail price noted by the Service is a reference figure estimated by the third-party
              site twfood.cc through market research and its own algorithm.{' '}
              <strong>It is not an actual transaction price, and its accuracy is not guaranteed.</strong> Please do
              not use it as a basis for negotiating prices with vendors.
            </p>
          </section>

          <section aria-labelledby="changes-heading">
            <Heading as="h2" id="changes-heading" anchorLabel={ANCHOR_LABEL}>
              Changes and interruptions
            </Heading>
            <p>
              The Service is a non-commercial information aggregation service. It may be adjusted, suspended, or
              discontinued at any time due to changes in data sources, LINE platform policy, operating costs, or
              other factors, without individual notice.
            </p>
          </section>

          <section aria-labelledby="conduct-heading">
            <Heading as="h2" id="conduct-heading" anchorLabel={ANCHOR_LABEL}>
              User conduct
            </Heading>
            <p>
              Please do not use the Service in any way that violates LINE's own terms of service, applicable law,
              or public order. If misuse is found, the Service reserves the right to remove that user's or group's
              subscription.
            </p>
          </section>

          <section aria-labelledby="amend-heading">
            <Heading as="h2" id="amend-heading" anchorLabel={ANCHOR_LABEL}>
              Changes to these terms
            </Heading>
            <p>These terms may be updated from time to time. Updates will be posted on this page — please check the last-updated date.</p>
          </section>

          <section aria-labelledby="contact-heading">
            <Heading as="h2" id="contact-heading" anchorLabel={ANCHOR_LABEL}>
              Contact
            </Heading>
            <p>
              If you have questions about these terms, please message us through the{' '}
              <a href={LINE_ADD_FRIEND_URL} target="_blank" rel="noopener">
                AgriDataGo LINE official account<span className="sr-only">（opens LINE in a new window）</span>
              </a>
              .
            </p>
          </section>

          <a className="back-link" href="index.html">
            <span aria-hidden="true">←</span> Back to home
          </a>
        </article>
      </main>

      <Footer locale="en" page="terms" showPolicyLinks={false} />
    </>
  )
}
