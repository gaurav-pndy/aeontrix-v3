"use client";

export default function CaseHeroSection({ study }) {
  return (
    <section className="bg-background-dark text-white ">
      <div className="max-w-7xl mx-auto px-4 pt-28 md:pt-36 pb-28 md:pb-20 relative">
        {/* Tags */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {study.partners?.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-2 rounded-md border border-primary/30 bg-primary/10 px-4 py-1.5 font-mono xs-text text-primary "
            >
              {tag.toUpperCase()}
            </span>
          ))}

          {study.hero.tags?.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-2 rounded-md border border-primary-soft/30 bg-primary-soft/10 px-4 py-1.5 font-mono xs-text text-primary-soft "
            >
              {tag.toUpperCase()}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="hero-heading ">{study.title}</h1>

        {/* Subtitle */}
        <p className="large-text text-text-muted max-w-xl mt-2">
          {study.client}
        </p>

        {/* Meta */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-10 mt-8">
          <div>
            <p className="xs-text text-text-muted uppercase tracking-wider">
              Client
            </p>
            <p className="body-text">{study.client}</p>
          </div>

          <div>
            <p className="xs-text text-text-muted uppercase tracking-wider">
              Timeline
            </p>
            <p className="body-text">{study.duration}</p>
          </div>
        </div>

        {/* Floating Metrics */}
        <div className="absolute left-1/2 -translate-x-1/2  w-full  bottom-0  translate-y-3/4  flex justify-center">
          {" "}
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-surface rounded-lg shadow-lg border border-border p-6">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {study.metricsFull.map((metric) => (
                  <div
                    key={metric.label}
                    className="bg-muted rounded-lg p-4 text-center border border-border"
                  >
                    <div className="text-primary large-text font-semibold font-mono">
                      {metric.value}
                    </div>

                    <div className="xs-text text-text-muted mt-1 leading-tight">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
