"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import CustomButton from "../CustomButton";

export default function ContactSection() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "discovery-call" });
      cal("ui", { theme: "dark", layout: "month_view" });
    })();
  }, []);

  return (
    <section className="  ">
      <div className="bg-white py-16 rounded-t-4xl">
        <div className="max-w-5xl px-4 mx-auto ">
          <h2 className="title-text font-semibold mb-10 text-center">
            Contact Us
          </h2>

          {/* LEFT FORM */}
          <div className="bg-white border border-gray-200 rounded-xl mb-10 p-4 md:p-6 lg:p-10 shadow-sm">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 ">
              {/* NAME */}
              <div>
                <label className="text-sm font-medium">Name *</label>
                <input
                  required
                  className="
mt-2 w-full
border border-gray-200
bg-gray-50
rounded-lg
px-4 py-3
focus:outline-none
focus:ring-2
focus:ring-primary/30
focus:border-primary
transition
"
                  placeholder="John Smith"
                />
              </div>

              {/* COMPANY */}
              <div>
                <label className="text-sm font-medium">Company Name *</label>
                <input
                  required
                  className="
mt-2 w-full
border border-gray-200
bg-gray-50
rounded-lg
px-4 py-3
focus:outline-none
focus:ring-2
focus:ring-primary/30
focus:border-primary
transition
"
                  placeholder="Company Inc."
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="text-sm font-medium">Email *</label>
                <input
                  required
                  type="email"
                  className="
mt-2 w-full
border border-gray-200
bg-gray-50
rounded-lg
px-4 py-3
focus:outline-none
focus:ring-2
focus:ring-primary/30
focus:border-primary
transition
"
                  placeholder="you@company.com"
                />
              </div>

              {/* PHONE */}
              <div>
                <label className="text-sm font-medium">Phone *</label>
                <input
                  required
                  className="
mt-2 w-full
border border-gray-200
bg-gray-50
rounded-lg
px-4 py-3
focus:outline-none
focus:ring-2
focus:ring-primary/30
focus:border-primary
transition
"
                  placeholder="+91 12345 67890"
                />
              </div>

              {/* WEBSITE */}
              <div>
                <label className="text-sm font-medium">
                  Website (Optional)
                </label>
                <input
                  className="
mt-2 w-full
border border-gray-200
bg-gray-50
rounded-lg
px-4 py-3
focus:outline-none
focus:ring-2
focus:ring-primary/30
focus:border-primary
transition
"
                  placeholder="https://yourcompany.com"
                />
              </div>

              {/* REVENUE */}
              <div>
                <label className="text-sm font-medium">Revenue *</label>
                <select
                  required
                  className="
mt-2 w-full
border border-gray-200
bg-gray-50
rounded-lg
px-4 py-3
focus:outline-none
focus:ring-2
focus:ring-primary/30
focus:border-primary
transition
"
                >
                  <option value="">Select Revenue</option>
                  <option>Less than $50,000 / year</option>
                  <option>$50,000 - $100,000 / year</option>
                  <option>$100,000 - $250,000 / year</option>
                  <option>$250,000+</option>
                </select>
              </div>

              {/* INSTAGRAM / LINKEDIN */}
              <div className="md:col-span-2">
                <label className="text-sm font-medium">
                  Instagram or LinkedIn Profile URL *
                </label>
                <input
                  required
                  className="
mt-2 w-full
border border-gray-200
bg-gray-50
rounded-lg
px-4 py-3
focus:outline-none
focus:ring-2
focus:ring-primary/30
focus:border-primary
transition
"
                  placeholder="https://linkedin.com/in/..."
                />
              </div>

              {/* MESSAGE */}
              <div className="md:col-span-2">
                <label className="text-sm font-medium">Your Message</label>
                <textarea
                  rows="4"
                  className="
mt-2 w-full
border border-gray-200
bg-gray-50
rounded-lg
px-4 py-3
focus:outline-none
focus:ring-2
focus:ring-primary/30
focus:border-primary
transition
"
                />
              </div>

              <div className="md:col-span-2">
                <CustomButton
                  text="Send Message"
                  bg="var(--color-primary)"
                  border="var(--color-primary)"
                  shadow="#064c3b"
                  type="submit"
                  className="w-full mt-4"
                />
              </div>
            </form>
          </div>

          <div id="book-a-call" className="">
            {/* Cal.com embed on desktop */}
            <div className=" overflow-hidden rounded-xl   h-full">
              <Cal
                namespace="discovery-call"
                calLink="aeontrix-ai/discovery-call"
                style={{ width: "100%", height: "100%", overflow: "auto" }}
                config={{ layout: "month_view" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
