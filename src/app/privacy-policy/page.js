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
    <section className="relative py-24 pt-36 bg-white">
      <div className="mx-auto relative max-w-348 px-4">
        {/* ---------- HEADER ---------- */}
        <header className="mb-10">
          <h1 className="display-text mb-4">Privacy Policy</h1>

          <p className="subtitle-text text-black/90 mb-4">
            We are committed to protecting your personal information and your
            right to privacy.
          </p>
          <p className="subtitle-text text-primary ">
            Last updated on 15th January, 2026
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
              <Intro />

              <Section
                id="info-collect"
                title="1. WHAT INFORMATION DO WE COLLECT?"
              >
                <SubSection title="Personal information you disclose to us">
                  <p className="body-text font-semibold">
                    In Short: We collect personal information that you provide
                    to us.
                  </p>

                  <p className="body-text">
                    We collect personal information that you voluntarily provide
                    to us when you express an interest in obtaining information
                    about us or our products and Services, when you participate
                    in activities on the Website (such as posting messages,
                    entering competitions, contests, or giveaways), or otherwise
                    when you contact us.
                  </p>

                  <p className="body-text">
                    The personal information that we collect depends on the
                    context of your interactions with us, the choices you make,
                    and the products and features you use. The personal
                    information we collect may include:
                  </p>

                  <p className="body-text">
                    <span className="font-semibold">
                      Personal Information Provided by You:
                    </span>
                    <br />
                    Names, phone numbers, email addresses, mailing addresses,
                    job titles, contact preferences, billing addresses,
                    debit/credit card numbers, and other similar information.
                  </p>

                  <p className="body-text">
                    <span className="font-semibold">Payment Data:</span>
                    <br />
                    We may collect data necessary to process your payment, such
                    as your payment instrument number and security code.
                  </p>

                  <p className="body-text">
                    All personal information you provide must be true, complete,
                    and accurate, and you must notify us of any changes.
                  </p>
                </SubSection>

                <SubSection title="Information automatically collected">
                  <p className="body-text font-semibold">
                    In Short: Some information such as IP address and device
                    details is collected automatically.
                  </p>

                  <p className="body-text">
                    We automatically collect certain information when you visit,
                    use, or navigate the Website. This includes device and usage
                    information such as IP address, browser type, operating
                    system, referring URLs, location, and usage data.
                  </p>

                  <p className="body-text">
                    This information is needed to maintain the security and
                    operation of the Website and for analytics.
                  </p>

                  <ul className="list-disc pl-5 body-text">
                    <li>Log and Usage Data</li>
                    <li>Device Data</li>
                    <li>Location Data</li>
                  </ul>

                  <p className="body-text">
                    You can disable location collection through your device
                    settings, though this may limit some Services.
                  </p>
                </SubSection>

                <SubSection title="Information collected from other sources">
                  <p className="body-text font-semibold">
                    In Short: We may receive limited data from public databases
                    and marketing partners.
                  </p>

                  <p className="body-text">
                    This may include contact details, social profiles, IP
                    addresses, and intent data for marketing and event
                    promotion.
                  </p>
                </SubSection>
              </Section>

              <Section id="use-info" title="2. HOW DO WE USE YOUR INFORMATION?">
                <p className="body-text font-semibold">
                  In Short: We use your information to operate, secure, improve,
                  and market our Services.
                </p>

                <p className="body-text">We use your information to:</p>

                <ul className="list-disc pl-5 space-y-2 body-text">
                  <li>Create and manage accounts</li>
                  <li>Post testimonials (with consent)</li>
                  <li>Request feedback</li>
                  <li>Enable user communication</li>
                  <li>Provide services and support</li>
                  <li>Send administrative and marketing communications</li>
                  <li>Deliver targeted advertising</li>
                  <li>Process payments and orders</li>
                  <li>Run contests and promotions</li>
                  <li>Analyze performance and improve Services</li>
                  <li>Comply with legal obligations</li>
                </ul>

                <p className="body-text">
                  We do not use identifiable personal information for analytics
                  without your consent.
                </p>
              </Section>

              <Section
                id="sharing"
                title="3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?"
              >
                <p className="body-text font-semibold">
                  In Short: We only share information when legally allowed or
                  required.
                </p>

                <p className="body-text">We may share data based on:</p>

                <ul className="list-disc pl-5 space-y-2 body-text">
                  <li>Consent</li>
                  <li>Legitimate business interests</li>
                  <li>Contractual necessity</li>
                  <li>Legal obligations</li>
                  <li>Protection of rights and safety</li>
                </ul>

                <p className="body-text">This may include:</p>

                <ul className="list-disc pl-5 space-y-2 body-text">
                  <li>Business transfers</li>
                  <li>Affiliates</li>
                  <li>Business partners</li>
                  <li>Public interactions by users</li>
                </ul>
              </Section>

              <Section
                id="cookies"
                title="4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?"
              >
                <p className="body-text font-semibold">In Short: Yes.</p>

                <p className="body-text">
                  We use cookies, web beacons, and pixels. Details are provided
                  in our Cookie Policy.
                </p>
              </Section>

              <Section
                id="retention"
                title="5. HOW LONG DO WE KEEP YOUR INFORMATION?"
              >
                <p className="body-text font-semibold">
                  In Short: No longer than necessary.
                </p>

                <p className="body-text">
                  We keep data only as long as required for business or legal
                  purposes, and never longer than one year unless legally
                  required.
                </p>
              </Section>

              <Section
                id="security"
                title="6. HOW DO WE KEEP YOUR INFORMATION SAFE?"
              >
                <p className="body-text font-semibold">
                  In Short: We use technical and organizational safeguards.{" "}
                </p>

                <p className="body-text">
                  No system is perfectly secure, and data transmission is at
                  your own risk.
                </p>
              </Section>

              <Section id="rights" title="7. WHAT ARE YOUR PRIVACY RIGHTS?">
                <p className="body-text font-semibold">
                  In Short: You have legal rights in many regions.{" "}
                </p>

                <p className="body-text">You may request:</p>

                <ul className="list-disc pl-5 space-y-2 body-text">
                  <li>Access</li>
                  <li>Correction</li>
                  <li>Deletion</li>
                  <li>Restriction</li>
                  <li>Data portability</li>
                  <li>Objection</li>
                </ul>

                <p className="body-text">
                  Requests should be sent to{" "}
                  <a
                    href="mailto:contact@aeontrix.com"
                    className="font-semibold"
                  >
                    contact@aeontrix.com
                  </a>
                </p>
              </Section>

              <Section
                id="do-not-track"
                title="8. CONTROLS FOR DO-NOT-TRACK FEATURES"
              >
                <p className="body-text">
                  We do not currently respond to Do-Not-Track browser
                  signals.{" "}
                </p>
              </Section>

              <Section
                id="california"
                title="9. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?"
              >
                <p className="body-text">
                  Yes. California residents may request:
                </p>

                <ul className="list-disc pl-5 space-y-2 body-text">
                  <li>What data is collected</li>
                  <li>How it is used</li>
                  <li>Whether it is sold</li>
                  <li>Deletion</li>
                </ul>

                <p className="body-text">
                  Requests should be sent to{" "}
                  <a
                    href="mailto:contact@aeontrix.com"
                    className="font-semibold"
                  >
                    contact@aeontrix.com
                  </a>
                </p>

                <p className="body-text">We do not sell personal data.</p>
              </Section>

              <Section
                id="updates"
                title="10. DO WE MAKE UPDATES TO THIS POLICY?"
              >
                <p className="body-text">
                  Yes. Updates will be posted and take effect immediately.
                </p>
              </Section>

              <Section id="contact" title="11. CONTACT INFORMATION">
                <p className="body-text">
                  You may contact us at{" "}
                  <a
                    href="mailto:contact@aeontrix.com"
                    className="font-semibold"
                  >
                    contact@aeontrix.com
                  </a>
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
  { id: "info-collect", label: "1. WHAT INFORMATION DO WE COLLECT?" },
  { id: "use-info", label: "2. HOW DO WE USE YOUR INFORMATION?" },
  { id: "sharing", label: "3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?" },
  {
    id: "cookies",
    label: "4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?",
  },
  { id: "retention", label: "5. HOW LONG DO WE KEEP YOUR INFORMATION?" },
  { id: "security", label: "6. HOW DO WE KEEP YOUR INFORMATION SAFE?" },
  { id: "rights", label: "7. WHAT ARE YOUR PRIVACY RIGHTS?" },
  { id: "do-not-track", label: "8. CONTROLS FOR DO-NOT-TRACK FEATURES" },
  {
    id: "california",
    label: "9. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?",
  },
  { id: "updates", label: "10. DO WE MAKE UPDATES TO THIS POLICY?" },
  { id: "contact", label: "11. HOW CAN YOU CONTACT US ABOUT THIS POLICY?" },
  // {
  //   id: "review-data",
  //   label:
  //     "12. HOW CAN YOU REVIEW, UPDATE OR DELETE THE DATA WE COLLECT FROM YOU?",
  // },
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
