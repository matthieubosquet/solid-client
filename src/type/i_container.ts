import type { ISolidResource } from "./i_solid_resource.js";

export interface IContainer extends ISolidResource {
  contains: Set<ISolidResource>;
}
