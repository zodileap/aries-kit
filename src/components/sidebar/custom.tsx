import { AriMenuItemProps, AriSidebarProps } from "@ari/types/components";
import { useCss } from "@ari/utils";
import { useState } from "react";
import AriMenu from "../menu";


/**
 * 侧边栏组件 
 * 
 * Example: 
 * {@link https://aries-react.dev/docs/sidebar}
 */
export const AriCustomSidebar: React.FC<AriSidebarProps> = ({
    direction = 'left',
    activityBarPosition = 'side',
    activityBarItems,
    content,
    width = 300,
    className,
    onNodeSelect,
    onActivityChange,
}) => {
    const cs = useCss('sidebar');
    const [activeItemId, setActiveItemId] = useState<string | null>(
        activityBarItems?.[0]?.key ?? null
    );

    // 处理活动栏项目点击
    const handleActivityItemClick = (item: AriMenuItemProps) => {
        setActiveItemId(item.key);
        const activityItem = getActivityItem(item.key);
        if (activityItem) {
            onActivityChange?.(activityItem);
        }
    };

    const getActivityItem = (key: string) => {
        return activityBarItems?.find(item => item.key === key);
    }

    // 渲染活动栏
    const renderActivityBar = () => {
        if (!activityBarItems?.length) return null;

        const menuItems: AriMenuItemProps[] = activityBarItems.map(item => ({
            key: item.key,
            icon: item.icon,
        }));

        return (
            <div className={cs.e('activity-bar')}>
                <AriMenu
                    mode={activityBarPosition === 'side' ? 'vertical' : 'horizontal'}
                    items={menuItems}
                    onSelect={(_, item) => handleActivityItemClick(item)}
                />
            </div>
        );
    };

    // 渲染内容区域
    const renderContent = () => {
        // 如果有活动栏，根据当前活动项渲染内容
        if (activityBarItems?.length && activeItemId) {
            const activeItem = activityBarItems.find(item => item.key === activeItemId);
            if (!activeItem) return null;

            return activeItem.content;
        }

        // 没有活动栏时直接显示内容
        return content;
    };

    return (
        <div
            className={cs.gen(
                cs.b(),
                cs.m(direction),
                cs.m(`activity-bar-${activityBarPosition}`),
                className
            )}
            style={{ width }}
        >
            {renderActivityBar()}
            <div className={cs.e('content')}>
                {renderContent()}
            </div>
        </div>
    );
};