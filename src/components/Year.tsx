"use client";

export default function Year() {
  return <span suppressHydrationWarning>{new Date().getFullYear()}</span>;
}
