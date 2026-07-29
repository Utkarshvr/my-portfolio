export type ImageKind = "tool" | "other";

export default interface TOOL_TYPE {
  id?: string;
  name: string;
  image: string;
  /** Missing type is treated as `"tool"` for backwards compatibility. */
  type?: ImageKind;
}
