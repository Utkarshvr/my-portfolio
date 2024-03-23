import ProjectCard from "@/Components/cards/ProjectCard";
import projects from "@/content/projects.json";

export default async function Projects() {
  return (
    <section
      id="work"
      className="py-20 md:px-9 flex flex-col items-center justify-center gap-4"
    >
      <h1 className="w-full font-bold text-2xl text-start px-4 md:px-0">
        Projects
      </h1>
      {projects?.map(
        (project, index) =>
          project && (
            <ProjectCard key={project.id} project={project} index={index} />
          )
      )}
    </section>
  );
}
