"use client";

import dynamic from "next/dynamic";

// Code-split out of the main bundle and skip SSR — the chat toggle isn't
// needed for first paint on any page, so there's no reason to ship or
// hydrate it until the browser is idle.
const ChatWidget = dynamic(() => import("@/components/ChatWidget").then((m) => m.ChatWidget), {
  ssr: false,
});

export function DeferredChatWidget() {
  return <ChatWidget />;
}
