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
  const [sceneReady, setSceneReady] = useState(false);

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

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {/* Keep the spinner visible through the scene's own (heavy) init —
          without this there's a blank gap between "shouldLoad" flipping
          true and the WebGL scene actually finishing setup. */}
      {!sceneReady && <SplineLoader />}
      {shouldLoad && (
        <Spline
          scene={scene}
          className={className}
          renderOnDemand
          onLoad={() => setSceneReady(true)}
          style={{ opacity: sceneReady ? 1 : 0, transition: "opacity 0.4s ease" }}
        />
      )}
    </div>
  );
}
