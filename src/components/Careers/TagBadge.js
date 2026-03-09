import { TAG_COLORS } from "@/data/careersData";

export default function TagBadge({ tag }) {
  const c = TAG_COLORS[tag] || TAG_COLORS.Technical;

  return (
    <span
      className="
        inline-flex items-center
        rounded-full
        px-2.5 py-0.5
        text-[0.65rem]
        font-mono
        uppercase
        tracking-[0.5px]
      "
      style={{
        color: c.text,
        background: c.bg,
        border: `1px solid ${c.border}`,
      }}
    >
      {tag}
    </span>
  );
}
