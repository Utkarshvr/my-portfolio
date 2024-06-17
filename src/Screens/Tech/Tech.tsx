import Techs from "@/Components/Techs";

export default function Tech() {
  return (
    <section id="tech" className="pb-20 md:px-9 flex flex-col">
      <h1 className="w-full font-bold text-2xl text-start px-4 md:px-0 mb-2">
        Technologies
      </h1>
      <p className="px-4 text-neutral-400">
        I have worked with various technologies to create versatile full stack
        Web/Mobile Apps
      </p>
      <Techs />
    </section>
  );
}
