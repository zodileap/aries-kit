import { AriCollapse, AriFlex } from '@aries-kit/react';

export const BasicCollapse: React.FC = () => {
    return (
        <AriCollapse
            collapseContent={<div style={{ padding: '20px' }}>折叠的内容</div>}
        >
            <div style={{ padding: '20px' }}>点击展开/收起</div>
        </AriCollapse>
    );
};

export const ShadowDemo: React.FC = () => {
    return (
        <AriFlex space={36} padding={36}>
            <AriCollapse
                shadowMode="always"
                collapseContent={<div style={{ padding: '20px' }}>折叠的内容</div>}
            >
                <div style={{ padding: '20px' }}>总是显示阴影</div>
            </AriCollapse>
            <AriCollapse
                shadowMode="active"
                collapseContent={<div style={{ padding: '20px' }}>折叠的内容</div>}
            >
                <div style={{ padding: '20px' }}>悬浮显示阴影</div>
            </AriCollapse>
        </AriFlex>
    );
};


export const DefaultExpandedDemo: React.FC = () => {
    return (
        <AriCollapse
            defaultExpanded={true}
            collapseContent={<div style={{ padding: '20px' }}>默认展开的内容</div>}
        >
            <div style={{ padding: '20px' }}>默认展开状态</div>
        </AriCollapse>
    );
};


