import CommonType from "./CommonType";

export default interface TextType {
  attributes: CommonType & {
    name: string;
    text: string;
  };
}
