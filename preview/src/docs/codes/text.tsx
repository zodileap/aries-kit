import { AriTypography, AriFlex, AriMessage } from '@aries-kit/react';

export const BasicText: React.FC = () => (
    <AriFlex vertical>
        <AriTypography variant="h1" value="这是一个标题" />
        <AriTypography variant="body" value="这是一段正文内容，展示了最基本的文本组件使用方式。" />
        <AriTypography variant="caption" value="这是一段说明文本" />
    </AriFlex>
);

export const TextEvents: React.FC = () => {
    const handleClick = () => {
        AriMessage.info('文本被点击了');
    };

    const handleMouseEnter = () => {
        AriMessage.info('鼠标移入');
    };

    const handleMouseLeave = () => {
        AriMessage.info('鼠标移出');
    };

    return (
        <AriFlex vertical>
            <AriTypography
                variant="body"
                value="这是一个可点击的文本，点击试试看"
                onClick={handleClick}
            />

            <AriTypography
                variant="body"
                value="这是一个带有鼠标移入移出效果的文本，移动鼠标试试看"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            />
        </AriFlex>
    );
};

export const TextOverflow: React.FC = () => (
    <AriFlex vertical>

        <AriTypography variant="h3" value="单行省略" style={{ marginTop: '1rem' }} />
        <AriTypography variant="body" value="通过内置的text-truncate" />
        <AriTypography
            variant="body"
            value="这是一段很长的文本，当文本内容超出容器宽度时，将显示省略号。这是一段很长的文本，当文本内容超出容器宽度时，将显示省略号。"
            className="text-truncate"
            style={{
                width: '300px',
            }}
        />
        <AriTypography variant="body" value="通过参数设置" />
        <AriTypography
            variant="body"
            value="这是一段很长的文本，当文本内容超出容器宽度时，将显示省略号。这是一段很长的文本，当文本内容超出容器宽度时，将显示省略号。"
            whiteSpace='nowrap'
            overflow='hidden'
            textOverflow='ellipsis'
            style={{
                width: '300px',
            }}
        />

        <AriTypography variant="h3" value="多行省略" style={{ marginTop: '1rem' }} />
        <AriTypography
            variant="body"
            value="这是一段很长的文本，将被限制为两行，文本内容超出两行时，将显示省略号。这是一段很长的文本，将被限制为两行，文本内容超出两行时，将显示省略号。这是一段很长的文本，将被限制为两行，文本内容超出两行时，将显示省略号。"
            overflow='hidden'
            textOverflow='ellipsis'
            lineClamp={2}
            style={{
                width: '300px',
            }}
        />

        <AriTypography variant="h3" value="不换行" style={{ marginTop: '1rem' }} />
        <div style={{ width: '300px', border: '1px dashed #ccc', padding: '8px' }}>
            <AriTypography
                variant="body"
                value="这段文本设置了whiteSpace: nowrap，不会自动换行，可能会超出容器。"
                whiteSpace='nowrap'
            />
        </div>
    </AriFlex>
);

export const TextTypes: React.FC = () => (
    <AriFlex vertical>
        <AriFlex vertical style={{ marginBottom: 20 }}>
            <AriTypography variant="h1" value="标题1文本 - H1" />
            <AriTypography variant="body" value="用于页面的主标题，如主要内容区域的标题、仪表盘的标题、表格/列表的标题。字体最大，视觉重量最重" />
        </AriFlex>

        <AriFlex vertical style={{ marginBottom: 20 }}>
            <AriTypography variant="h2" value="标题2文本 - H2" />
            <AriTypography variant="body" value="用于次级界面元素的标题，如侧边栏导航分组、设置面板的类别标题、模态框的标题" />
        </AriFlex>

        <AriFlex vertical style={{ marginBottom: 20 }}>
            <AriTypography variant="h3" value="标题3文本 - H3" />
            <AriTypography variant="body" value="用于界面中较小内容块的标题，如卡片组件的标题、表单分区的标题、折叠面板的标题" />
        </AriFlex>

        <AriFlex vertical style={{ marginBottom: 20 }}>
            <AriTypography variant="h4" value="标题4文本 - H4" />
            <AriTypography variant="body" value="用于需要突出显示的界面元素，如表格列头、数据卡片上的数值标签、统计图表的标题、筛选选项的标题" />
        </AriFlex>

        <AriFlex vertical style={{ marginBottom: 20 }}>
            <AriTypography variant="overline" value="上标文本 - Overline" />
            <AriTypography variant="body" value="用于目录或导航类元素，如文档页右侧的目录项、树形控件的节点文本、步骤导航的步骤名称" />
        </AriFlex>

        <AriFlex vertical style={{ marginBottom: 20 }}>
            <AriTypography variant="body" value="正文文本 - Body " />
            <AriTypography variant="body" value="用于界面的主要文本内容，如段落文本、描述信息、对话框内容、列表项文本。这是最常用的文本样式" />
        </AriFlex>

        <AriFlex vertical style={{ marginBottom: 20 }}>
            <AriTypography variant="caption" value="说明文本 - Caption" />
            <AriTypography variant="body" value="用于最小级别的辅助说明，如输入框下方的格式提示、图表下方的数据说明、文件上传区域的格式限制、表格底部的提示信息。" />
        </AriFlex>
    </AriFlex>
);