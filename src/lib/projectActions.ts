import type PROJECT_TYPE from "@/types/PROJECT_TYPE";
import type { ProjectAction } from "@/types/PROJECT_TYPE";

const VISIT_CTA: Record<string, string> = {
  website: "Visit Site",
  app: "Try App",
  "landing-page": "View Page",
  ai: "Launch AI",
};

export const DEFAULT_CASE_STUDY_CTA = "View Case Study";

/** True when the project has enough case-study data to show a CTA. */
export function hasCaseStudy(
  project: Pick<PROJECT_TYPE, "case_study_md" | "case_study_slug"> | null | undefined
): boolean {
  return Boolean(
    project?.case_study_md?.trim() && project?.case_study_slug?.trim()
  );
}

/**
 * Sort CTAs so primary comes before secondary (stable within each group).
 * Card order: Watch Demo → primary → secondary (incl. case study).
 */
export function sortActionsByVariant(actions: ProjectAction[]): ProjectAction[] {
  const primary: ProjectAction[] = [];
  const secondary: ProjectAction[] = [];
  for (const action of actions) {
    if (action.variant === "secondary") secondary.push(action);
    else primary.push(action);
  }
  return [...primary, ...secondary];
}

/**
 * Prefer explicit `actions`. Fall back to legacy source_code / visit_link
 * so older Firestore documents keep working until re-saved in the CMS.
 */
export function getProjectActions(project: PROJECT_TYPE): ProjectAction[] {
  const fromActions = (project.actions ?? []).filter(
    (a) => a.label?.trim() && a.url?.trim()
  );
  if (fromActions.length > 0) return sortActionsByVariant(fromActions);

  const legacy: ProjectAction[] = [];
  if (project.visit_link?.trim()) {
    legacy.push({
      label: VISIT_CTA[project.type ?? ""] ?? "View Project",
      url: project.visit_link.trim(),
      variant: "primary",
    });
  }
  if (project.source_code?.trim()) {
    legacy.push({
      label: "Source Code",
      url: project.source_code.trim(),
      variant: "secondary",
    });
  }
  return legacy;
}

/** External actions + auto case-study CTA (when content exists), sorted. */
export function getProjectCardActions(project: PROJECT_TYPE): ProjectAction[] {
  const actions = getProjectActions(project);
  if (!hasCaseStudy(project)) return actions;

  const slug = project.case_study_slug!.trim();
  const label =
    project.case_study_cta_label?.trim() || DEFAULT_CASE_STUDY_CTA;

  return sortActionsByVariant([
    ...actions,
    {
      label,
      url: `/projects/${slug}`,
      variant: "secondary",
    },
  ]);
}
