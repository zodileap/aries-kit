import { AriFlex, AriButton } from '@aries-kit/react';

export const BasicFlex: React.FC = () => (
    <AriFlex>
        <AriButton label="按钮1" />
        <AriButton label="按钮2" />
        <AriButton label="按钮3" />
    </AriFlex>
);

export const VerticalFlex: React.FC = () => (
    <AriFlex vertical>
        <AriButton label="按钮1" />
        <AriButton label="按钮2" />
        <AriButton label="按钮3" />
    </AriFlex>
);

export const SizeFlex: React.FC = () => (
    <>
        <AriFlex space={8} vertical>
            <AriFlex space={8} showBorder borderStyle='dashed'>
                <AriButton label="间距 8px" />
                <AriButton label="间距 8px" />
            </AriFlex>
            <AriFlex space={16} showBorder borderStyle='dashed'>
                <AriButton label="间距 16px" />
                <AriButton label="间距 16px" />
            </AriFlex>
            <AriFlex space="2em" showBorder borderStyle='dashed'>
                <AriButton label="间距 2em" />
                <AriButton label="间距 2em" />
            </AriFlex>
        </AriFlex>
    </>
);

export const AlignFlex: React.FC = () => (
    <>
        <AriFlex align="flex-start" showBorder borderStyle='dashed'>
            <AriButton label="顶部对齐" />
            <div style={{ height: '60px', lineHeight: '60px' }}>高度不一致的元素</div>
            <AriButton label="顶部对齐" />
        </AriFlex>
        <AriFlex align="center" showBorder borderStyle='dashed'>
            <AriButton label="居中对齐" />
            <div style={{ height: '60px', lineHeight: '60px' }}>高度不一致的元素</div>
            <AriButton label="居中对齐" />
        </AriFlex>
        <AriFlex align="baseline" showBorder borderStyle='dashed'>
            <AriButton label="基线对齐" />
            <div style={{ height: '60px', lineHeight: '60px' }}>高度不一致的元素</div>
            <AriButton label="基线对齐" />
        </AriFlex>
    </>
);

export const JustifyFlex: React.FC = () => (
    <>
        <AriFlex space={8} vertical>
            <AriFlex justify="flex-start" showBorder borderStyle='dashed'>
                <AriButton label="左对齐" />
                <AriButton label="start" />
            </AriFlex>
            <AriFlex justify="center" showBorder borderStyle='dashed'>
                <AriButton label="居中对齐" />
                <AriButton label="center" />
            </AriFlex>
            <AriFlex justify="flex-end" showBorder borderStyle='dashed'>
                <AriButton label="右对齐" />
                <AriButton label="end" />
            </AriFlex>
            <AriFlex justify="space-between" showBorder borderStyle='dashed'>
                <AriButton label="两端对齐" />
                <AriButton label="space-between" />
            </AriFlex>
            <AriFlex justify="space-around" showBorder borderStyle='dashed'>
                <AriButton label="环绕对齐" />
                <AriButton label="space-around" />
            </AriFlex>
        </AriFlex>
    </>
);

export const WrapFlex: React.FC = () => (
    <AriFlex wrap showBorder borderStyle='dashed'>
        <AriButton label="按钮1" />
        <AriButton label="按钮2" />
        <AriButton label="按钮3" />
        <AriButton label="按钮4" />
        <AriButton label="按钮5" />
    </AriFlex>
);

export const FlexItemDemo: React.FC = () => (
    <>
        <AriFlex space={8} vertical height={400} flexItem={{ index: 1, overflow: 'auto' }}>
            <AriButton label="按钮" />
            <div style={{ padding: '8px', backgroundColor: '#f0f0f0', height: "600px" }}>
                <div>这里是一段很长的内容，超出容器高度时会显示滚动条</div>
                <div>这里是一段很长的内容，超出容器高度时会显示滚动条</div>
                <div>这里是一段很长的内容，超出容器高度时会显示滚动条</div>
                <div>这里是一段很长的内容，超出容器高度时会显示滚动条</div>
            </div>
            <AriButton label="按钮" />
        </AriFlex>
    </>
);