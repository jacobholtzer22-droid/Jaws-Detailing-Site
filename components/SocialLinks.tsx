import { Instagram, Facebook, Youtube } from "lucide-react";
import { site } from "@/site.config";

/** Minimal TikTok glyph — lucide doesn't ship one. */
function TikTok({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.5 3c.3 2 1.6 3.5 3.5 3.8v2.5c-1.3 0-2.5-.4-3.5-1v6.4a5.7 5.7 0 1 1-5.7-5.7c.3 0 .6 0 .9.1v2.6a3.1 3.1 0 1 0 2.2 3V3h2.6Z" />
    </svg>
  );
}

const PLATFORMS = [
  { key: "instagram", label: "Instagram", Icon: Instagram },
  { key: "facebook", label: "Facebook", Icon: Facebook },
  { key: "tiktok", label: "TikTok", Icon: TikTok },
  { key: "youtube", label: "YouTube", Icon: Youtube },
] as const;

/**
 * Renders only the social icons that have a real URL in site.social.
 * No URL => no icon (we never link to a profile that doesn't exist).
 */
export default function SocialLinks({
  className = "",
  iconClassName = "h-4 w-4",
}: {
  className?: string;
  iconClassName?: string;
}) {
  const links = PLATFORMS.filter(
    (p) => (site.social as Record<string, string>)[p.key]
  );
  if (links.length === 0) return null;

  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {links.map(({ key, label, Icon }) => (
        <li key={key}>
          <a
            href={(site.social as Record<string, string>)[key]}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${site.business.name} on ${label}`}
            className="inline-flex items-center justify-center text-current transition-colors hover:text-chrome"
          >
            <Icon className={iconClassName} />
          </a>
        </li>
      ))}
    </ul>
  );
}
