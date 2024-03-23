import CommonType from "./CommonType";

export default interface LinkType {
  attributes: CommonType & {
    name: string;
    link: string;
  };
}
