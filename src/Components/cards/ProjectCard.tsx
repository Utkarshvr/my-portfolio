import ProjectType from "@/types/ProjectType";
import Tools from "../Tools";
import Button from "../common/Button";
import Carousel from "../Carousel";

export default function ProjectCard({ project }: { project: ProjectType }) {
  if (project) {
    const images = project.attributes.images.data;
    return (
      <div className="flex mb-8 flex-col md:flex-row md:odd:flex-row-reverse">
        <div className="flex-[0.45]">
          <Carousel images={images} />
        </div>
        {/* <img
          src={project.attributes?.images?.data[0]?.attributes.url}
          className="rounded-lg w-[100%] md:w-[50%] h-[100%] max-h-[450px]"
          alt={project.attributes?.title}
        /> */}

        <div className="flex flex-[0.55] md:justify-center flex-col gap-8 p-4">
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
      </div>
    );
  }
}
