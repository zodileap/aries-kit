import { AriRow, AriCol, AriContainer, AriFlex, AriTypography } from '@aries-kit/react';
import './style.scss';


export const BasicGrid: React.FC = () => (
    <>
        <AriFlex space={8} vertical>
            <AriRow className="grid-demo-row">
                <AriCol span={24}><div className="grid-demo-box">col-24</div></AriCol>
            </AriRow>
            <AriRow className="grid-demo-row">
                <AriCol span={12}><div className="grid-demo-box">col-12</div></AriCol>
                <AriCol span={12}><div className="grid-demo-box">col-12</div></AriCol>
            </AriRow>
            <AriRow className="grid-demo-row">
                <AriCol span={8}><div className="grid-demo-box">col-8</div></AriCol>
                <AriCol span={8}><div className="grid-demo-box">col-8</div></AriCol>
                <AriCol span={8}><div className="grid-demo-box">col-8</div></AriCol>
            </AriRow>
            <AriRow className="grid-demo-row">
                <AriCol span={6}><div className="grid-demo-box">col-6</div></AriCol>
                <AriCol span={6}><div className="grid-demo-box">col-6</div></AriCol>
                <AriCol span={6}><div className="grid-demo-box">col-6</div></AriCol>
                <AriCol span={6}><div className="grid-demo-box">col-6</div></AriCol>
            </AriRow>
        </AriFlex>

    </>
);

export const GutterDemo: React.FC = () => (
    <>
        <AriFlex space={8} vertical>
            <AriFlex vertical>
                <AriTypography variant='h4' value='水平间距(16px)' />
                <AriRow gutter={16} className="grid-demo-row">
                    <AriCol span={6}><div className="grid-demo-box">col-6</div></AriCol>
                    <AriCol span={6}><div className="grid-demo-box">col-6</div></AriCol>
                    <AriCol span={6}><div className="grid-demo-box">col-6</div></AriCol>
                    <AriCol span={6}><div className="grid-demo-box">col-6</div></AriCol>
                </AriRow>
            </AriFlex>
            <AriFlex vertical>
                <AriTypography variant='h4' value='水平垂直间距(16px, 24px)' />
                <AriRow gutter={[16, 24]} className="grid-demo-row">
                    <AriCol span={6}><div className="grid-demo-box">col-6</div></AriCol>
                    <AriCol span={6}><div className="grid-demo-box">col-6</div></AriCol>
                    <AriCol span={6}><div className="grid-demo-box">col-6</div></AriCol>
                    <AriCol span={6}><div className="grid-demo-box">col-6</div></AriCol>
                    <AriCol span={6}><div className="grid-demo-box">col-6</div></AriCol>
                    <AriCol span={6}><div className="grid-demo-box">col-6</div></AriCol>
                    <AriCol span={6}><div className="grid-demo-box">col-6</div></AriCol>
                    <AriCol span={6}><div className="grid-demo-box">col-6</div></AriCol>
                </AriRow>
            </AriFlex>
        </AriFlex>
    </>
);

export const ResponsiveDemo: React.FC = () => (
    <>
        <AriRow className="grid-demo-row">
            <AriCol xs={24} sm={12} md={8} lg={6} xl={4}>
                <div className="grid-demo-box">响应式</div>
            </AriCol>
            <AriCol xs={24} sm={12} md={8} lg={6} xl={4}>
                <div className="grid-demo-box">响应式</div>
            </AriCol>
            <AriCol xs={24} sm={12} md={8} lg={6} xl={4}>
                <div className="grid-demo-box">响应式</div>
            </AriCol>
            <AriCol xs={24} sm={12} md={8} lg={6} xl={4}>
                <div className="grid-demo-box">响应式</div>
            </AriCol>
            <AriCol xs={24} sm={12} md={8} lg={6} xl={4}>
                <div className="grid-demo-box">响应式</div>
            </AriCol>
            <AriCol xs={24} sm={12} md={8} lg={6} xl={4}>
                <div className="grid-demo-box">响应式</div>
            </AriCol>
        </AriRow>

        <AriRow style={{ marginTop: 16 }} className="grid-demo-row">
            <AriCol xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8, offset: 2 }}>
                <div className="grid-demo-box">对象配置</div>
            </AriCol>
            <AriCol xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8, offset: 4 }}>
                <div className="grid-demo-box">对象配置</div>
            </AriCol>
        </AriRow>
    </>
);


