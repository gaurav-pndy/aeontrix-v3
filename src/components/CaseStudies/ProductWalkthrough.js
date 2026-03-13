"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";

export default function ProductWalkthrough({ media }) {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % media.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + media.length) % media.length);
  };

  const current = media[index];

  return (
    <section className="py-10 pt-80 md:pt-68 lg:pt-50 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Label */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-1 h-5 bg-primary rounded"></span>
          <span className="font-mono small-text font-semibold text-primary uppercase">
            Product Walkthrough
          </span>
        </div>

        {/* Main Media Container */}
        <div className="relative rounded-xl border border-border bg-muted overflow-hidden">
          {/* Media */}
          <div className="aspect-16/8 flex items-center justify-center">
            {current?.type === "video" ? (
              <video
                src={current.src}
                controls
                className="w-full h-full object-cover"
              />
            ) : current?.src ? (
              <img src={current.src} className="w-full h-full object-cover" />
            ) : (
              <div className="text-center text-text-muted">
                <ImageIcon className="mx-auto mb-2" />
                Screenshot or Video
              </div>
            )}
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-4 cursor-pointer top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full border border-border bg-white/80 backdrop-blur"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={next}
            className="absolute right-4 cursor-pointer top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full border border-border bg-white/80 backdrop-blur"
          >
            <ChevronRight size={18} />
          </button>

          {/* Counter */}
          <div className="absolute bottom-4 right-4 text-xs bg-black/70 font-mono text-white px-2.5 py-1 rounded">
            {index + 1} / {media.length}
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex gap-2 mt-4 flex-wrap">
          {media.map((item, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-18 h-12 cursor-pointer rounded-md border flex items-center justify-center ${
                i === index
                  ? "border-primary bg-primary/10"
                  : "border-border bg-muted"
              }`}
            >
              {item.src ? (
                <img
                  src={item.src}
                  className="w-full h-full object-cover rounded"
                />
              ) : (
                <ImageIcon size={18} className="text-text-muted" />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
