export interface _Props {
    /**
     * 子元素内容
     * 可以包含任何有效的React节点
     */
    children?: React.ReactNode;

    /**
     * 自定义CSS类名
     * 用于覆盖组件默认样式
     * 
     * default: undefined
     */
    className?: string | undefined,
    style?: React.CSSProperties

    id?: string;
    ref?: React.LegacyRef<HTMLDivElement>;

    /**
     * Mouse Events
     */
    onClick?: React.MouseEventHandler<HTMLElement>;
    onContextMenu?: React.MouseEventHandler<HTMLElement>;
    onDoubleClick?: React.MouseEventHandler<HTMLElement>;
    onDrag?: React.DragEventHandler<HTMLElement>;
    onDragEnd?: React.DragEventHandler<HTMLElement>;
    onDragEnter?: React.DragEventHandler<HTMLElement>;
    onDragExit?: React.DragEventHandler<HTMLElement>;
    onDragLeave?: React.DragEventHandler<HTMLElement>;
    onDragOver?: React.DragEventHandler<HTMLElement>;
    onDragStart?: React.DragEventHandler<HTMLElement>;
    onDrop?: React.DragEventHandler<HTMLElement>;
    onMouseDown?: React.MouseEventHandler<HTMLElement>;
    onMouseEnter?: React.MouseEventHandler<HTMLElement>;
    onMouseLeave?: React.MouseEventHandler<HTMLElement>;
    onMouseMove?: React.MouseEventHandler<HTMLElement>;
    onMouseOut?: React.MouseEventHandler<HTMLElement>;
    onMouseOver?: React.MouseEventHandler<HTMLElement>;
    onMouseUp?: React.MouseEventHandler<HTMLElement>;

    /**
     * Form Events
     */
    onChange?: React.FormEventHandler<HTMLElement>;
    onInput?: React.FormEventHandler<HTMLElement>;
    onInvalid?: React.FormEventHandler<HTMLElement>;
    onReset?: React.FormEventHandler<HTMLElement>;
    onSubmit?: React.FormEventHandler<HTMLElement>;

    /**
     * Focus Events
     */
    onFocus?: React.FocusEventHandler<HTMLElement>;
    onBlur?: React.FocusEventHandler<HTMLElement>;

    /**
     * Keyboard Events
     */
    onKeyDown?: React.KeyboardEventHandler<HTMLElement>;
    onKeyPress?: React.KeyboardEventHandler<HTMLElement>;
    onKeyUp?: React.KeyboardEventHandler<HTMLElement>;

    /**
     * Clipboard Events
     */
    onCopy?: React.ClipboardEventHandler<HTMLElement>;
    onCut?: React.ClipboardEventHandler<HTMLElement>;
    onPaste?: React.ClipboardEventHandler<HTMLElement>;

    /**
     * Touch Events
     */
    onTouchCancel?: React.TouchEventHandler<HTMLElement>;
    onTouchEnd?: React.TouchEventHandler<HTMLElement>;
    onTouchMove?: React.TouchEventHandler<HTMLElement>;
    onTouchStart?: React.TouchEventHandler<HTMLElement>;

    /**
     * UI Events
     */
    onScroll?: React.UIEventHandler<HTMLElement>;

    /**
     * Wheel Events
     */
    onWheel?: React.WheelEventHandler<HTMLElement>;

    /**
     * Media Events
     */
    onAnimationStart?: React.AnimationEventHandler<HTMLElement>;
    onAnimationEnd?: React.AnimationEventHandler<HTMLElement>;
    onAnimationIteration?: React.AnimationEventHandler<HTMLElement>;
    onTransitionEnd?: React.TransitionEventHandler<HTMLElement>;
}
