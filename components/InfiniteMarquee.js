"use client";

export function InfiniteMarquee({ children, speed = 35, direction = "left", pauseOnHover = true }) {
  const duration = `${speed}s`;
  const dir = direction === "right" ? "reverse" : "normal";

  return (
    <div className={`marquee-wrapper${pauseOnHover ? " marquee-hoverable" : ""}`}>
      <div
        className="marquee-track"
        style={{ animationDuration: duration, animationDirection: dir }}
      >
        <div className="marquee-content" aria-hidden="false">
          {children}
        </div>
        <div className="marquee-content" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
