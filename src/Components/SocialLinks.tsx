import Link from "next/link";

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
      {/* {links?.length > 0
        ? links?.map((link) =>
            socialLinks.find(({ platform }) => platform === link?.type)
              ?.icon ? (
              <li className="icon" key={link?.type}>
                <Link target="_blank" href={link?.link}>
                  {
                    socialLinks.find(({ platform }) => platform === link?.type)
                      ?.icon
                  }
                </Link>
              </li>
            ) : null
          )
        : socialLinks.map(({ link, icon, platform }) => (
            <li className="icon" key={platform}>
              <Link target="_blank" href={link}>
                {icon}
              </Link>
            </li>
          ))} */}
    </ul>
  );
}
