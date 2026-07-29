import AutoReveal from "@/Components/framer-motion/AutoReveal";
import Link from "next/link";

export default function Nav() {
  return (
    <header className="min-h-[8vh] z-10 p-4 bg-slate-950 fixed w-full top-0 left-0 flex items-center justify-center">
      {/* <img src="/logo.png" className="w-12 h-12 rounded-full" /> */}
      <AutoReveal delay={0.7}>
        <div className="flex items-center gap-1 sm:gap-3 flex-wrap  justify-center">
          {["About", "Experience", "Testimonials", "Work", "Contact"].map(
            (link) => (
              <Link
                key={link}
                href={`/#${link.toLowerCase()}`}
                className="text-xs sm:text-sm font-bold text-netrual-200 hover:font-medium transition-all"
              >
                {link}
              </Link>
            )
          )}
        </div>
      </AutoReveal>
    </header>
  );
}
