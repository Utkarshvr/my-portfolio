import type PROJECT_TYPE from "@/types/PROJECT_TYPE";
import type { ProjectAction } from "@/types/PROJECT_TYPE";

const VISIT_CTA: Record<string, string> = {
  website: "Visit Site",
  app: "Try App",
  "landing-page": "View Page",
  ai: "Launch AI",
};

/**
 * Prefer explicit `actions`. Fall back to legacy source_code / visit_link
 * so older Firestore documents keep working until re-saved in the CMS.
 */
export function getProjectActions(project: PROJECT_TYPE): ProjectAction[] {
  const fromActions = (project.actions ?? []).filter(
    (a) => a.label?.trim() && a.url?.trim()
  );
  if (fromActions.length > 0) return fromActions;

  const legacy: ProjectAction[] = [];
  if (project.source_code?.trim()) {
    legacy.push({
      label: "Source Code",
      url: project.source_code.trim(),
      variant: "secondary",
    });
  }
  if (project.visit_link?.trim()) {
    legacy.push({
      label: VISIT_CTA[project.type ?? ""] ?? "View Project",
      url: project.visit_link.trim(),
      variant: "primary",
    });
  }
  return legacy;
}
