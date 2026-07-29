import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import CaseStudyActions from "@/Components/CaseStudyActions";
import MarkdownContent from "@/Components/MarkdownContent";
import Tools from "@/Components/Tools";
import { firestore } from "@/lib/firebaseAdmin";
import { hasCaseStudy } from "@/lib/projectActions";
import Nav from "@/Screens/Nav/Nav";
import PROJECT_TYPE from "@/types/PROJECT_TYPE";
import TOOL_TYPE from "@/types/TOOL_TYPE";

export const revalidate = 1;

async function getProjectBySlug(slug: string): Promise<PROJECT_TYPE | null> {
  const snapshot = await firestore
    .collection("projects")
    .where("case_study_slug", "==", slug)
    .limit(5)
    .get();

  const match = snapshot.docs
    .map((doc) => ({ id: doc.id, ...doc.data() } as PROJECT_TYPE))
    .find(
      (p) =>
        p.isPublished &&
        hasCaseStudy(p) &&
        p.case_study_slug?.trim() === slug
    );

  return match ?? null;
}

async function getTools(): Promise<TOOL_TYPE[]> {
  const snapshot = await firestore.collection("tools").get();
  return snapshot.docs.map(
    (doc) => ({ id: doc.id, ...doc.data() } as TOOL_TYPE)
  );
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug);
  if (!project) {
    return { title: "Case study not found | Utkarsh" };
  }
  return {
    title: `${project.title} | Case Study — Utkarsh`,
    description:
      project.description ||
      `Case study for ${project.title} by Utkarsh.`,
  };
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const [project, tools] = await Promise.all([
    getProjectBySlug(params.slug),
    getTools(),
  ]);

  if (!project || !hasCaseStudy(project)) {
    notFound();
  }

  const hasTools = Boolean(project.tools && project.tools.length > 0);

  return (
    <main className="mx-auto max-w-7xl">
      <Nav />

      <article className="px-4 pb-16 pt-24 md:px-9">
        <Link
          href="/#work"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-sky-400"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to work
        </Link>

        {/*
          Large: title/desc left, Built with + buttons right.
          Small: everything stacked vertically (current flow).
        */}
        <header className="mb-10 flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
          <div className="min-w-0 flex-1 space-y-4">
            <div className="flex items-center gap-3">
              {project.icon && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={project.icon}
                  alt=""
                  className="h-12 w-12 rounded-full border border-slate-700"
                />
              )}
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-sky-500">
                  Case study
                </p>
                <h1 className="text-3xl font-bold text-slate-50 md:text-4xl">
                  {project.title}
                </h1>
              </div>
            </div>

            {project.description && (
              <p className="max-w-2xl text-base leading-relaxed text-slate-400">
                {project.description}
              </p>
            )}
          </div>

          <aside className="flex w-full flex-col gap-5 border-t border-slate-800 pt-6 lg:w-[26rem] lg:shrink-0 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
            {hasTools && (
              <div>
                <h2 className="mb-2 text-sm font-semibold text-slate-500">
                  Built with
                </h2>
                <Tools projectTools={project.tools!} allTools={tools} />
              </div>
            )}

            <CaseStudyActions project={project} />
          </aside>
        </header>

        <MarkdownContent content={project.case_study_md!.trim()} />
      </article>
    </main>
  );
}
