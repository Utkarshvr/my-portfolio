import Link from "next/link";
import Nav from "@/Screens/Nav/Nav";

export default function CaseStudyNotFound() {
  return (
    <main className="mx-auto max-w-7xl">
      <Nav />
      <div className="flex min-h-[70vh] flex-col items-center justify-center gap-4 px-4 text-center">
        <h1 className="text-2xl font-bold text-slate-100">
          Case study not found
        </h1>
        <p className="max-w-md text-sm text-slate-400">
          This project doesn&apos;t have a published case study, or the link is
          outdated.
        </p>
        <Link
          href="/#work"
          className="rounded-3xl bg-sky-600 px-5 py-2 text-sm font-bold transition-colors hover:bg-sky-800"
        >
          Back to work
        </Link>
      </div>
    </main>
  );
}
