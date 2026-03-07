import { AriButton } from "@aries-kit/react"

export const BasicButton: React.FC = () => (
    <>
        <AriButton label="默认按钮" />
        <AriButton label="收藏" icon="star" />
        <AriButton icon="star" />
        <AriButton disabled label="禁用按钮" />
        <AriButton loading label="加载中" />
        <AriButton ghost label="幽灵按钮" />
    </>
);

export const ColorDemo: React.FC = () => (
    <>
        <AriButton color="primary" label="主要按钮" />
        <AriButton color="success" label="成功按钮" />
        <AriButton color="warning" label="警告按钮" />
        <AriButton color="danger" label="危险按钮" />
        <AriButton color="info" label="信息按钮" />
        <AriButton color="brand" label="品牌按钮" />
    </>
);

export const ShapeDemo: React.FC = () => (
  <>
    <AriButton shape="default" label="默认形状" />
    <AriButton shape="circle" icon="star" label="圆角按钮" />
    <AriButton shape="round" icon="star" />
  </>
);

export const SizeDemo: React.FC = () => (
    <>
        <AriButton size="xs" icon='star'  label="极小按钮" />
        <AriButton size="sm" icon='star' label="小按钮" />
        <AriButton icon='star' label="默认按钮" />
        <AriButton size="lg" icon='star' label="大按钮" />
        <AriButton size="xl" icon='star' label="超大按钮" />
        <AriButton size="xxl" icon='star' label="极大按钮" />
    </>
);

export const TypeDemo: React.FC = () => (
    <>
        <style>{`
            .preview-button-outline {
                outline: 2px dashed var(--z-color-primary);
                outline-offset: 4px;
            }
        `}</style>
        <AriButton type="dashed" label="虚线按钮" />
        <AriButton type="link" label="链接按钮" />
        <AriButton type="text" label="文本按钮" />
        <AriButton htmlType="submit" className="preview-button-outline" label="提交按钮" />
    </>
);
