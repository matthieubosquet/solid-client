import type { Stream } from "stream";
import type { IResource } from "./i_resource.js";

export interface INonRdfSource extends IResource {
  blob: Stream;
}
