import Link from "next/link";

export default function Nav() {
  return (
    <header className="min-h-[8vh] p-4 bg-slate-950 fixed w-full top-0 left-0 flex items-center justify-center">
      {/* <img src="/logo.png" className="w-12 h-12 rounded-full" /> */}

      <div className="flex items-center gap-3">
        {["About", "Work", "Contact"].map((link) => (
          <Link
            href={`#${link.toLowerCase()}`}
            className="text-sm font-medium text-netrual-200 hover:font-bold transition-all"
          >
            {link}
          </Link>
        ))}
      </div>
    </header>
  );
}
