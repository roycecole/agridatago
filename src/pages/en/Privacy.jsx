import Footer from '../../components/Footer.jsx'
import Heading from '../../components/Heading.jsx'
import { LINE_ADD_FRIEND_URL } from '../../constants.js'

const MOA_OPEN_DATA_URL = 'https://data.moa.gov.tw/index.aspx'
const ANCHOR_LABEL = 'Permalink to this section'

export default function Privacy() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <main className="wrap doc" id="main-content">
        <article aria-labelledby="page-title">
          <Heading as="h1" id="page-title" anchorLabel={ANCHOR_LABEL}>
            Privacy Policy
          </Heading>
          <p className="updated">Last updated: 2026-09-13</p>

          <p>This page explains how the AgriDataGo LINE official account (the “Service”) handles your data.</p>

          <section aria-labelledby="use-heading">
            <Heading as="h2" id="use-heading" anchorLabel={ANCHOR_LABEL}>
              How we use your data
            </Heading>
            <p>
              We obtain only the identifiers necessary through the LINE platform, used to determine who should
              receive the daily price push and to stop pushing to you once you unfriend the Service or remove it
              from a group. We don't use these identifiers for any other purpose, and we don't sell or provide them
              to any third party other than the price-data source, LINE, and our database host.
            </p>
          </section>

          <section aria-labelledby="retention-heading">
            <Heading as="h2" id="retention-heading" anchorLabel={ANCHOR_LABEL}>
              Data retention and deletion
            </Heading>
            <p>
              As long as you remain a friend or the Service stays in your group, your identifier is retained. When
              you unfriend the Service or remove it from a group, we mark your record as no longer receiving
              pushes. If you'd like your identifier permanently deleted from our database, please reach us using
              the contact method below.
            </p>
          </section>

          <section aria-labelledby="third-party-heading">
            <Heading as="h2" id="third-party-heading" anchorLabel={ANCHOR_LABEL}>
              Third-party services
            </Heading>
            <dl>
              <dt>LINE Messaging API</dt>
              <dd>Messages are delivered through the LINE platform, governed by LINE's own privacy policy.</dd>
              <dt>
                <a href={MOA_OPEN_DATA_URL} target="_blank" rel="noopener">
                  Taiwan Ministry of Agriculture — Agricultural Data Open Platform
                  <span className="sr-only">（opens in a new window）</span>
                </a>
              </dt>
              <dd>Source of price data — public government data that does not involve your personal information.</dd>
            </dl>
          </section>

          <section aria-labelledby="contact-heading">
            <Heading as="h2" id="contact-heading" anchorLabel={ANCHOR_LABEL}>
              Contact
            </Heading>
            <p>
              If you have questions about this policy, or would like your data deleted, please message us through
              the{' '}
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

      <Footer locale="en" page="privacy" showPolicyLinks={false} />
    </>
  )
}
