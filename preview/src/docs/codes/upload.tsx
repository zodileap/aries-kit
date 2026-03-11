import React, { useState } from 'react';
import { AriUpload, AriUploadFile, AriFlex, AriButton, AriMessage } from '@aries-kit/react';

export const BasicExample: React.FC = () => {
  const [fileList, setFileList] = useState<AriUploadFile[]>([]);

  const handleUpload = (files: File[]) => {
    console.log('上传文件:', files);
    // 这里可以实现实际的上传逻辑
  };

  const handleChange = (newFileList: AriUploadFile[]) => {
    setFileList(newFileList);
  };

  return (
    <AriUpload
      fileList={fileList}
      onChange={handleChange}
      onUpload={handleUpload}
      uploadText="点击或拖拽文件到此区域上传"
      uploadDescription="支持单个或批量上传"
    />
  );
};

export const FileTypesExample: React.FC = () => {
  const [fileList, setFileList] = useState<AriUploadFile[]>([]);

  return (
    <AriFlex vertical space={24}>
      <div>
        <h4>仅支持图片文件</h4>
        <AriUpload
          fileList={fileList}
          onChange={setFileList}
          accept="image/*"
          uploadText="支持 JPG、PNG、GIF 格式"
          uploadDescription="单个文件不超过 5MB"
          maxSize={5 * 1024 * 1024}
        />
      </div>
      
      <div>
        <h4>仅支持文档文件</h4>
        <AriUpload
          accept=".pdf,.doc,.docx,.txt"
          uploadText="支持 PDF、Word、TXT 格式"
          uploadDescription="仅支持常见文档格式"
        />
      </div>
    </AriFlex>
  );
};

export const LimitExample: React.FC = () => {
  const [fileList, setFileList] = useState<AriUploadFile[]>([]);

  const handleValidationError = (file: File, reason: string) => {
    AriMessage.error(`文件 "${file.name}" 上传失败: ${reason}`);
  };

  return (
    <AriFlex vertical space={24}>
      <div>
        <h4>限制文件数量（最多3个）</h4>
        <AriUpload
          fileList={fileList}
          onChange={setFileList}
          maxCount={3}
          uploadText="最多上传 3 个文件"
          onValidationError={handleValidationError}
        />
      </div>
      
      <div>
        <h4>限制文件大小（最大2MB）</h4>
        <AriUpload
          maxSize={2 * 1024 * 1024}
          uploadText="单个文件不超过 2MB"
          onValidationError={handleValidationError}
        />
      </div>
    </AriFlex>
  );
};

export const CustomRenderExample: React.FC = () => {
  const [fileList, setFileList] = useState<AriUploadFile[]>([]);

  const renderFileItem = (file: AriUploadFile, index: number) => (
    <div style={{ 
      padding: '12px 16px', 
      background: '#f8f9fa', 
      borderRadius: '8px',
      border: '1px solid #e9ecef'
    }}>
      <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>
        {file.name}
      </div>
      <div style={{ fontSize: '12px', color: '#666' }}>
        大小: {(file.size / 1024).toFixed(1)} KB | 状态: {file.status}
      </div>
      {file.status === 'uploading' && file.progress && (
        <div style={{ marginTop: '8px' }}>
          <div style={{ 
            width: '100%', 
            height: '4px', 
            background: '#e9ecef', 
            borderRadius: '2px',
            overflow: 'hidden'
          }}>
            <div style={{ 
              width: `${file.progress}%`, 
              height: '100%', 
              background: '#007bff',
              transition: 'width 0.3s ease'
            }} />
          </div>
          <div style={{ fontSize: '12px', marginTop: '4px', color: '#666' }}>
            {file.progress}%
          </div>
        </div>
      )}
    </div>
  );

  return (
    <AriUpload
      fileList={fileList}
      onChange={setFileList}
      renderFileItem={renderFileItem}
      uploadText="自定义文件项渲染"
      uploadDescription="每个文件项都有自定义的样式"
    />
  );
};

