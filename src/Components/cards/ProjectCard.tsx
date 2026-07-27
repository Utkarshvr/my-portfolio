"use client";
import { useState } from "react";
import Tools from "../Tools";
import Button from "../common/Button";
import Carousel from "../Carousel";
import Reveal from "../framer-motion/Reveal";
import VideoModal from "../other/VideoModal";
import { getProjectActions } from "@/lib/projectActions";
import PROJECT_TYPE from "@/types/PROJECT_TYPE";
import TOOL_TYPE from "@/types/TOOL_TYPE";

export default function ProjectCard({
  project,
  index,
  tools,
}: {
  project: PROJECT_TYPE;
  tools: TOOL_TYPE[];
  index: number;
}) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const openYTModal = (videoUrl: string) => {
    if (videoUrl) {
      setIsVideoModalOpen(true);
    }
  };

  if (!project) return null;

  const images = project.images;
  const actions = getProjectActions(project);

  return (
    <>
      <Reveal index={index}>
        <div className="sm:flex-[0.5] flex-1">
          {images && <Carousel images={images} />}
        </div>

        <div className="flex sm:flex-[0.5] flex-1 md:justify-center flex-col p-4">
          <div className="flex flex-col gap-1 mb-4">
            <div className="flex items-center gap-2">
              <img
                src={project.icon}
                className="w-8 h-8 rounded-full"
                alt={`${project.title} icon`}
              />
              <div>
                <h2 className="text-xl lg:text-2xl font-bold text-slate-100 group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h2>
              </div>
            </div>
          </div>
          <p className="text-sm text-slate-300">{project.description}</p>

          {/* TOOLS */}
          {project.tools && (
            <div className="my-4">
              <h3 className="text-sm font-semibold text-slate-400 mb-2">
                Built with
              </h3>
              <Tools projectTools={project.tools} allTools={tools} />
            </div>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-700/50">
            {project.video_demo && (
              <Button
                onClick={() => openYTModal(project.video_demo || "")}
                className="flex-1 min-w-[120px] bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                <div className="flex items-center justify-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <p className="hidden md:block">Watch Demo</p>
                  <p className="block md:hidden">Demo</p>
                </div>
              </Button>
            )}

            {actions.map((action) => (
              <Button
                key={`${action.label}-${action.url}`}
                isLink
                isSecondary={action.variant === "secondary"}
                href={action.url}
                className="flex-1 min-w-[120px]"
              >
                {action.label}
              </Button>
            ))}
          </div>
        </div>
      </Reveal>

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl={project.video_demo || ""}
      />
    </>
  );
}
