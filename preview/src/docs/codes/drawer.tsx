import React, { useState, useRef } from 'react';
import { AriDrawer, AriButton, AriFlex, AriRadio, AriDrawerPlacement } from '@aries-kit/react';

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
