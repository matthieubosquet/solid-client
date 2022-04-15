import type { IRdfSource } from "./i_rdf_source.js";

export interface IWebID extends IRdfSource {
  oidcIssuer: Set<URL>;
  type: "text/turtle";
}
