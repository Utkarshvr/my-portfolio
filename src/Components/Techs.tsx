import techs from "@/content/technologies.json";
import ToolType from "@/types/ToolType";
import RevealOnFrame from "./framer-motion/RevealOnFrame";

function getTechsByIndexRange(start: number, end: number) {
  return techs
    .map((t, index) => {
      if (index >= start - 1 && index <= end - 1) return t;
      else return null;
    })
    .filter((t) => Boolean(t));
}

export default function Techs() {
  const frontendTechs = getTechsByIndexRange(1, 5) as ToolType[];
  const backendTechs = getTechsByIndexRange(6, 9) as ToolType[];
  const uiLibsTechs = getTechsByIndexRange(10, 14) as ToolType[];
  const authTechs = getTechsByIndexRange(15, 16) as ToolType[];

  return (
    <>
      <div className="hidden min-[850px]:block">
        <RevealOnFrame>
          <Techsss filteredTechs={frontendTechs} type="frontend" />
        </RevealOnFrame>
        <RevealOnFrame>
          <Techsss filteredTechs={backendTechs} type="backend" />
        </RevealOnFrame>
        <RevealOnFrame>
          <Techsss filteredTechs={uiLibsTechs} type="ui" />
        </RevealOnFrame>
        <RevealOnFrame>
          <Techsss filteredTechs={authTechs} type="auth" />
        </RevealOnFrame>
      </div>
      <div className="hidden max-[850px]:block">
        <RevealOnFrame>
          <Techsss filteredTechs={techs} type="auth" />
        </RevealOnFrame>
      </div>
    </>
  );
}

function Techsss({
  filteredTechs,
  type,
}: {
  filteredTechs: ToolType[];
  type: "frontend" | "backend" | "ui" | "auth";
}) {
  let widthClass = `w-10`;
  let heightClass = `h-10`;
  if (type === "frontend") {
    widthClass = "w-32";
    heightClass = "h-32";
  } else if (type === "backend") {
    widthClass = "w-28";
    heightClass = "h-28";
  } else if (type === "ui") {
    widthClass = "w-20";
    heightClass = "h-20";
  } else if (type === "auth") {
    widthClass = "w-16";
    heightClass = "h-16";
  }

  console.log({ type, class: `${widthClass} ${heightClass}` });

  return (
    <div className="px-4 mt-6 flex gap-6 items-center flex-wrap items-center justify-center mb-2">
      {filteredTechs.map(
        (tool) =>
          tool &&
          tool?.attributes && (
            <img
              key={tool.id}
              src={tool.attributes.tool.data.attributes.url}
              className={`${widthClass} ${heightClass} rounded-full`}
              alt={tool.attributes.tool.data.attributes.name}
            />
          )
      )}
    </div>
  );
}
