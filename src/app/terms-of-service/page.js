import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Aeontrix | Terms of Service",
  description:
    "Review the Terms of Service governing access to and use of the Aeontrix website and services.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Aeontrix | Terms of Service",
    description:
      "These Terms of Service govern your access to and use of the Aeontrix website.",
    type: "website",
  },
};

export default function TermsOfServicePage() {
  return (
    <section data-nav-theme="light" className="relative py-24 pt-36 bg-white">
      <div className="mx-auto relative max-w-348 px-4 lg:px-6">
        {/* ---------- HEADER ---------- */}
        <header className="mb-10">
          <h1 className="display-text mb-4">Terms of Service</h1>
          {/* <p className="subtitle-text text-black/90 mb-4">
            You agree that by accessing the Site, you have read, understood, and
            agreed to be bound by all of these Terms of Service.
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

          {/* ---------- CONTENT ---------- */}
          <div className="relative rounded-3xl lg:w-3/4 bg-background border-l-4 border-primary shadow-sm overflow-hidden">
            <div className="p-8 md:p-12 space-y-14">
              <Section id="overview" title="1. OVERVIEW">
                <p className="body-text">
                  These Terms of Service ("Terms") govern your use of the
                  website located at aeontrix.ai ("Site") and any services
                  provided by Aeontrix AI ("we," "us," or "our"). By accessing
                  this Site or engaging with our services, you agree to be bound
                  by these Terms.
                </p>

                <p className="body-text">
                  We provide automation, marketing, and software services —
                  including but not limited to marketing infrastructure setup,
                  paid advertising management, CRM and automation system builds,
                  and custom software solutions. Our services are typically
                  delivered as integrated systems combining multiple of these
                  disciplines.
                </p>
              </Section>

              <Section id="services" title="2. SERVICES">
                <p className="body-text">
                  Aeontrix AI offers professional services on a project or
                  retainer basis. The specific scope, deliverables, timeline,
                  and pricing for any engagement are defined separately through
                  proposals, contracts, or statements of work agreed upon
                  between us and the client prior to commencement of work.
                </p>
                <p className="body-text">
                  Nothing on this website constitutes a binding service
                  agreement. These Terms govern your use of the Site itself and
                  general interactions with Aeontrix AI, not the specific terms
                  of any client engagement.
                </p>
              </Section>

              <Section id="intellectual" title="3. INTELLECTUAL PROPERTY">
                <p className="body-text">
                  All content on this Site — including text, graphics, logos,
                  design elements, and code — is the property of Aeontrix AI and
                  is protected by applicable intellectual property laws. You may
                  not reproduce, distribute, or use any content from this Site
                  without our prior written permission.
                </p>

                <p className="body-text">
                  Work products, systems, and deliverables created for clients
                  are subject to the intellectual property terms specified in
                  the individual service agreement.
                </p>
              </Section>

              <Section
                id="third-party"
                title="4. THIRD-PARTY TOOLS AND PLATFORMS"
              >
                <p className="body-text">
                  Our services involve the use of third-party platforms
                  including but not limited to GoHighLevel, Meta, Google,
                  Stripe, and others. Your use of those platforms is subject to
                  their respective terms of service and privacy policies.
                  Aeontrix AI is not liable for the actions, policies, or
                  failures of any third-party platform.
                </p>
              </Section>

              <Section id="communications" title="5. COMMUNICATIONS">
                <p className="body-text">
                  By submitting a contact form, inquiry, or opt-in form on this
                  Site or through any system we operate, you consent to
                  receiving communications from Aeontrix AI. These may include
                  emails, SMS messages, and phone calls related to your inquiry,
                  our services, and relevant updates.
                </p>
                <p className="body-text">
                  <span className="font-semibold"> SMS Messaging: </span> By
                  providing your phone number and submitting a form, you
                  expressly consent to receive automated SMS text messages from
                  Aeontrix AI. Message types may include service inquiries,
                  follow-ups, onboarding information, and relevant updates.
                </p>

                <ul className="list-disc pl-5 space-y-2 body-text">
                  <li>
                    Message frequency varies based on your inquiry and
                    engagement
                  </li>
                  <li>Message and data rates may apply</li>
                  <li>
                    Reply STOP at any time to unsubscribe from SMS messages. You
                    will receive a one-time confirmation and no further messages
                    will be sent.
                  </li>
                  <li>
                    Reply HELP for assistance or contact us directly at
                    contact@aeontrix.com
                  </li>
                  <li>
                    Your phone number will not be shared with third parties for
                    their own marketing purposes
                  </li>
                </ul>

                <p className="body-text">
                  Opting out of SMS does not affect your ability to receive
                  services from Aeontrix AI. For email communications, use the
                  unsubscribe link in any email we send.
                </p>
              </Section>

              <Section id="disclaimer" title="6. DISCLAIMER OF WARRANTIES">
                <p className="body-text">
                  This Site and all information on it are provided "as is"
                  without warranties of any kind, express or implied. We do not
                  warrant that the Site will be uninterrupted, error-free, or
                  free of viruses or harmful components. We make no guarantees
                  regarding specific results from our marketing or automation
                  services, as outcomes depend on a range of factors outside our
                  control.
                </p>
              </Section>

              <Section id="limitation" title="7. LIMITATION OF LIABILITY">
                <p className="body-text">
                  To the fullest extent permitted by law, Aeontrix AI shall not
                  be liable for any indirect, incidental, special, or
                  consequential damages arising from your use of this Site or
                  our services. Our total liability in any matter arising from
                  or related to these Terms shall not exceed the amount paid by
                  you to us in the three months preceding the claim.
                </p>
              </Section>

              <Section id="indemnification" title="8. INDEMNIFICATION">
                <p className="body-text">
                  You agree to indemnify and hold harmless Aeontrix AI, its team
                  members, and affiliates from any claims, damages, or expenses
                  (including legal fees) arising from your misuse of this Site
                  or violation of these Terms.
                </p>
              </Section>

              <Section id="changes" title="9. CHANGES TO THESE TERMS">
                <p className="body-text">
                  We reserve the right to update these Terms at any time.
                  Changes will be posted to this page with an updated effective
                  date. Continued use of the Site after changes constitutes
                  acceptance of the revised Terms.
                </p>
              </Section>

              <Section id="governing-law" title="10. GOVERNING LAW">
                <p className="body-text">
                  These Terms are governed by the laws of the jurisdiction in
                  which Aeontrix AI operates, without regard to conflict of law
                  principles.
                </p>
              </Section>

              <Section id="contact" title="11. CONTACT US">
                <p className="body-text">
                  If you have questions about these Terms, please contact us at{" "}
                  <a
                    href="mailto:contact@aeontrix.com"
                    className="font-semibold hover:underline"
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

/* ---------- TOC ---------- */

const TOC = [
  { id: "overview", label: "1. OVERVIEW" },
  { id: "services", label: "2. SERVICES" },
  { id: "intellectual", label: "3. INTELLECTUAL PROPERTY" },
  { id: "third-party", label: "4. THIRD-PARTY TOOLS AND PLATFORMS" },
  { id: "communications", label: "5. COMMUNICATIONS" },
  { id: "disclaimer", label: "6. DISCLAIMER OF WARRANTIES" },
  { id: "limitation", label: "7. LIMITATION OF LIABILITY" },
  { id: "indemnification", label: "8. INDEMNIFICATION" },
  { id: "changes", label: "9. CHANGES TO THESE TERMS" },
  { id: "governing-law", label: "10. GOVERNING LAW" },
  { id: "contact", label: "11. CONTACT US" },
];

/* ---------- COMPONENTS ---------- */

function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-32 space-y-6">
      <h2 className="title-text">{title}</h2>
      {children}
    </section>
  );
}
