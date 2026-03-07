import { AriIcon, AriNav } from "@ari/components";
import { useEffect, useState } from "react";
import { getColorTheme, onThemeChange, setColorTheme } from "@ari/init";

export const Navigation: React.FC = () => {
    const [_theme, _setColorTheme] = useState(getColorTheme());

    const unsubscribe = onThemeChange(() => {
        _setColorTheme(getColorTheme());
    });

    // 切换主题
    const toggleTheme = () => {
        const newTheme = getColorTheme() === 'light' ? 'dark' : 'light';
        setColorTheme(newTheme);
        _setColorTheme(newTheme);
    };

    useEffect(() => {
        return () => {
            unsubscribe();
        };
    });

    return (
        <div style={{ height: "60px", display: 'flex', justifyContent: 'space-between', padding: '0 calc(var(--z-padding-element) + 0rem)' }} >
            <AriIcon
                name='logo-word'
                fullPath='/assets/logo/logo-circle.svg'
            />
            <div style={{ display: 'flex', alignItems: 'center' }}>
                {/* 根据当前主题显示相应图标并添加点击事件 */}
                {_theme === 'light' ? (
                    <AriIcon name="sunny" onClick={toggleTheme} style={{ cursor: 'pointer' }} />
                ) : (
                    <AriIcon name="dark_mode_fill" onClick={toggleTheme} style={{ cursor: 'pointer' }} />
                )}
            </div>
        </div>
    );
};