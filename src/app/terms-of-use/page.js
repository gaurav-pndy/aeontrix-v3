import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Aeontrix | Terms of Use",
  description:
    "Review the Terms of Use governing access to and use of the Aeontrix website and services.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Aeontrix | Terms of Use",
    description:
      "These Terms of Use govern your access to and use of the Aeontrix website.",
    type: "website",
  },
};

export default function TermsOfUsePage() {
  return (
    <section className="relative py-24 pt-36 bg-white">
      <div className="mx-auto relative max-w-348 px-4 lg:px-6">
        {/* ---------- HEADER ---------- */}
        <header className="mb-10">
          <h1 className="display-text mb-4">Terms of Use</h1>
          <p className="subtitle-text text-black/90 mb-4">
            You agree that by accessing the Site, you have read, understood, and
            agreed to be bound by all of these Terms of Use.
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

          {/* ---------- CONTENT ---------- */}
          <div className="relative rounded-3xl lg:w-3/4 bg-background border-l-4 border-primary shadow-sm overflow-hidden">
            <div className="p-8 md:p-12 space-y-14">
              <Section id="agreement" title="1. AGREEMENT TO TERMS">
                <p className="body-text">
                  These Terms of Use constitute a legally binding agreement made
                  between you, whether personally or on behalf of an entity
                  (“you”) and{" "}
                  <span className="font-semibold">
                    Aeontrix (“Aeontrix,” “we,” “us,” or “our”)
                  </span>
                  , concerning your access to and use of the{" "}
                  <a
                    href="http://www.aeontrix.com/"
                    target="_blank"
                    className="font-semibold"
                  >
                    {" "}
                    www.aeontrix.com
                  </a>{" "}
                  website as well as any other media form, media channel, mobile
                  website or mobile application related, linked, or otherwise
                  connected thereto (collectively, the “Site”).
                </p>

                <p className="body-text">
                  You agree that by accessing the Site, you have read,
                  understood, and agreed to be bound by all of these Terms of
                  Use.
                  <span className="font-semibold">
                    {" "}
                    IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU
                    ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST
                    DISCONTINUE USE IMMEDIATELY.
                  </span>
                </p>

                <p className="body-text">
                  Supplemental terms and conditions or documents that may be
                  posted on the Site from time to time are hereby expressly
                  incorporated herein by reference. We reserve the right, in our
                  sole discretion, to make changes or modifications to these
                  Terms of Use at any time. We will alert you about any changes
                  by updating the “Last updated” date of these Terms of Use, and
                  you waive any right to receive specific notice of each such
                  change. Your continued use of the Site after such changes
                  means you accept them.
                </p>

                <p className="body-text">
                  The Site is not intended for use in jurisdictions where such
                  use would violate local law. You are responsible for
                  compliance with local laws.
                </p>

                <p className="body-text">
                  The Site is not designed to comply with industry-specific
                  regulations such as HIPAA, FISMA, or GLBA. If those laws apply
                  to you, you may not use the Site.
                </p>

                <p className="body-text">
                  Minors must have parental permission to use the Site.{" "}
                </p>
              </Section>

              <Section
                id="intellectual-property"
                title="2. INTELLECTUAL PROPERTY RIGHTS"
              >
                <p className="body-text">
                  Unless otherwise indicated, the Site and all content,
                  features, and trademarks are the proprietary property of{" "}
                  <span className="font-semibold"> Aeontrix </span> or its
                  licensors and are protected by intellectual-property laws.
                </p>
                <p className="body-text">
                  You are granted a limited, non-commercial license to use the
                  Site for personal purposes only. All rights not expressly
                  granted are reserved.
                </p>
              </Section>

              <Section id="representations" title="3. USER REPRESENTATIONS">
                <p className="body-text">You represent that:</p>
                <ul className="list-decimal pl-5 space-y-2 body-text">
                  <li>You have legal capacity to agree to these Terms</li>
                  <li>You are not a minor or have parental consent</li>
                  <li>You will not use bots or automation</li>
                  <li>You will not use the Site unlawfully</li>
                  <li>You will comply with all applicable laws</li>
                </ul>
                <p className="body-text">
                  False or misleading information may result in termination.
                </p>
              </Section>

              <Section id="prohibited" title="4. PROHIBITED ACTIVITIES">
                <p className="body-text">
                  You agree not to engage in any activity including but not
                  limited to:
                </p>

                <ul className="list-disc pl-5 space-y-2 body-text">
                  <li>Data scraping</li>
                  <li>Fraud or impersonation</li>
                  <li>Circumventing security</li>
                  <li>Harassment</li>
                  <li>Uploading malware</li>
                  <li>Reverse engineering</li>
                  <li>Unauthorized commercial use</li>
                  <li>Spam or unsolicited messaging</li>
                  <li>Selling or transferring accounts</li>
                </ul>
                <p className="body-text">
                  Violations may result in termination.
                </p>
              </Section>

              <Section id="ugc" title="5. USER GENERATED CONTRIBUTIONS">
                <p className="body-text">
                  Any content you submit (“Contributions”) is treated as
                  non-confidential. You represent that you have the rights to
                  post it and that it is lawful.
                </p>
              </Section>

              <Section id="license" title="6. CONTRIBUTION LICENSE">
                <p className="body-text">
                  By submitting content, you grant{" "}
                  <span className="font-semibold"> Aeontrix </span> a perpetual,
                  worldwide, royalty-free license to use, modify, distribute,
                  and display your content for any purpose.
                </p>
                <p className="body-text">
                  You retain ownership, but you waive moral rights.
                </p>
              </Section>

              <Section id="reviews" title="7. GUIDELINES FOR REVIEWS">
                <p className="body-text">
                  Reviews must be honest, non-abusive, non-misleading, and
                  lawful. We may remove or reject any review at our discretion.
                </p>
              </Section>

              <Section id="submissions" title="8. SUBMISSIONS">
                <p className="body-text">
                  Any ideas, feedback, or suggestions you submit become our
                  property and may be used without compensation.
                </p>
              </Section>

              <Section id="third-party" title="9. THIRD-PARTY WEBSITES">
                <p className="body-text">
                  We are not responsible for third-party content or sites. You
                  access them at your own risk.
                </p>
              </Section>

              <Section id="management" title="10. SITE MANAGEMENT">
                <p className="body-text">
                  We may monitor, restrict, remove content, or suspend access at
                  any time to protect the Site.
                </p>
              </Section>

              <Section id="privacy" title="11. PRIVACY POLICY">
                <p className="body-text">
                  By using the Site, you agree to our Privacy Policy.{" "}
                </p>
              </Section>

              <Section id="copyright" title="12. COPYRIGHT INFRINGEMENTS">
                <p className="body-text">
                  If you believe content infringes your copyright, notify us at:{" "}
                  <a
                    href="mailto:contact@aeontrix.com"
                    className="font-semibold"
                  >
                    contact@aeontrix.com
                  </a>
                </p>
              </Section>

              <Section id="termination" title="13. TERM AND TERMINATION">
                <p className="body-text">
                  We may terminate or suspend your account at any time for any
                  reason.
                </p>
              </Section>

              <Section
                id="modifications"
                title="14. MODIFICATIONS AND INTERRUPTIONS"
              >
                <p className="body-text">
                  We may modify or discontinue the Site at any time without
                  liability.
                </p>
              </Section>

              <Section id="law" title="15. GOVERNING LAW">
                <p className="body-text">
                  These Terms are governed by the laws of{" "}
                  <span className="font-semibold">India. </span>{" "}
                </p>
              </Section>

              <Section id="disputes" title="16. DISPUTE RESOLUTION">
                <p className="body-text">Disputes are subject to:</p>
                <ul className="list-disc pl-5 space-y-2 body-text">
                  <li>Informal negotiation</li>
                  <li>Binding arbitration seated in Chennai, India</li>
                  <li>Indian law</li>
                  <li>No class actions</li>
                </ul>
                <p className="body-text">
                  Certain disputes such as IP or injunctive relief are excluded.
                </p>
              </Section>

              <Section id="corrections" title="17. CORRECTIONS">
                <p className="body-text">
                  We may correct or update Site information at any time.{" "}
                </p>
              </Section>

              <Section id="disclaimer" title="18. DISCLAIMER">
                <p className="body-text">
                  The Site is provided “as-is.” We make no warranties and accept
                  no liability for errors, outages, or third-party content.
                </p>
              </Section>

              <Section id="liability" title="19. LIMITATIONS OF LIABILITY">
                <p className="body-text">
                  Our liability is limited to the amount you paid us in the
                  prior six months, if any.
                </p>
              </Section>

              <Section id="indemnification" title="20. INDEMNIFICATION">
                <p className="body-text">
                  You agree to indemnify and hold{" "}
                  <span className="font-semibold"> Aeontrix </span> harmless for
                  claims arising from your use of the Site.
                </p>
              </Section>

              <Section id="userdata" title="21. USER DATA">
                <p className="body-text">
                  You are responsible for your data. We are not liable for data
                  loss.
                </p>
              </Section>

              <Section id="electronic" title="22. ELECTRONIC COMMUNICATIONS">
                <p className="body-text">
                  You consent to electronic notices and records.{" "}
                </p>
              </Section>

              <Section id="california" title="23. CALIFORNIA USERS">
                <p className="body-text">
                  California consumer complaints may be directed to the
                  appropriate state agency.
                </p>
              </Section>

              <Section id="misc" title="24. MISCELLANEOUS">
                <p className="body-text">
                  These Terms constitute the entire agreement. If any part is
                  invalid, the rest remains enforceable.
                </p>
              </Section>

              <Section id="contact" title="25. CONTACT US">
                <p className="body-text">
                  For any questions or complaints:{" "}
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

/* ---------- TOC ---------- */

const TOC = [
  { id: "agreement", label: "1. AGREEMENT TO TERMS" },
  { id: "intellectual-property", label: "2. INTELLECTUAL PROPERTY RIGHTS" },
  { id: "representations", label: "3. USER REPRESENTATIONS" },
  { id: "prohibited", label: "4. PROHIBITED ACTIVITIES" },
  { id: "ugc", label: "5. USER GENERATED CONTRIBUTIONS" },
  { id: "license", label: "6. CONTRIBUTION LICENSE" },
  { id: "reviews", label: "7. GUIDELINES FOR REVIEWS" },
  { id: "submissions", label: "8. SUBMISSIONS" },
  { id: "third-party", label: "9. THIRD-PARTY WEBSITES" },
  { id: "management", label: "10. SITE MANAGEMENT" },
  { id: "privacy", label: "11. PRIVACY POLICY" },
  { id: "copyright", label: "12. COPYRIGHT INFRINGEMENTS" },
  { id: "termination", label: "13. TERM AND TERMINATION" },
  { id: "modifications", label: "14. MODIFICATIONS AND INTERRUPTIONS" },
  { id: "law", label: "15. GOVERNING LAW" },
  { id: "disputes", label: "16. DISPUTE RESOLUTION" },
  { id: "corrections", label: "17. CORRECTIONS" },
  { id: "disclaimer", label: "18. DISCLAIMER" },
  { id: "liability", label: "19. LIMITATIONS OF LIABILITY" },
  { id: "indemnification", label: "20. INDEMNIFICATION" },
  { id: "userdata", label: "21. USER DATA" },
  { id: "electronic", label: "22. ELECTRONIC COMMUNICATIONS" },
  { id: "california", label: "23. CALIFORNIA USERS" },
  { id: "misc", label: "24. MISCELLANEOUS" },
  { id: "contact", label: "25. CONTACT US" },
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
