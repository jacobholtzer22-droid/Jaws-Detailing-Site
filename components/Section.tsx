type Tone = "ink" | "panel" | "bone";

type Props = {
  id?: string;
  /** Background band. ink/panel = dark cinematic spine; bone = warm readable band. */
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
};

const toneClasses: Record<Tone, string> = {
  ink: "bg-ink text-bone band-wash",
  panel: "bg-panel-dark text-bone band-wash",
  bone: "bg-bone text-ink",
};

/** Consistent vertical rhythm + tone band. Keeps section padding in one place. */
export default function Section({
  id,
  tone = "ink",
  className = "",
  children,
}: Props) {
  return (
    <section id={id} className={`${toneClasses[tone]} py-20 sm:py-28 ${className}`}>
      <div className="container-page">{children}</div>
    </section>
  );
}
