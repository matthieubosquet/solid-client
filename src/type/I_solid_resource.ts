import type { IAclMode } from "./i_acl_mode.js";
import type { IResource } from "./i_resource.js";
import type { IAccessControlList } from "./i_access_control_list.js"
import type { IDescriptionResource } from "./i_description_resource.js"

export interface ISolidResource extends IResource {
  access: Set<IAclMode>;
  acl: IAccessControlList;
  desc: IDescriptionResource;
}
