import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Aeontrix | Privacy Policy ",
  description:
    "Learn how Aeontrix collects, uses, and protects your personal information across our website, services, and communications.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Aeontrix | Privacy Policy ",
    description:
      "Aeontrix is committed to protecting your privacy. Read how we collect, use, and safeguard your data.",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <section data-nav-theme="light" className="relative py-24 pt-36 bg-white">
      <div className="mx-auto relative max-w-348 px-4 lg:px-6">
        {/* ---------- HEADER ---------- */}
        <header className="mb-10">
          <h1 className="display-text mb-4">Privacy Policy</h1>

          {/* <p className="subtitle-text text-black/90 mb-4">
            We are committed to protecting your personal information and your
            right to privacy.
          </p> */}
          <p className="subtitle-text text-primary ">
            Last updated on 6th April, 2026
          </p>
        </header>

        <div className="flex relative gap-6 flex-col lg:flex-row-reverse">
          {/* ---------- TOC ---------- */}

          <nav
            className="hidden lg:block lg:sticky h-fit top-24 right-0 lg:w-1/4 rounded-2xl bg-linear-to-b from-[#444444] to-background-dark  text-white p-4 
                                        shadow-[inset_0_1px_0.25px_rgba(0,0,0,0.6),inset_0_2px_1px_rgba(0,0,0,0.4)]"
          >
            <p className="xs-text font-medium text-white/80 text-center mb-2">
              TABLE OF CONTENTS
            </p>

            <div className="space-y-2 max-h-[73vh] overflow-y-scroll custom-scrollbar pr-1">
              {TOC.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="group flex items-center gap-2 justify-between rounded-lg bg-white/5 border xs-text border-background-dark/40 py-2 px-3 transition-all duration-300 hover:border-background-dark"
                >
                  <span className=" group-hover:text-primary  transition-all duration-300">
                    {item.label}
                  </span>
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-all duration-300"
                  />
                </a>
              ))}
            </div>
          </nav>

          {/* ---------- CONTENT CARD ---------- */}
          <div className="relative rounded-3xl lg:w-3/4 bg-background border-l-4 border-primary shadow-sm overflow-hidden">
            {/* Accent strip */}
            {/* <div className="absolute left-0 top-0 h-full w-1 bg-primary/60" /> */}

            <div className="p-8 md:p-12 space-y-14">
              {/* <Intro /> */}

              <Section id="introduction" title="1. INTRODUCTION">
                <p className="body-text">
                  Aeontrix AI ("we," "us," or "our") operates the website
                  aeontrix.ai and the domain aeontrix.com, which redirects to
                  aeontrix.ai. All email communications from Aeontrix AI are
                  sent from @aeontrix.com addresses. This Privacy Policy applies
                  to both domains and all associated communications.
                </p>

                <p className="body-text">
                  We are committed to protecting the privacy of anyone who
                  visits our website or interacts with our services. This
                  Privacy Policy explains what information we collect, how we
                  use it, how it is shared, and your rights regarding your data.
                </p>

                <p className="body-text">
                  By using this Site or submitting any form, you agree to the
                  practices described in this policy.
                </p>
              </Section>

              <Section
                id="information-we-collect"
                title="2. INFORMATION WE COLLECT"
              >
                <p className="body-text font-semibold">
                  Information you provide directly:
                </p>

                <ul className="list-disc pl-5 space-y-2 body-text">
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>
                    Any additional information you voluntarily provide through
                    contact forms or inquiry submissions
                  </li>
                </ul>

                <p className="body-text font-semibold">
                  Information collected automatically:
                </p>

                <p className="body-text">
                  When you visit our Site, certain data is collected
                  automatically through tracking technologies, including:
                </p>

                <ul className="list-disc pl-5 space-y-2 body-text">
                  <li>IP address and approximate location</li>
                  <li>Browser type and version</li>
                  <li>Device type and operating system</li>
                  <li>Pages visited, time on site, and referring URL</li>
                  <li>
                    Interaction data (clicks, scroll depth, form interactions)
                  </li>
                </ul>
              </Section>

              <Section
                id="tracking-technologies"
                title="3. TRACKING TECHNOLOGIES WE USE"
              >
                <p className="body-text ">
                  <span className="font-semibold">Meta Pixel:</span> Our Site
                  uses the Meta Pixel (formerly Facebook Pixel), a tracking tool
                  provided by Meta Platforms, Inc. The Meta Pixel collects data
                  about your activity on this Site and sends it to Meta. This
                  data is used to measure the effectiveness of our advertising,
                  optimize ad delivery, and build custom audiences on the Meta
                  platform. Meta may use this data in accordance with its own
                  Data Policy. You can learn more at{" "}
                  <a
                    href="https://www.facebook.com/privacy/explanation"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    facebook.com/privacy/explanation
                  </a>
                  .
                </p>

                <p className="body-text">
                  <span className="font-semibold">
                    Google Tags (Google Tag Manager / Google Analytics):
                  </span>{" "}
                  We use Google Tag Manager and associated Google tags, which
                  may include Google Analytics and Google Ads conversion
                  tracking. These tools collect anonymized data about how
                  visitors interact with our Site, which we use to understand
                  traffic patterns and improve our services. Google may process
                  this data in accordance with its Privacy Policy at{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    policies.google.com/privacy
                  </a>
                  .
                </p>

                <p className="body-text">
                  You can opt out of Google Analytics tracking by using the{" "}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Analytics Opt-Out Browser Add-On
                  </a>
                  .
                </p>

                <p className="body-text">
                  <span className="font-semibold">Cookies:</span> Both Meta and
                  Google tools use cookies — small text files stored in your
                  browser — to track sessions and user behaviour across visits.
                  You can control cookies through your browser settings. Note
                  that disabling cookies may affect Site functionality.
                </p>
              </Section>

              <Section
                id="how-we-use-info"
                title="4. HOW WE USE YOUR INFORMATION?"
              >
                <p className="body-text font-semibold">
                  We use the information we collect to:
                </p>

                <ul className="list-disc pl-5 space-y-2 body-text">
                  <li>
                    Respond to your inquiries and communicate about our services
                  </li>
                  <li>
                    Send you relevant information via email, SMS, or phone based
                    on your submission and consent
                  </li>
                  <li>Improve the performance and content of our Site</li>
                  <li>Measure the effectiveness of our marketing campaigns</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </Section>

              <Section
                id="automated-communications"
                title="5. AUTOMATED COMMUNICATIONS AND SMS COMPLIANCE"
              >
                <p className="body-text font-semibold">
                  When you submit a form on our Site or any system operated by
                  Aeontrix AI and provide your consent at the time of
                  submission, you may receive:
                </p>

                <ul className="list-disc pl-5 space-y-2 body-text">
                  <li>
                    Automated emails related to your inquiry or onboarding
                  </li>
                  <li>SMS messages with relevant information or follow-up</li>
                  <li>Phone calls from our team or automated systems</li>
                </ul>

                <p className="body-text">
                  <span className="font-semibold">
                    {" "}
                    SMS — A2P Messaging Disclosure:
                  </span>{" "}
                  Our SMS communications are sent via registered A2P
                  (Application-to-Person) messaging systems in compliance with
                  carrier requirements and the TCPA (Telephone Consumer
                  Protection Act). By opting in, you consent to receive
                  automated text messages from Aeontrix AI.
                </p>

                <ul className="list-disc pl-5 space-y-2 body-text">
                  <li>
                    You may opt out at any time by replying STOP to any SMS
                  </li>
                  <li>Reply HELP for assistance</li>
                  <li>Message and data rates may apply</li>
                  <li>Message frequency varies</li>
                  <li>
                    We do not share your phone number with third parties for SMS
                    marketing purposes
                  </li>
                </ul>
              </Section>

              <Section id="data-sharing" title="6. DATA SHARING">
                <p className="body-text ">
                  <span className="font-semibold">
                    We do not sell your personal data.
                  </span>{" "}
                  We do not trade, rent, or sell your name, email, phone number,
                  or any personally identifiable information to third parties
                  for their own marketing purposes.
                </p>

                <p className="body-text">
                  We may share your information only in the following limited
                  circumstances:
                </p>

                <ul className="list-disc pl-5 space-y-2 body-text">
                  <li>
                    <span className="font-semibold">Service providers:</span>{" "}
                    Third-party platforms we use to operate our business (such
                    as CRM, billing, email service providers). These providers
                    are bound by their own data protection policies and process
                    data only as necessary to provide their services.
                  </li>
                  <li>
                    <span className="font-semibold">Meta and Google:</span> As
                    described above, these platforms receive behavioural and
                    event data from our Site through their respective tracking
                    tools. This is governed by their own privacy policies.
                  </li>
                  <li>
                    <span className="font-semibold">Legal requirements:</span>{" "}
                    We may disclose information if required to do so by law or
                    in response to valid legal process.
                  </li>
                </ul>
              </Section>

              <Section id="data-retention" title="7. DATA RETENTION">
                <p className="body-text ">
                  We retain your personal information for as long as necessary
                  to fulfill the purposes outlined in this policy, maintain
                  business records, and comply with legal obligations. If you
                  wish to have your data deleted, please contact us and we will
                  honour your request in accordance with applicable law.
                </p>
              </Section>

              <Section id="your-rights" title="8. YOUR RIGHTS">
                <p className="body-text">
                  Depending on your location, you may have the right to:
                </p>

                <ul className="list-disc pl-5 space-y-2 body-text">
                  <li>Access the personal data we hold about you</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Withdraw consent to communications at any time</li>
                  <li>Object to certain processing activities</li>
                </ul>

                <p className="body-text">
                  To exercise any of these rights, contact us at the details
                  below.
                </p>
              </Section>

              <Section
                id="regional-privacy-rights"
                title="9. REGIONAL PRIVACY RIGHTS"
              >
                <p className="body-text">
                  <span className="font-semibold">
                    {" "}
                    California Residents (CCPA):
                  </span>{" "}
                  If you are a California resident, you have the right to: know
                  what personal information we collect and how it is used;
                  request deletion of your personal information; opt out of the
                  sale of your personal information (note: we do not sell
                  personal data); and non-discriminatory treatment for
                  exercising your rights. To make a request, contact us at
                  contact@aeontrix.com and we will respond within 45 days.
                </p>

                <p className="body-text">
                  <span className="font-semibold">
                    {" "}
                    European Economic Area, UK, and Switzerland (GDPR)
                  </span>{" "}
                  If you are located in the EEA, UK, or Switzerland, your
                  personal data is processed under the General Data Protection
                  Regulation (GDPR) or applicable equivalent. Our lawful basis
                  for processing your data is your consent (provided at the time
                  of form submission) and our legitimate interest in responding
                  to business inquiries. You have the right to access, correct,
                  delete, or restrict processing of your data, and to lodge a
                  complaint with your local data protection authority. To
                  exercise your rights, contact us at contact@aeontrix.com.
                </p>
              </Section>

              <Section id="data-security" title="10. DATA SECURITY">
                <p className="body-text">
                  We implement reasonable technical and organisational measures
                  to protect your personal data from unauthorised access,
                  disclosure, or misuse. However, no method of transmission over
                  the internet is completely secure, and we cannot guarantee
                  absolute security.
                </p>
              </Section>

              <Section id="children's-privacy" title="11. CHILDREN'S PRIVACY">
                <p className="body-text">
                  Our Site and services are not directed at individuals under
                  the age of 16. We do not knowingly collect personal data from
                  minors. If you believe a minor has submitted data through our
                  Site, please contact us and we will remove it promptly.
                </p>
              </Section>
              <Section
                id="changes-to-this-policy"
                title="12. CHANGES TO THIS POLICY"
              >
                <p className="body-text">
                  We may update this Privacy Policy from time to time. Any
                  changes will be posted to this page with an updated effective
                  date. We encourage you to review this page periodically.
                </p>
              </Section>
              <Section id="contact" title="13. CONTACT">
                <p className="body-text">
                  If you have any questions, concerns, or requests regarding
                  this Privacy Policy, please contact us at{" "}
                  <a
                    href="mailto:contact@aeontrix.com"
                    className="font-semibold"
                  >
                    contact@aeontrix.com
                  </a>
                  . Email communications are sent from @aeontrix.com addresses.
                </p>
              </Section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- TOC DATA ---------- */

const TOC = [
  { id: "introduction", label: "1. INTRODUCTION" },
  { id: "information-we-collect", label: "2. INFORMATION WE COLLECT" },
  { id: "tracking-technologies", label: "3. TRACKING TECHNOLOGIES WE USE" },
  {
    id: "how-we-use-info",
    label: "4. HOW WE USE YOUR INFORMATION?",
  },
  {
    id: "automated-communications",
    label: "5. AUTOMATED COMMUNICATIONS AND SMS COMPLIANCE",
  },
  { id: "data-sharing", label: "6. DATA SHARING" },
  { id: "data-retention", label: "7. DATA RETENTION" },
  { id: "your-rights", label: "8. YOUR RIGHTS" },
  {
    id: "regional-privacy-rights",
    label: "9. REGIONAL PRIVACY RIGHTS",
  },
  { id: "data-security", label: "10. DATA SECURITY" },
  { id: "children's-privacy", label: "11. CHILDREN'S PRIVACY" },
  { id: "changes-to-this-policy", label: "12. CHANGES TO THIS POLICY" },
  { id: "contact", label: "12. CONTACT" },
];

/* ---------- COMPONENTS ---------- */

function Intro() {
  return (
    <section className="space-y-4">
      <p className="body-text">
        This policy explains how we handle your data when you use our services,
        download our lead magnets, or subscribe to our newsletter. <br />
        By interacting with{" "}
        <span className="font-semibold">
          {" "}
          Aeontrix (“Aeontrix,” “we,” “us,” or “our”){" "}
        </span>{" "}
        (via services, website forms, or content downloads), you consent to the
        data practices outlined here.
      </p>
      <p className="body-text">
        If you have any questions or concerns about this privacy policy or our
        practices with regard to your personal information, please contact us at{" "}
        <a href="mailto:contact@aeontrix.com" className="font-semibold">
          {" "}
          contact@aeontrix.com{" "}
        </a>
      </p>
      <p className="body-text">
        This privacy policy describes how we might use your information. Engage
        with us in other related ways — including any sales, marketing, or
        events.
      </p>
      <p className="body-text">
        In this privacy policy, if we refer to: <br />
        <span className="font-semibold">“Website,”</span> we are referring to
        any website of ours that references or links to this policy <br />
        <span className="font-semibold">“Services,”</span> we are referring to
        our Website and other related services, including any sales, marketing,
        or events.{" "}
      </p>
      <p className="body-text">
        The purpose of this privacy policy is to explain to you in the clearest
        way possible what information we collect, how we use it, and what rights
        you have in relation to it. If there are any terms in this privacy
        policy that you do not agree with, please discontinue use of our
        Services immediately.{" "}
      </p>
      <p className="body-text">
        Please read this privacy policy carefully, as it will help you
        understand what we do with the information that we collect.{" "}
      </p>
    </section>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-32 space-y-6">
      <h2 className="title-text">{title}</h2>
      {children}
    </section>
  );
}

function SubSection({ title, children }) {
  return (
    <div className="space-y-2">
      <h3 className="h3-text">{title}</h3>
      {children}
    </div>
  );
}
