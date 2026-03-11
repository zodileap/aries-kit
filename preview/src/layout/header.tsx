import { AriIcon } from "@ari/components";
import { useEffect, useState } from "react";
import { getColorTheme, onThemeChange, setColorTheme } from "@ari/init";

interface NavigationProps {
    showMenuToggle?: boolean;
    isSidebarOpen?: boolean;
    onToggleSidebar?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
    showMenuToggle = false,
    isSidebarOpen = false,
    onToggleSidebar
}) => {
    const [_theme, _setColorTheme] = useState(getColorTheme());

    // 切换主题
    const toggleTheme = () => {
        const newTheme = getColorTheme() === 'light' ? 'dark' : 'light';
        setColorTheme(newTheme);
        _setColorTheme(newTheme);
    };

    useEffect(() => {
        const unsubscribe = onThemeChange(() => {
            _setColorTheme(getColorTheme());
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <header className="doc-layout__header">
            <div className="doc-layout__brand">
                {showMenuToggle && (
                    <button
                        type="button"
                        className="doc-layout__icon-button"
                        onClick={onToggleSidebar}
                        aria-label={isSidebarOpen ? '关闭导航菜单' : '打开导航菜单'}
                    >
                        <AriIcon name={isSidebarOpen ? "close" : "menu"} />
                    </button>
                )}
                <img
                    src='/assets/logo/logo.png'
                    alt='Aries Kit'
                    className="doc-layout__logo"
                />
            </div>
            <div className="doc-layout__header-actions">
                {_theme === 'light' ? (
                    <button
                        type="button"
                        className="doc-layout__icon-button"
                        onClick={toggleTheme}
                        aria-label="切换到深色主题"
                    >
                        <AriIcon name="sunny" />
                    </button>
                ) : (
                    <button
                        type="button"
                        className="doc-layout__icon-button"
                        onClick={toggleTheme}
                        aria-label="切换到浅色主题"
                    >
                        <AriIcon name="dark_mode_fill" />
                    </button>
                )}
            </div>
        </header>
    );
};
