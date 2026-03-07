import { AriDivider, AriFlex } from '@aries-kit/react';

export const BasicDivider: React.FC = () => (
    <>
        <style>{`
            .preview-divider-outline {
                outline: 2px dashed var(--z-color-primary);
                outline-offset: 4px;
            }
        `}</style>
        <div>上方内容</div>
        <AriDivider />
        <div>下方内容</div>
    </>
);

export const LabelDivider: React.FC = () => (
    <>
        <div>登录账号</div>
        <AriDivider children="或者" />
        <div>扫码登录</div>
    </>
);

export const OrientationDivider: React.FC = () => (
    <>
        <div>内容区域</div>
        <AriDivider orientation="left">左对齐</AriDivider>
        <div>内容区域</div>
        <AriDivider orientation="center">居中对齐</AriDivider>
        <div>内容区域</div>
        <AriDivider orientation="right">右对齐</AriDivider>
        <div>内容区域</div>
    </>
);

export const VariantDivider: React.FC = () => (
    <>
        <div>默认分割线</div>
        <AriDivider variant="default" color="#46b2ff" />
        <div>虚线分割线</div>
        <AriDivider variant="dashed" />
        <div>点状分割线</div>
        <AriDivider variant="dotted" />
    </>
);

export const PlainDivider: React.FC = () => (
    <>
        <div>内容区域</div>
        <AriDivider plain>简洁样式</AriDivider>
        <div>内容区域</div>
        <AriDivider label="备用 label 文本" className="preview-divider-outline" style={{ color: 'var(--z-color-primary)' }} />
        <div>内容区域</div>
    </>
);

export const VerticalDivider: React.FC = () => (
    <AriFlex justify='center'>
        <span>文本</span>
        <AriDivider type="vertical" />
        <span>文本</span>
    </AriFlex>
);
