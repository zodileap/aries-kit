import { AriTypography, AriCard, AriFlex } from '@aries-kit/react';

export const BasicCard: React.FC = () => {
    return (
        <AriFlex vertical space={24} padding={20}>
            <AriCard>
                <AriTypography variant='caption' value='这是一个基础的卡片组件，默认带有阴影和圆角效果。' />
                <AriTypography variant='caption' value='卡片组件继承自Container组件，保留了所有Container的功能' />
                <AriTypography variant='caption' value='你可以在卡片中放置任何内容，比如文字、图片、表格等' />
            </AriCard>
        </AriFlex>
    );
};
