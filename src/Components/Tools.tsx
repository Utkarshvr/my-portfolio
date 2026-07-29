import TOOL_TYPE from "@/types/TOOL_TYPE";

function isToolImage(doc: TOOL_TYPE | undefined): doc is TOOL_TYPE {
  return Boolean(doc) && doc!.type !== "other";
}

export default function Tools({
  projectTools,
  allTools,
}: {
  projectTools: string[];
  allTools: TOOL_TYPE[];
}) {
  if (!allTools || !projectTools) return null;

  return (
    <div className="flex gap-3 items-center flex-wrap">
      {projectTools.map((toolId) => {
        const tool = allTools.find((t) => t.id === toolId);
        if (!isToolImage(tool) || !tool.image) return null;
        return (
          <img
            key={toolId}
            src={tool.image}
            className="w-7 h-7"
            alt={tool.name}
          />
        );
      })}
    </div>
  );
}
