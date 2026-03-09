"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import CustomButton from "../CustomButton";

export default function ContactSection() {
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [websiteError, setWebsiteError] = useState("");

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "discovery-call" });
      cal("ui", { theme: "dark", layout: "month_view" });
    })();
  }, []);

  const validateWebsite = (value) => {
    if (!value) {
      setWebsiteError("");
      return;
    }

    try {
      new URL(value);
      setWebsiteError("");
    } catch {
      setWebsiteError("Please enter a valid URL");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (websiteError) return;

    if (!phone || isNaN(phone)) {
      alert("Please enter a valid phone number");
      return;
    }

    console.log("form submitted");
  };

  return (
    <section id="contact-us">
      <div className="bg-white py-16 rounded-t-4xl">
        <div className="max-w-5xl px-4 mx-auto">
          <h2 className="title-text font-semibold mb-10 text-center">
            Contact Us
          </h2>

          <div className="bg-white border border-gray-200 rounded-xl mb-10 p-4 md:p-6 lg:p-10 shadow-sm">
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
            >
              {/* NAME */}
              <div>
                <label className="text-sm font-medium">Name *</label>
                <input
                  required
                  className="mt-2 w-full border border-gray-200 bg-gray-50 rounded-lg px-4 py-3"
                  placeholder="John Smith"
                />
              </div>

              {/* COMPANY */}
              <div>
                <label className="text-sm font-medium">Company Name *</label>
                <input
                  required
                  className="mt-2 w-full border border-gray-200 bg-gray-50 rounded-lg px-4 py-3"
                  placeholder="Company Inc."
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="text-sm font-medium">Email *</label>
                <input
                  required
                  type="email"
                  className="mt-2 w-full border border-gray-200 bg-gray-50 rounded-lg px-4 py-3"
                  placeholder="you@company.com"
                />
              </div>

              {/* PHONE */}
              <div>
                <label className="text-sm  font-medium">Phone *</label>

                <PhoneInput
                  country={"us"}
                  value={phone}
                  onChange={(value) => setPhone(value)}
                  inputProps={{
                    required: true,
                    name: "phone",
                  }}
                  inputStyle={{
                    width: "100%",
                    height: "48px",
                    borderRadius: "8px",
                    border: "1px solid #e5e7eb",
                    background: "#f9fafb",
                  }}
                  buttonStyle={{
                    borderRadius: "8px 0 0 8px",
                    border: "1px solid #e5e7eb",
                  }}
                  placeholder="(123) 456-7890"
                />
              </div>

              {/* WEBSITE */}
              <div>
                <label className="text-sm font-medium">
                  Website (Optional)
                </label>

                <input
                  value={website}
                  onChange={(e) => {
                    setWebsite(e.target.value);
                    validateWebsite(e.target.value);
                  }}
                  className="mt-2 w-full border border-gray-200 bg-gray-50 rounded-lg px-4 py-3"
                  placeholder="https://yourcompany.com"
                />

                {websiteError && (
                  <p className="text-red-500 text-xs mt-1">{websiteError}</p>
                )}
              </div>

              {/* REVENUE */}
              <div>
                <label className="text-sm font-medium">Revenue *</label>
                <select
                  required
                  className="mt-2 w-full border border-gray-200 bg-gray-50 rounded-lg px-4 py-3"
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
                  className="mt-2 w-full border border-gray-200 bg-gray-50 rounded-lg px-4 py-3"
                  placeholder="https://linkedin.com/in/..."
                />
              </div>

              {/* MESSAGE */}
              <div className="md:col-span-2">
                <label className="text-sm font-medium">Your Message</label>

                <textarea
                  rows="4"
                  className="mt-2 w-full border border-gray-200 bg-gray-50 rounded-lg px-4 py-3"
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

          <div id="book-a-call">
            <div className="overflow-hidden rounded-xl h-full">
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
