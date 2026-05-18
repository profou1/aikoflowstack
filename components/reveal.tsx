"use client"

import { useEffect, useRef, useState } from "react"

type RevealProps = {
  children: React.ReactNode
  className?: string
  delay?: "none" | "short" | "medium" | "long"
}

export function Reveal({
  children,
  className = "",
  delay = "none"
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current

    if (!node) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.16
      }
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={[
        "reveal-block",
        visible ? "reveal-visible" : "",
        delay === "short" ? "reveal-delay-short" : "",
        delay === "medium" ? "reveal-delay-medium" : "",
        delay === "long" ? "reveal-delay-long" : "",
        className
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  )
}
