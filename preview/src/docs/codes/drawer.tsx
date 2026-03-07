import React, { useState, useRef } from 'react';
import { AriDrawer, AriButton, AriFlex, AriInput, AriRadio, AriDrawerPlacement, AriTypography } from '@aries-kit/react';

export const BasicDrawer: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <AriButton onClick={showDrawer}>打开抽屉</AriButton>
      <AriDrawer
        title="基础抽屉"
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <p>一些抽屉内容...</p>
        <p>一些抽屉内容...</p>
        <p>一些抽屉内容...</p>
      </AriDrawer>
    </>
  );
};

export const PlacementDrawer: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState<AriDrawerPlacement>('right');

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onChange = (value: string | number | boolean) => {
    setPlacement(value as AriDrawerPlacement);
  };

  return (
    <>
      <AriFlex space={8} align="center">
        <AriRadio.Group value={placement} onChange={onChange}>
          <AriRadio value="top">top</AriRadio>
          <AriRadio value="right">right</AriRadio>
          <AriRadio value="bottom">bottom</AriRadio>
          <AriRadio value="left">left</AriRadio>
        </AriRadio.Group>
        <AriButton onClick={showDrawer}>打开抽屉</AriButton>
      </AriFlex>
      <AriDrawer
        title="不同位置的抽屉"
        placement={placement}
        onClose={onClose}
        visible={visible}
      >
        <p>一些抽屉内容...</p>
        <p>一些抽屉内容...</p>
        <p>一些抽屉内容...</p>
      </AriDrawer>
    </>
  );
};

export const CustomContentDrawer: React.FC = () => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <>
            <AriButton onClick={showDrawer}>打开自定义页脚抽屉</AriButton>
            <AriDrawer
                title="自定义页脚"
                placement="right"
                onClose={onClose}
                visible={visible}
                footer={
                    <div style={{ textAlign: 'right' }}>
                        <AriButton onClick={onClose} style={{ marginRight: 8 }}>
                            取消
                        </AriButton>
                        <AriButton color="primary" onClick={onClose}>
                            确认
                        </AriButton>
                    </div>
                }
            >
                <p>一些抽屉内容...</p>
                <p>一些抽屉内容...</p>
                <p>一些抽屉内容...</p>
            </AriDrawer>
        </>
    );
};


export const ContainerDrawer: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div
      ref={containerRef}
      style={{
        height: 300,
        overflow: 'hidden',
        position: 'relative',
        border: '1px solid #ccc',
        padding: 20,
        textAlign: 'center',
      }}
    >
      渲染在当前容器
      <AriButton onClick={showDrawer} style={{ marginLeft: 16 }}>打开抽屉</AriButton>
      <AriDrawer
        title="容器内抽屉"
        placement="right"
        onClose={onClose}
        visible={visible}
        getContainer={() => containerRef.current!} // 指定容器
        style={{ position: 'absolute' }} // 需要设置 position: absolute
      >
        <p>一些抽屉内容...</p>
        <p>一些抽屉内容...</p>
        <p>一些抽屉内容...</p>
      </AriDrawer>
    </div>
  );
};

export const DrawerStyleDrawer: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <style>{`
        .preview-drawer-shell {
          box-shadow: 0 24px 48px rgba(0, 0, 0, 0.16);
        }
      `}</style>
      <AriButton onClick={() => setVisible(true)}>打开样式化抽屉</AriButton>
      <AriDrawer
        visible={visible}
        onClose={() => setVisible(false)}
        title="样式与层级"
        width={420}
        closable={false}
        zIndex={1200}
        className="preview-drawer-shell"
        headerStyle={{ background: 'rgba(33, 150, 243, 0.08)' }}
        bodyStyle={{ background: 'rgba(3, 169, 244, 0.04)', padding: 24 }}
        footerStyle={{ background: 'rgba(76, 175, 80, 0.08)' }}
        maskStyle={{ background: 'rgba(7, 10, 18, 0.42)' }}
        footer={(
          <AriFlex justify="flex-end" space={8}>
            <AriButton type="text" onClick={() => setVisible(false)}>关闭</AriButton>
            <AriButton color="primary" onClick={() => setVisible(false)}>保存</AriButton>
          </AriFlex>
        )}
      >
        <AriTypography variant='body' value='这个示例覆盖 width、closable、zIndex、className 以及 header/body/footer/mask 样式。' />
      </AriDrawer>
    </>
  );
};

export const DrawerBehaviorDrawer: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [draft, setDraft] = useState('关闭后应被销毁');

  return (
    <AriFlex vertical space={12}>
      <AriButton onClick={() => setVisible(true)}>打开无遮罩抽屉</AriButton>
      <AriTypography variant='caption' value='mask={false} 时点击外围不再有遮罩；maskClosable={false} 也不会点击外部关闭。' />
      <AriDrawer
        visible={visible}
        onClose={() => setVisible(false)}
        title="行为控制"
        placement="left"
        mask={false}
        maskClosable={false}
        destroyOnClose
        style={{ borderRight: '1px solid var(--z-color-border)' }}
      >
        <AriFlex vertical space={12}>
          <AriTypography variant='caption' value='关闭后再次打开，输入框内容会因为 destroyOnClose 被重置。' />
          <AriInput value={draft} onChange={setDraft} placeholder='输入任意文本后关闭再重开' />
          <AriButton onClick={() => setVisible(false)}>手动关闭</AriButton>
        </AriFlex>
      </AriDrawer>
    </AriFlex>
  );
};
