import Link from "next/link";

export default function TransformationCard({ study }) {
  return (
    <div className="flex flex-col h-full rounded-lg border border-border bg-surface shadow-sm overflow-hidden transition hover:shadow-md">
      {/* HEADER */}
      <div className="bg-primary text-white p-4 md:p-6 md:pt-4 min-h-38 flex flex-col justify-between">
        <div className="flex gap-2 mb-2 flex-wrap">
          {study.partners.map((p) => (
            <span
              key={p}
              className="text-[0.65rem] bg-white/20 px-2 py-1 font-mono rounded"
            >
              {p.toUpperCase()}
            </span>
          ))}

          {study.comingSoon && (
            <span className="text-[0.65rem] bg-white/20 px-2 py-1 rounded">
              COMING SOON
            </span>
          )}
        </div>

        <div>
          <h3 className="large-text leading-tight">{study.title}</h3>
          <p className="small-text text-white/80">{study.client}</p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex flex-col flex-1 p-4 md:p-6 md:pt-4">
        {/* Tags */}
        <div className="flex gap-2 font-mono mb-6 flex-wrap">
          <span className="text-xs bg-muted px-2 py-1 rounded">
            {study.industry}
          </span>

          <span className="text-xs bg-muted px-2 py-1 rounded">
            {study.duration}
          </span>
        </div>

        {/* Metrics */}
        {study.comingSoon ? (
          <div className="flex justify-center items-center h-full">
            <p className="text-text-muted italic body-text mb-6 text-center">
              Full case study coming soon
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-2 mb-6 text-center">
            {study.metrics.map((m) => (
              <div key={m.label}>
                <div className="text-primary font-semibold text-lg">
                  {m.value}
                </div>
                <div className="text-xs text-text-muted">{m.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* PUSH FOOTER DOWN */}
        <div className="mt-auto flex items-center justify-between">
          <Link
            href={`case-studies/${study.slug}`}
            className="text-primary small-text font-medium whitespace-nowrap hover:underline"
          >
            {study.comingSoon ? "View Details →" : "Read Case Study →"}
          </Link>

          <div className="flex gap-1 flex-wrap justify-end">
            {study.stack?.map((tech) => (
              <span
                key={tech}
                className="text-[0.65rem] text-text-muted font-mono bg-muted px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
