import CommonType from "./CommonType";
import MediaType from "./MediaType";

export default interface SocialLinkType {
  attributes: CommonType & {
    name: string;
    link: string;
    icon: {
      data: MediaType;
    };
  };
}