export const DisabledExample: React.FC = () => {
  const [fileList, setFileList] = useState<AriUploadFile[]>([
    {
      id: '1',
      name: '示例文件.pdf',
      size: 1024 * 1024,
      type: 'application/pdf',
      status: 'success',
      progress: 100
    }
  ]);

  return (
    <AriFlex vertical space={24}>
      <div>
        <h4>禁用状态</h4>
        <AriUpload
          fileList={fileList}
          onChange={setFileList}
          disabled
          uploadText="上传功能已禁用"
          uploadDescription="无法进行任何上传操作"
        />
      </div>
      
      <div>
        <h4>禁用拖拽排序</h4>
        <AriUpload
          fileList={fileList}
          onChange={setFileList}
          dragSort={false}
          uploadText="文件列表无法排序"
          uploadDescription="可以上传但不能拖拽重排序"
        />
      </div>
    </AriFlex>
  );
};

export const CustomUploadAreaExample: React.FC = () => {
  const [fileList, setFileList] = useState<AriUploadFile[]>([]);

  const renderUploadArea = (dragActive: boolean, disabled: boolean) => (
    <div style={{
      padding: '40px',
      textAlign: 'center',
      border: `2px dashed ${dragActive ? '#007bff' : '#dee2e6'}`,
      borderRadius: '12px',
      background: dragActive ? '#f8f9ff' : '#ffffff',
      transition: 'all 0.3s ease',
      cursor: disabled ? 'not-allowed' : 'pointer'
    }}>
      <div style={{ fontSize: '48px', marginBottom: '16px' }}>
        {dragActive ? '📤' : '📁'}
      </div>
      <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>
        {dragActive ? '松开鼠标上传文件' : '自定义上传区域'}
      </div>
      <div style={{ color: '#666', fontSize: '14px' }}>
        支持拖拽上传，或点击选择文件
      </div>
    </div>
  );

  return (
    <AriUpload
      fileList={fileList}
      onChange={setFileList}
      renderUploadArea={renderUploadArea}
      uploadAreaHeight="200px"
    />
  );
};

