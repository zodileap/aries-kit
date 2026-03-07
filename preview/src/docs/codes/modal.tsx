import React, { useState } from 'react';
import { AriModal, AriButton, AriFlex, AriTypography, AriSwitch, AriSelect, AriInput } from '@aries-kit/react';
import './style.scss';

export const BasicModal: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <AriButton color="primary" onClick={() => setVisible(true)}>
        打开对话框
      </AriButton>

      <AriModal
        visible={visible}
        title="基础对话框"
        onClose={() => setVisible(false)}
        footer={
            <AriFlex justify="flex-end" align="center" space={8}>
            <AriButton onClick={() => setVisible(false)}>取消</AriButton>
            <AriButton color="primary" onClick={() => setVisible(false)}>
              确定
            </AriButton>
          </AriFlex>
        }
      >
        <p>这是一个基础对话框，展示了标题、内容和底部按钮的用法。</p>
      </AriModal>
    </>
  );
};

export const SizeModal: React.FC = () => {
  const [visibleXS, setVisibleXS] = useState(false);
  const [visibleSM, setVisibleSM] = useState(false);
  const [visibleDefault, setVisibleDefault] = useState(false);
  const [visibleLG, setVisibleLG] = useState(false);
  const [visibleXL, setVisibleXL] = useState(false);
  const [visibleCustom, setVisibleCustom] = useState(false);

  return (
    <AriFlex space={8} wrap>
      <AriButton onClick={() => setVisibleXS(true)}>超小尺寸</AriButton>
      <AriButton onClick={() => setVisibleSM(true)}>小尺寸</AriButton>
      <AriButton onClick={() => setVisibleDefault(true)}>默认尺寸</AriButton>
      <AriButton onClick={() => setVisibleLG(true)}>大尺寸</AriButton>
      <AriButton onClick={() => setVisibleXL(true)}>超大尺寸</AriButton>
      <AriButton onClick={() => setVisibleCustom(true)}>自定义尺寸</AriButton>

      <AriModal
        visible={visibleXS}
        title="超小尺寸对话框"
        width="xs"
        onClose={() => setVisibleXS(false)}
      >
        <p>宽度预设为超小尺寸</p>
      </AriModal>

      <AriModal
        visible={visibleSM}
        title="小尺寸对话框"
        width="sm"
        onClose={() => setVisibleSM(false)}
      >
        <p>宽度预设为小尺寸</p>
      </AriModal>

      <AriModal
        visible={visibleDefault}
        title="默认尺寸对话框"
        width="default"
        onClose={() => setVisibleDefault(false)}
      >
        <p>宽度预设为默认尺寸</p>
      </AriModal>

      <AriModal
        visible={visibleLG}
        title="大尺寸对话框"
        width="lg"
        onClose={() => setVisibleLG(false)}
      >
        <p>宽度预设为大尺寸</p>
      </AriModal>

      <AriModal
        visible={visibleXL}
        title="超大尺寸对话框"
        width="xl"
        onClose={() => setVisibleXL(false)}
      >
        <p>宽度预设为超大尺寸</p>
      </AriModal>

      <AriModal
        visible={visibleCustom}
        title="自定义尺寸对话框"
        width={720}
        onClose={() => setVisibleCustom(false)}
      >
        <p>自定义宽度为720px</p>
      </AriModal>
    </AriFlex>
  );
};

export const PositionModal: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState<'top' | 'center' | 'bottom'>('center');

  return (
    <AriFlex vertical space={16}>
          <AriFlex space={8} align="center">
        <AriTypography variant='h3'>对话框位置：</AriTypography>
        <AriSelect
          style={{ width: 120 }}
          value={position}
          onChange={(value) => setPosition(value as any)}
          options={[
            { value: 'top', label: '顶部' },
            { value: 'center', label: '居中' },
            { value: 'bottom', label: '底部' },
          ]}
        />
        <AriButton color="primary" onClick={() => setVisible(true)}>
          打开对话框
        </AriButton>
      </AriFlex>

      <AriModal
        visible={visible}
        title={`${position === 'top' ? '顶部' : position === 'center' ? '居中' : '底部'}对话框`}
        position={position}
        onClose={() => setVisible(false)}
      >
        <p>对话框位置设置为 {position}</p>
      </AriModal>
    </AriFlex>
  );
};

