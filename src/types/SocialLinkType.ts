import CommonType from "./CommonType";
import MediaType from "./MediaType";

export default interface SocialLinkType {
  id: number;
  attributes: CommonType & {
    name: string;
    link: string;
    icon: {
      data: MediaType;
    };
  };
}