export const ManualUploadExample: React.FC = () => {
  const [fileList, setFileList] = useState<AriUploadFile[]>([]);
  const [uploading, setUploading] = useState(false);

  const handleFileSelect = (files: File[]) => {
    // 添加文件到列表，但不自动上传
    const newFiles: AriUploadFile[] = files.map(file => ({
      id: `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
      name: file.name,
      size: file.size,
      type: file.type,
      status: 'pending',
      file
    }));
    
    setFileList(prev => [...prev, ...newFiles]);
  };

  const handleManualUpload = async () => {
    setUploading(true);
    
    // 模拟上传过程
    const pendingFiles = fileList.filter(file => file.status === 'pending');
    
    for (const file of pendingFiles) {
      // 更新状态为上传中
      setFileList(prev => prev.map(f => 
        f.id === file.id ? { ...f, status: 'uploading', progress: 0 } : f
      ));
      
      // 模拟上传进度
      for (let progress = 0; progress <= 100; progress += 10) {
        await new Promise(resolve => setTimeout(resolve, 100));
        setFileList(prev => prev.map(f => 
          f.id === file.id ? { ...f, progress } : f
        ));
      }
      
      // 模拟上传完成
      setFileList(prev => prev.map(f => 
        f.id === file.id ? { ...f, status: 'success', progress: 100 } : f
      ));
    }
    
    setUploading(false);
    AriMessage.success('所有文件上传完成！');
  };

  const hasPendingFiles = fileList.some(file => file.status === 'pending');

  return (
    <AriFlex vertical space={16}>
      <AriUpload
        fileList={fileList}
        onChange={setFileList}
        onUpload={handleFileSelect}
        autoUpload={false}
        uploadText="选择文件（不会自动上传）"
        uploadDescription="选择后需要手动点击上传按钮"
      />
      
      <AriFlex>
        <AriButton 
          type="primary" 
          onClick={handleManualUpload}
          disabled={!hasPendingFiles || uploading}
          loading={uploading}
        >
          {uploading ? '上传中...' : '开始上传'}
        </AriButton>
        
        <AriButton 
          onClick={() => setFileList([])}
          disabled={uploading}
        >
          清空列表
        </AriButton>
      </AriFlex>
    </AriFlex>
  );
};

export const FrontendOnlyExample: React.FC = () => {
  const [fileList, setFileList] = useState<AriUploadFile[]>([]);

  const handleChange = (newFileList: AriUploadFile[]) => {
    setFileList(newFileList);
    console.log('文件列表更新:', newFileList);
  };

  return (
    <AriFlex vertical space={24}>
      <div>
        <h4>纯前端模式</h4>
        <AriUpload
          fileList={fileList}
          onChange={handleChange}
          frontendOnly={true}
          uploadText="选择文件（纯前端模式）"
          uploadDescription="文件选择后直接标记为完成状态，不进行实际上传"
        />
      </div>
      
      <div>
        <h4>文件信息</h4>
        {fileList.length > 0 ? (
          <div style={{ background: '#f8f9fa', padding: '12px', borderRadius: '6px' }}>
            <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>
              已选择 {fileList.length} 个文件:
            </div>
            {fileList.map((file, index) => (
              <div key={file.id} style={{ fontSize: '14px', color: '#666', marginBottom: '4px' }}>
                {index + 1}. {file.name} ({(file.size / 1024).toFixed(1)} KB) - {file.status}
              </div>
            ))}
          </div>
        ) : (
          <div style={{ color: '#999', fontStyle: 'italic' }}>
            暂未选择文件
          </div>
        )}
      </div>
    </AriFlex>
  );
};

export const UploadListControlExample: React.FC = () => {
  const [fileList, setFileList] = useState<AriUploadFile[]>([
    {
      id: 'demo-image',
      name: '封面图.png',
      size: 512 * 1024,
      type: 'image/png',
      status: 'uploading',
      progress: 64,
      url: '/assets/logo/logo.png'
    },
    {
      id: 'demo-doc',
      name: '需求说明.pdf',
      size: 1024 * 1024,
      type: 'application/pdf',
      status: 'success',
      progress: 100
    }
  ]);

  return (
    <AriFlex vertical space={24}>
      <AriUpload
        fileList={fileList}
        onChange={setFileList}
        onRemove={(file, index) => {
          AriMessage.info(`删除文件: ${file.name}（索引 ${index}）`);
        }}
        onReorder={(nextFileList, fromIndex, toIndex) => {
          setFileList(nextFileList);
          AriMessage.info(`文件从 ${fromIndex + 1} 移动到 ${toIndex + 1}`);
        }}
        onPreview={(file) => {
          AriMessage.success(`预览文件: ${file.name}`);
        }}
        listGap="lg"
        showProgress
        showFileSize
        showRemoveButton
        showPreviewButton
        uploadText="拖动文件排序，观察列表间距"
        uploadDescription="当前示例显式覆盖文件列表控制相关 props"
      />

      <AriUpload
        fileList={fileList}
        onChange={setFileList}
        multiple={false}
        dragUpload={false}
        showFileList={false}
        uploadIcon="file_upload"
        uploadText="单文件上传，且关闭拖拽与文件列表"
        uploadDescription="这里只保留点击选择文件，不显示下方列表"
      />
    </AriFlex>
  );
};

export const UploadValidationAndEmptyExample: React.FC = () => {
  const [fileList, setFileList] = useState<AriUploadFile[]>([]);

  return (
    <AriFlex vertical space={24}>
      <AriUpload
        fileList={fileList}
        onChange={setFileList}
        beforeUpload={(file) => {
          const isAllowed = file.name.endsWith('.md') || file.name.endsWith('.txt');
          if (!isAllowed) {
            AriMessage.error('仅允许上传 .md 或 .txt 文件');
          }
          return isAllowed;
        }}
        renderEmpty={() => (
          <div style={{ color: '#888', padding: '12px 0' }}>
            当前没有文件，renderEmpty 正在生效。
          </div>
        )}
        uploadText="上传文档文件"
        uploadDescription="beforeUpload 会阻止非 .md / .txt 文件"
      />
    </AriFlex>
  );
};
