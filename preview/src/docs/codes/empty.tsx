import { AriEmpty } from '@aries-kit/react';

export const BasicEmpty: React.FC = () => (
    <AriEmpty className="preview-empty-state" />
);

export const CustomIconDemo: React.FC = () => (
    <AriEmpty
        icon="face"
        description="没有找到相关内容"
    />
);

export const CustomImageDemo: React.FC = () => (
    <AriEmpty
        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
        description="暂无数据"
    />
);
