// @ari/components/sidebar/AriSidebar.tsx
import { AriTreeView, AriTreeNodeComponent } from './tree-node';
import { AriCustomSidebar } from './custom';


// 将树视图和树节点组件作为侧边栏的子组件导出
export const AriSidebar = Object.assign(AriCustomSidebar, {
    TreeView: AriTreeView,
    TreeNode: AriTreeNodeComponent
});