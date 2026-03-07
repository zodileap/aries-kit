import { useState, useEffect, useContext } from 'react';
import { appLayoutState } from "@ari/repository/state";
import { useCss } from "@ari/utils";
import { AriIcon } from "@ari/components/icon";
import { AriImageProps } from '@ari/types/components';
import { AriButton } from '../button';

/**
 * 图片组件
 * 支持普通图片和背景图片两种显示模式
 * 
 * Example:
 * {@link https://aries-react.dev/docs/image}
 */
export const AriImage: React.FC<AriImageProps> = ({
    fileName,
    usage,
    alt,
    fallback,
    height,
    placeholder = false,
    preview = false,
    src,
    width,
    onError,
    className,
    ...props
}) => {
    const cs = useCss("image");
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [previewVisible, setPreviewVisible] = useState(false);
    const [imgUrl, setImgUrl] = useState("");
    const layoutState = useContext(appLayoutState);

    const joinPath = (base: string, file: string): string => {
        if (!base) {
            return file;
        }
        if (!file) {
            return base;
        }
        return `${base.replace(/\/+$/, "")}/${file.replace(/^\/+/, "")}`;
    };

    useEffect(() => {
        if (src) {
            setImgUrl(src || "");
            return;
        }
        const filePath = joinPath(layoutState?.appConfig.localImgSrc || "", fileName || "");
        setImgUrl(filePath ? new URL(filePath, import.meta.url).href : "");
    }, [layoutState?.appConfig.localImgSrc, fileName, src]);

    const handleLoad = () => {
        setIsLoading(false);
    };

    const handleError = () => {
        setIsLoading(false);
        setIsError(true);
        if (onError) {
            onError();
        }
    };

    const handlePreviewClick = () => {
        if (preview && !isError) {
            setPreviewVisible(true);
        }
    };

    const handlePreviewClose = () => {
        setPreviewVisible(false);
    };

    // 渲染错误状态下的fallback
    if (isError) {
        return (
            <div
                className={cs.gen(cs.b(), cs.e("fallback"), className)}
                style={{ width, height }}
            >
                {fallback || (
                    <>
                        <AriIcon name="image-broken" />
                        <span>图片加载失败</span>
                    </>
                )}
            </div>
        );
    }

    return (
        <div
            className={cs.gen(
                cs.b(),
                cs.m(`${usage}`),
                cs.is("placeholder", isLoading && placeholder),
                cs.is("preview", preview),
                className
            )}
            style={{ width, height }}
            onClick={handlePreviewClick}
        >
            {imgUrl && (
                <img
                    className={cs.e("img")}
                    alt={alt || fileName}
                    src={imgUrl}
                    onLoad={handleLoad}
                    onError={handleError}
                    {...props}
                />
            )}

            {/* 预览模态框 */}
            {preview && previewVisible && (
                <div className={cs.e("preview-modal")} onClick={handlePreviewClose}>
                    <div className={cs.e("preview-content")} onClick={e => e.stopPropagation()}>
                        <img src={imgUrl} alt={alt || fileName} />
                        <AriButton
                            className={cs.e("preview-close")}
                            onClick={handlePreviewClose}
                            icon="close"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};
