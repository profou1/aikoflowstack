type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  align?: "left" | "center"
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : ""

  return (
    <div className={`max-w-3xl space-y-4 ${alignment}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-stone-500">
        {eyebrow}
      </p>
      <h2 className="text-balance text-4xl leading-[0.96] text-stone-950 sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="text-pretty text-base leading-7 text-stone-600 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}
