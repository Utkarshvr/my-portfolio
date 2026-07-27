export type PROJECT_TYPE_INTERFACE = "app" | "website" | "landing-page" | "ai";

/** Custom CTA on a project card (Play Store, Source Code, Visit Site, etc.). */
export interface ProjectAction {
  label: string;
  url: string;
  /** primary = filled, secondary = outlined. Defaults to primary. */
  variant?: "primary" | "secondary";
}

export default interface PROJECT_TYPE {
  id?: string;
  position?: number;
  title: string;
  description?: string;
  type?: PROJECT_TYPE_INTERFACE;
  /**
   * @deprecated Prefer `actions`. Kept for older Firestore docs.
   */
  source_code?: string;
  /**
   * @deprecated Prefer `actions`. Kept for older Firestore docs.
   */
  visit_link?: string;
  /** Flexible CTAs rendered on the project card. */
  actions?: ProjectAction[];
  isPublished?: boolean;

  icon?: string;
  images?: string[];
  video_demo?: string;
  tools?: string[];
}