export const FullscreenModal: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [maximizable, setMaximizable] = useState(true);

  return (
      <AriFlex vertical space={16}>
          <AriFlex space={16} align="center">
              <AriFlex align="center" space={8}>
          <AriTypography variant='h3'>启用最大化按钮：</AriTypography>
          <AriSwitch checked={maximizable} onChange={setMaximizable} />
        </AriFlex>
              <AriFlex align="center" space={8}>
          <AriTypography variant='h3'>默认全屏：</AriTypography>
          <AriSwitch checked={fullscreen} onChange={setFullscreen} />
        </AriFlex>
        <AriButton color='primary' onClick={() => setVisible(true)}>
          打开对话框
        </AriButton>
      </AriFlex>

      <AriModal
        visible={visible}
        title="可全屏对话框"
        maximizable={maximizable}
        fullscreen={fullscreen}
        onClose={() => setVisible(false)}
        onFullscreenChange={(isFullscreen) => setFullscreen(isFullscreen)}
      >
        <div style={{ height: 300 }}>
          <p>通过右上角按钮可以切换全屏状态</p>
          <p>也可以通过属性控制全屏状态</p>
        </div>
      </AriModal>
    </AriFlex>
  );
};

export const CustomModal: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [maskClosable, setMaskClosable] = useState(true);
  const [escClosable, setEscClosable] = useState(true);

  return (
      <AriFlex vertical space={16}>
          <AriFlex space={16} align="center">
              <AriFlex align="center" space={8}>
          <AriTypography variant='h3'>点击遮罩关闭：</AriTypography>
          <AriSwitch checked={maskClosable} onChange={setMaskClosable} />
        </AriFlex>
              <AriFlex align="center" space={8}>
          <AriTypography variant='h3'>ESC键关闭：</AriTypography>
          <AriSwitch checked={escClosable} onChange={setEscClosable} />
        </AriFlex>
        <AriButton color="primary" onClick={() => setVisible(true)}>
          打开对话框
        </AriButton>
      </AriFlex>

      <AriModal
        visible={visible}
        title="自定义行为对话框"
        maskClosable={maskClosable}
        escClosable={escClosable}
        onClose={() => setVisible(false)}
      >
        <p>你可以自定义对话框的交互方式</p>
        <p>当前设置：</p>
        <p>- 点击遮罩关闭：{maskClosable ? '开启' : '关闭'}</p>
        <p>- ESC键关闭：{escClosable ? '开启' : '关闭'}</p>
      </AriModal>
    </AriFlex>
  );
};

export const ModalLifecycle: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [status, setStatus] = useState('尚未打开');

  return (
    <>
      <style>{`
        .preview-modal-outline {
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.18);
        }
      `}</style>
      <AriFlex vertical space={16}>
        <AriTypography variant='body' value={`生命周期状态: ${status}`} />
        <AriButton color="primary" onClick={() => setVisible(true)}>
          打开生命周期对话框
        </AriButton>

        <AriModal
          visible={visible}
          title="生命周期与外观"
          closable={false}
          mask={false}
          maskStyle={{ background: 'rgba(0, 0, 0, 0.55)' }}
          className="preview-modal-outline"
          forceRender
          afterOpen={() => setStatus('已打开')}
          afterClose={() => setStatus('已关闭')}
          onClose={() => setVisible(false)}
          children={(
            <AriFlex vertical space={12}>
              <AriTypography variant='body' value='这个示例显式覆盖 children、closable、className、mask、maskStyle、forceRender、afterOpen 和 afterClose。' />
              <AriInput placeholder='forceRender 让内容在初始阶段也会挂载' />
              <AriButton onClick={() => setVisible(false)}>关闭</AriButton>
            </AriFlex>
          )}
        />
      </AriFlex>
    </>
  );
};
