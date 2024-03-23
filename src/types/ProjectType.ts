import CommonType from "./CommonType";
import MediaType from "./MediaType";
import ToolType from "./ToolType";

export default interface ProjectType {
  id: number;
  attributes: CommonType & {
    title: string;
    description: string;
    source: string;
    visit: string;
    isActive?: boolean;

    // Medias
    icon: {
      data: MediaType;
    };
    images: {
      data: MediaType[];
    };
    tools: {
      data: ToolType[];
    };
  };
}
