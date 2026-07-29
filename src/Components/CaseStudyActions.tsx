"use client";

import { useState } from "react";
import Button from "@/Components/common/Button";
import VideoModal from "@/Components/other/VideoModal";
import { getProjectActions } from "@/lib/projectActions";
import PROJECT_TYPE from "@/types/PROJECT_TYPE";

/**
 * Project CTAs for the case-study page.
 * Order: Watch Demo → primary → secondary. Case-study link is omitted
 * (you're already on that page).
 * Buttons sit at least two per row (wrap as needed).
 */
export default function CaseStudyActions({ project }: { project: PROJECT_TYPE }) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const actions = getProjectActions(project);

  const hasDemo = Boolean(project.video_demo?.trim());
  if (!hasDemo && actions.length === 0) return null;

  // Two per row (gap-3 = 0.75rem → half gap each side); wrap for more
  const btnClass =
    "!w-[calc(50%-0.375rem)] min-w-[calc(50%-0.375rem)] flex-none grow-0";

  return (
    <>
      <div className="flex flex-wrap gap-3">
        {hasDemo && (
          <Button
            onClick={() => setIsVideoModalOpen(true)}
            className={`${btnClass} bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 shadow-lg hover:from-purple-700 hover:to-pink-700 hover:shadow-purple-500/25`}
          >
            <span className="flex items-center justify-center gap-2">
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch Demo
            </span>
          </Button>
        )}

        {actions.map((action) => (
          <Button
            key={`${action.label}-${action.url}`}
            isLink
            isSecondary={action.variant === "secondary"}
            href={action.url}
            className={btnClass}
          >
            {action.label}
          </Button>
        ))}
      </div>

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl={project.video_demo || ""}
      />
    </>
  );
}
