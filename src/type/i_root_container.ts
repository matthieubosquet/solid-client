import type { IContainer } from "./i_container.js";

export interface IRootContainer extends IContainer {
  owner: Set<URL>;
}
