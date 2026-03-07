/**
 * svg文件声明
 */
declare module '*.svg' {
    /**
     * svg组件
     */
    import React = require('react');
    const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    export default ReactComponent;
}