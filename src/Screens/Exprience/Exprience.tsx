import RevealOnFrame from "@/Components/framer-motion/RevealOnFrame";
import expriences from "@/content/experiences.json";

export default function Exprience() {
  return (
    <section
      id="experience"
      className="md:px-9 flex flex-col items-center justify-center gap-4"
    >
      <h1 className="w-full font-bold text-2xl text-start px-4 md:px-0">
        Experience
      </h1>

      <div className="flex flex-col gap-4">
        {expriences.map((exp) => (
          <RevealOnFrame key={exp._id}>
            <div className="flex flex-col gap-1">
              <div className="flex gap-2">
                <img
                  src={exp.icon}
                  className="w-7 h-7 rounded-full"
                  alt={exp.organization}
                />
                <h4 className="text-neutral-200 font-bold text-lg">
                  {exp.organization} | {exp.title}
                </h4>
              </div>
              <h5 className="text-neutral-300 font-medium text-md">
                {exp.duration}
              </h5>
              {exp.description.map((desc) => (
                <p className="text-neutral-400">&#x2022; {desc}</p>
              ))}
            </div>
          </RevealOnFrame>
        ))}
      </div>
    </section>
  );
}
