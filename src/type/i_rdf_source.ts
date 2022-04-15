import type { Stream } from "stream";
import type { IRdfContentType } from "./i_rdf_content_type.js";
import type { IResource } from "./i_resource.js";

export interface IRdfSource extends IResource {
  rdf: Stream;
  type: IRdfContentType;
}
