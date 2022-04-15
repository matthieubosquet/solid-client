import type { IRdfSource } from "./i_rdf_source.js";
import type { IAclType } from "./i_acl_type.js";

export interface IAccessControlList extends IRdfSource {
  aclType: IAclType;
}
