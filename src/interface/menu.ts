export interface menuNode {
  /** 名称 */
  name: string;
  /** 跳转路径 */
  path: string;
  icon: any;
}

export interface menuGroup {
  name: string;
  node: menuNode[];
}
