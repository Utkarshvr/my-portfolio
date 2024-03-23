import ProjectType from "@/types/ProjectType";
import Tools from "../Tools";
import Button from "../common/Button";
import Carousel from "../Carousel";
import Reveal from "../framer-motion/Reveal";

export default function ProjectCard({
  project,
  index,
}: {
  project: ProjectType;
  index: number;
}) {
  if (project) {
    const images = project.attributes.images.data;
    return (
      <Reveal index={index}>
        <div className="sm:flex-[0.5] flex-1">
          <Carousel images={images} />
        </div>

        <div className="flex sm:flex-[0.5] flex-1 md:justify-center flex-col gap-8 p-4">
          <div className="flex items-center gap-2">
            <img
              src={project.attributes?.icon?.data?.attributes?.url}
              className="w-8 h-8 rounded-full"
            />
            <h1 className="text-xl font-bold text-white ">
              {project.attributes.title}
            </h1>
          </div>
          <p className="text-sm text-neutral-200">
            {project.attributes?.description}
          </p>

          {/* TOOLS */}
          <Tools tools={project.attributes?.tools?.data} />
          {/* CTA */}
          <div className="flex items-center justify-center gap-4">
            <Button isLink isSecondary href={project.attributes.source}>
              Source Code
            </Button>
            <Button isLink href={project.attributes.visit}>
              Open App
            </Button>
          </div>
        </div>
      </Reveal>
    );
  }
}
