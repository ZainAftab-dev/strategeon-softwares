"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

function SplineLoader() {
  return (
    <div className="spline-loading">
      <span className="loader"></span>
    </div>
  );
}

export function SplineScene({ scene, className }) {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Defer fetching/evaluating the heavy Spline runtime until the browser is
    // idle, so it doesn't compete with the page's critical initial render.
    if (typeof window === "undefined") return;
    const idle = window.requestIdleCallback
      ? window.requestIdleCallback(() => setShouldLoad(true), { timeout: 2000 })
      : setTimeout(() => setShouldLoad(true), 300);
    return () => {
      if (window.cancelIdleCallback) window.cancelIdleCallback(idle);
      else clearTimeout(idle);
    };
  }, []);

  if (!shouldLoad) return <SplineLoader />;

  return <Spline scene={scene} className={className} renderOnDemand />;
}
