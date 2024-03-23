import Link from "next/link";
import socialLinks from "@/content/social-links.json";
import SocialLinkType from "@/types/SocialLinkType";

export default async function SocialLinks({
  alignStart,
}: {
  alignStart?: boolean;
}) {
  return (
    <ul
      className={`w-full flex  items-center ${
        alignStart ? "justify-start" : "justify-center"
      } gap-4`}
    >
      {socialLinks.map((socialLink: SocialLinkType) => (
        <li className="icon" key={socialLink.id}>
          <Link target="_blank" href={socialLink.attributes.link}>
            <img
              width={32}
              height={32}
              className="p-0.5"
              src={socialLink.attributes.icon.data.attributes.url}
              alt={socialLink.attributes.name}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
