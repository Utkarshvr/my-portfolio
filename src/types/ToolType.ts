import CommonType from "./CommonType";
import MediaType from "./MediaType";

export default interface ToolType {
  id: any;
  attributes: CommonType & {
    name: string;
    tool: {
      data: MediaType;
    };
  };
}
