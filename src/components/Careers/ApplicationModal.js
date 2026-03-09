import { useState } from "react";
import FormField from "./FormField";
import { ICONS } from "@/data/careersData";

export default function ApplicationModal({ role, onClose }) {
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(0);

  const handleChange = (id, val) => setFormData((p) => ({ ...p, [id]: val }));

  const basicFields = [
    {
      id: "fullName",
      label: "Full Name",
      type: "text",
      placeholder: "Jane Doe",
      required: true,
    },
    {
      id: "email",
      label: "Email Address",
      type: "text",
      placeholder: "jane@example.com",
      required: true,
    },
    {
      id: "phone",
      label: "Phone Number",
      type: "text",
      placeholder: "+1 (555) 000-0000",
      required: false,
    },
    {
      id: "linkedin",
      label: "LinkedIn Profile",
      type: "url",
      placeholder: "https://linkedin.com/in/...",
      required: false,
    },
    {
      id: "resume",
      label: "Resume / CV Link",
      type: "url",
      placeholder: "https://drive.google.com/...",
      required: true,
    },
  ];

  const currentFields = step === 0 ? basicFields : role.questions;

  const requiredFields = currentFields.filter((f) => f.required);

  const requiredFilled = requiredFields.filter((f) => {
    const v = formData[f.id];
    if (Array.isArray(v)) return v.length > 0;
    return v && v.trim && v.trim().length > 0;
  }).length;

  const canProceed = requiredFilled === requiredFields.length;

  const filledCount = currentFields.filter((f) => {
    const v = formData[f.id];
    if (Array.isArray(v)) return v.length > 0;
    return v && v.trim && v.trim().length > 0;
  }).length;

  /* ---------------- SUCCESS SCREEN ---------------- */

  if (submitted)
    return (
      <div className="fixed inset-0 z-1000 flex items-center justify-center">
        <div
          onClick={onClose}
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        />

        <div className="relative w-130 max-w-[92vw] rounded-2xl border border-border bg-surface px-10 py-14 text-center shadow-xl">
          <div className="mx-auto mb-6 flex h-18 w-18 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10 text-3xl text-primary">
            ✓
          </div>

          <h3 className="title-text mb-2 text-text">Application Submitted</h3>

          <p className="mx-auto mb-8 max-w-100 text-text-muted body-text">
            Thanks for applying for{" "}
            <span className="text-primary">{role.title}</span>. We'll review
            your application and get back to you within 5 business days.
          </p>

          <button onClick={onClose} className="secondary-btn">
            Close
          </button>
        </div>
      </div>
    );

  /* ---------------- MAIN MODAL ---------------- */

  return (
    <div className="fixed inset-0 z-1000 flex items-center justify-center">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
      />

      <div className="relative flex max-h-[90vh] w-150 max-w-[94vw] flex-col overflow-hidden rounded-lg border border-border bg-surface shadow-xl">
        {/* HEADER */}

        <div className="shrink-0 border-b border-border p-4 md:p-6 ">
          <div className="mb-4 flex  md:items-center justify-between">
            <div className="flex md:items-center gap-3">
              <div className="flex h-12 w-12 items-center shrink-0 justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary mt-1.5 md:mt-0">
                {ICONS[role.icon]}
              </div>

              <div>
                <h3 className="subtitle-text font-semibold text-text">
                  Apply — {role.title}
                </h3>

                <p className="font-mono xs-text text-text-muted">
                  {role.location} · {role.type}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-muted shrink-0 text-text-muted hover:text-text mt-1.5 md:mt-0"
            >
              ×
            </button>
          </div>

          {/* STEP PROGRESS */}

          <div className="flex gap-2">
            {[0, 1].map((s) => (
              <div key={s} className="flex flex-1 flex-col gap-1">
                <div
                  className={`h-0.75 rounded-sm transition-all ${
                    s <= step
                      ? "bg-linear-to-r from-primary to-success"
                      : "bg-muted"
                  }`}
                />

                <span
                  className={`font-mono text-[0.65rem] ${
                    s <= step ? "text-primary" : "text-text-muted"
                  }`}
                >
                  {s === 0 ? "BASIC INFO" : "ROLE QUESTIONS"}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* BODY */}

        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
          <div className="flex flex-col gap-5">
            {currentFields.map((field, i) => (
              <div
                key={field.id}
                style={{ animation: `fadeSlideUp 0.3s ease ${i * 40}ms both` }}
              >
                <label className="mb-2 flex items-center gap-1 small-text font-medium text-text-muted">
                  {field.label}

                  {field.required && (
                    <span className="text-primary xs-text">*</span>
                  )}
                </label>

                <FormField
                  field={field}
                  value={formData[field.id]}
                  onChange={handleChange}
                />
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER */}

        <div className="flex shrink-0 items-center justify-between border-t border-border p-6">
          <span className="font-mono xs-text text-text-muted">
            {filledCount}/{currentFields.length} completed
          </span>

          <div className="flex gap-2">
            {step > 0 && (
              <button
                onClick={() => setStep(0)}
                className="bg-transparent border border-primary hover:bg-primary/10 py-2 px-6 cursor-pointer transition-all duration-300 rounded-lg text-primary body-text"
              >
                Back
              </button>
            )}

            <button
              onClick={() => (step === 0 ? setStep(1) : setSubmitted(true))}
              disabled={!canProceed}
              className={`bg-primary border border-primary hover:bg-primary-dark py-2 px-6 cursor-pointer transition-all duration-300 rounded-lg text-white body-text ${
                !canProceed ? "opacity-40 pointer-events-none" : ""
              }`}
            >
              {step === 0 ? "Continue →" : "Submit Application"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
