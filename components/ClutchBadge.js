"use client";

import { useEffect } from "react";

export function ClutchBadge() {
  useEffect(() => {
    const existing = document.querySelector(
      'script[src="https://widget.clutch.co/static/js/widget.js"]'
    );
    if (existing) {
      if (window.CLUTCH) window.CLUTCH.init();
      return;
    }
    const script = document.createElement("script");
    script.src = "https://widget.clutch.co/static/js/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="clutch-badge-wrap">
      <div
        className="clutch-widget"
        data-url="https://widget.clutch.co"
        data-widget-type="2"
        data-height="50"
        data-nofollow="true"
        data-expandifr="true"
        data-scale="100"
        data-clutchcompany-id="2663263"
      />
    </div>
  );
}
