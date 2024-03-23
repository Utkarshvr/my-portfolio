import SocialLinks from "@/Components/SocialLinks";
import Button from "@/Components/common/Button";

import texts from "@/content/texts.json";
import links from "@/content/links.json";
import AutoReveal from "@/Components/framer-motion/AutoReveal";

export default async function Hero() {
  const {
    NEXT_PUBLIC_HERO_TITLE_IDENTIFIER,
    NEXT_PUBLIC_HERO_SUBTITLE_IDENTIFIER,
    NEXT_PUBLIC_HERO_DESCRIPTION_IDENTIFIER,
    NEXT_PUBLIC_MY_PIC_LINK_IDENTIFIER,
  } = process.env;

  // Texts
  const heroTitle = texts.find(
    (txt) =>
      txt.attributes.name === NEXT_PUBLIC_HERO_TITLE_IDENTIFIER ||
      txt.attributes.name === "hero-title"
  )?.attributes.text;
  const heroSubTitle = texts.find(
    (txt) =>
      txt.attributes.name === NEXT_PUBLIC_HERO_SUBTITLE_IDENTIFIER ||
      txt.attributes.name === "hero-subtitle"
  )?.attributes.text;
  const heroDesc = texts.find(
    (txt) =>
      txt.attributes.name === NEXT_PUBLIC_HERO_DESCRIPTION_IDENTIFIER ||
      txt.attributes.name === "hero-description"
  )?.attributes.text;
  console.log({ heroTitle, heroDesc, heroSubTitle });

  // Links
  const heroImgLink = links.find(
    (link) =>
      link.attributes.name === NEXT_PUBLIC_MY_PIC_LINK_IDENTIFIER ||
      link.attributes.name === "my-pic"
  )?.attributes.link;

  return (
    <section
      id="about"
      className="px-4 mt-[10vh] py-20 md:py-15 min-h-[92vh] flex flex-col items-center justify-center gap-6"
    >
      <div className="flex max-w-[700px] flex-col gap-4 items-center justify-center">
        <AutoReveal delay={0.1}>
          <img
            src={heroImgLink || "/me.png"}
            className="w-20 h-20  md:w-[160px] md:h-[160px] rounded-full border-[6px] border-white object-cover"
          />
        </AutoReveal>

        <AutoReveal delay={0.2}>
          <h6 className="text-sm selection:font-bold text-center md:text-2xl text-neutral-200">
            {heroSubTitle}
          </h6>
        </AutoReveal>

        <AutoReveal delay={0.3}>
          <h1 className="font-bold text-4xl md:text-6xl text-white text-center">
            {heroTitle}
          </h1>
        </AutoReveal>

        <AutoReveal delay={0.4}>
          <p className="text-sm text-neutral-200 md:text-lg text-center">
            {heroDesc}
          </p>
        </AutoReveal>
      </div>

      <AutoReveal delay={0.5}>
        <Button
          fullWidth
          isLink
          download={"Utkarsh CV.pdf"}
          href={"/Utkarsh CV.pdf"}
        >
          Download CV
        </Button>
      </AutoReveal>

      {/* LINKS */}
      <AutoReveal delay={0.6}>
        <SocialLinks />
      </AutoReveal>
    </section>
  );
}
