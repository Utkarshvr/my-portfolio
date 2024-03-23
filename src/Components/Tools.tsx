import ToolType from "@/types/ToolType";

export default function Tools({ tools }: { tools: ToolType[] }) {
  if (tools)
    return (
      <div className="flex gap-3 items-center">
        {tools.map(
          (tool) =>
            tool &&
            tool?.attributes && (
              <img
                key={tool.id}
                src={tool.attributes.tool.data.attributes.url}
                className="w-7 h-7"
                alt={tool.attributes.tool.data.attributes.name}
              />
            )
        )}
      </div>
    );
}
