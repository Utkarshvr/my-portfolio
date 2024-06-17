import SocialLinks from "@/Components/SocialLinks";
import Link from "next/link";
import texts from "@/content/texts.json";

export default async function Footer() {
  const { NEXT_PUBLIC_HERO_EMAIL_IDENTIFIER } = process.env;

  // Texts
  const emailID = texts.find(
    (txt) =>
      txt.attributes.name === NEXT_PUBLIC_HERO_EMAIL_IDENTIFIER ||
      txt.attributes.name === "email"
  )?.attributes.text;

  return (
    <section
      id="contact"
      className="px-4 md:px-9 py-8 bg-slate-900 rounded-lg mb-2 flex flex-col gap-4"
    >
      <h1 className="font-bold text-2xl">Let's get in touch</h1>
      <p className="text-sm text-netural-300">
        For business inquiry please send email to{" "}
        <Link href={`mailto:${emailID}`} target="_blank" className="font-bold">
          {emailID}
        </Link>
      </p>
      <SocialLinks alignStart />
    </section>
  );
}
