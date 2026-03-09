import { useState } from "react";

export default function FormField({ field, value, onChange }) {
  const inputBase =
    "w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text placeholder:text-text-subtle outline-none transition focus:border-primary/50 focus:ring-2 focus:ring-primary/10";

  if (field.type === "textarea")
    return (
      <textarea
        value={value || ""}
        onChange={(e) => onChange(field.id, e.target.value)}
        placeholder={field.placeholder}
        rows={4}
        className={`${inputBase} resize-y min-h-25`}
      />
    );

  if (field.type === "select")
    return (
      <select
        value={value || ""}
        onChange={(e) => onChange(field.id, e.target.value)}
        className={`${inputBase} appearance-none pr-10`}
      >
        <option value="" className="text-text-muted">
          Select...
        </option>

        {field.options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    );

  if (field.type === "multicheck") {
    const sel = value || [];

    return (
      <div className="flex flex-wrap gap-2">
        {field.options.map((o) => {
          const active = sel.includes(o);

          return (
            <button
              key={o}
              type="button"
              onClick={() =>
                onChange(
                  field.id,
                  active ? sel.filter((x) => x !== o) : [...sel, o],
                )
              }
              className={`
                flex items-center gap-1.5
                rounded-md px-3 py-1.5
                small-text
                transition-all duration-300
                border cursor-pointer
                ${
                  active
                    ? "border-primary/40 bg-primary/10 text-primary"
                    : "border-border bg-muted text-text-muted hover:border-primary/30 hover:text-text"
                }
              `}
            >
              {active && <span className="text-xs">✓</span>}
              {o}
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <input
      type={field.type || "text"}
      value={value || ""}
      onChange={(e) => onChange(field.id, e.target.value)}
      placeholder={field.placeholder}
      className={inputBase}
    />
  );
}