export const AlignmentDemo: React.FC = () => (
    <>
        <AriFlex space={8} vertical>
            <AriTypography variant='h4' value='水平对齐' />
            <AriFlex vertical>
                <AriTypography variant='caption' value='justify="flex-start"' />
                <AriRow justify="flex-start" className="grid-demo-row">
                    <AriCol span={4}><div className="grid-demo-box">col-4</div></AriCol>
                    <AriCol span={4}><div className="grid-demo-box">col-4</div></AriCol>
                    <AriCol span={4}><div className="grid-demo-box">col-4</div></AriCol>
                </AriRow>
            </AriFlex>
            <AriFlex vertical>
                <AriTypography variant='caption' value='justify="center"' />
                <AriRow justify="center" className="grid-demo-row">
                    <AriCol span={4}><div className="grid-demo-box">col-4</div></AriCol>
                    <AriCol span={4}><div className="grid-demo-box">col-4</div></AriCol>
                    <AriCol span={4}><div className="grid-demo-box">col-4</div></AriCol>
                </AriRow>
            </AriFlex>
            <AriFlex vertical>
                <AriTypography variant='caption' value='justify="flex-end"' />
                <AriRow justify="flex-end" className="grid-demo-row">
                    <AriCol span={4}><div className="grid-demo-box">col-4</div></AriCol>
                    <AriCol span={4}><div className="grid-demo-box">col-4</div></AriCol>
                    <AriCol span={4}><div className="grid-demo-box">col-4</div></AriCol>
                </AriRow>
            </AriFlex>
            <AriFlex vertical>
                <AriTypography variant='caption' value='justify="space-around"' />
                <AriRow justify="space-between" className="grid-demo-row">
                    <AriCol span={4}><div className="grid-demo-box">col-4</div></AriCol>
                    <AriCol span={4}><div className="grid-demo-box">col-4</div></AriCol>
                    <AriCol span={4}><div className="grid-demo-box">col-4</div></AriCol>
                </AriRow>
            </AriFlex>
            <AriFlex vertical>
                <AriTypography variant='caption' value='justify="space-around"' />
                <AriRow justify="space-around" className="grid-demo-row">
                    <AriCol span={4}><div className="grid-demo-box">col-4</div></AriCol>
                    <AriCol span={4}><div className="grid-demo-box">col-4</div></AriCol>
                    <AriCol span={4}><div className="grid-demo-box">col-4</div></AriCol>
                </AriRow>
            </AriFlex>  
            <AriTypography variant='h4' value='垂直对齐' />
            <AriFlex vertical>
                <AriRow align="top" className="grid-demo-row grid-demo-row-height">
                    <AriCol span={6}><div className="grid-demo-box" style={{ height: 80 }}>col-6</div></AriCol>
                    <AriCol span={6}><div className="grid-demo-box" style={{ height: 40 }}>col-6</div></AriCol>
                    <AriCol span={6}><div className="grid-demo-box" style={{ height: 120 }}>col-6</div></AriCol>
                    <AriCol span={6}><div className="grid-demo-box" style={{ height: 60 }}>col-6</div></AriCol>
                </AriRow>
            </AriFlex>
            <AriFlex vertical>
                <AriTypography variant='caption' value='align="middle"' />
                <AriRow align="middle" className="grid-demo-row grid-demo-row-height">
                    <AriCol span={6}><div className="grid-demo-box" style={{ height: 80 }}>col-6</div></AriCol>
                    <AriCol span={6}><div className="grid-demo-box" style={{ height: 40 }}>col-6</div></AriCol>
                    <AriCol span={6}><div className="grid-demo-box" style={{ height: 120 }}>col-6</div></AriCol>
                    <AriCol span={6}><div className="grid-demo-box" style={{ height: 60 }}>col-6</div></AriCol>
                </AriRow>
            </AriFlex>
            <AriFlex vertical>
                <AriTypography variant='caption' value='align="bottom"' />
                <AriRow align="bottom" className="grid-demo-row grid-demo-row-height">
                    <AriCol span={6}><div className="grid-demo-box" style={{ height: 80 }}>col-6</div></AriCol>
                    <AriCol span={6}><div className="grid-demo-box" style={{ height: 40 }}>col-6</div></AriCol>
                    <AriCol span={6}><div className="grid-demo-box" style={{ height: 120 }}>col-6</div></AriCol>
                    <AriCol span={6}><div className="grid-demo-box" style={{ height: 60 }}>col-6</div></AriCol>
                </AriRow>
            </AriFlex>
        </AriFlex>
    </>
);

export const OffsetOrderDemo: React.FC = () => (
    <>
        <AriContainer>
            <AriTypography variant='h4' value='栅格偏移' />
            <AriRow className="grid-demo-row">
                <AriCol span={8}><div className="grid-demo-box">col-8</div></AriCol>
                <AriCol span={8} offset={8}><div className="grid-demo-box">col-8 offset-8</div></AriCol>
            </AriRow>
            <AriRow className="grid-demo-row">
                <AriCol span={6} offset={6}><div className="grid-demo-box">col-6 offset-6</div></AriCol>
                <AriCol span={6} offset={6}><div className="grid-demo-box">col-6 offset-6</div></AriCol>
            </AriRow>
        </AriContainer>

        <AriContainer style={{ marginTop: 24 }}>
            <AriTypography variant='h4' value='栅格排序' />
            <AriRow className="grid-demo-row">
                <AriCol span={6} push={18}><div className="grid-demo-box">col-6 push-18</div></AriCol>
                <AriCol span={18} pull={6}><div className="grid-demo-box">col-18 pull-6</div></AriCol>
            </AriRow>
        </AriContainer>

        <AriContainer style={{ marginTop: 24 }}>
            <AriTypography variant='h4' value='Flex 排序' />
            <AriRow className="grid-demo-row">
                <AriCol span={6} order={4}><div className="grid-demo-box">1 col-6 order-4</div></AriCol>
                <AriCol span={6} order={3}><div className="grid-demo-box">2 col-6 order-3</div></AriCol>
                <AriCol span={6} order={2}><div className="grid-demo-box">3 col-6 order-2</div></AriCol>
                <AriCol span={6} order={1}><div className="grid-demo-box">4 col-6 order-1</div></AriCol>
            </AriRow>
        </AriContainer>
    </>
);

