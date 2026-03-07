import { useContext, useEffect, useCallback, Children, cloneElement, isValidElement, useState, ReactNode } from 'react';
import { AriFormItemProps, AriFormRule } from '@ari/types/components/form';
import { FormContext, getRulesByPath } from './context';
import { AriCol, AriRow } from '@ari/components/grid';
import { useCss } from '@ari/utils';
import { AriTypography } from '../typography';
import { AriIcon } from '@ari/components/icon';
import { AriTooltip } from '@ari/components/tooltip';

/**
 * 表单项组件
 * 用于包装表单控件，提供标签、错误信息等功能
 * 
 * Example:
 * ```tsx
 * <AriFormItem 
 *   label="用户名" 
 *   name="username" 
 *   required 
 *   labelCol={6} 
 *   wrapperCol={18}
 *   tooltip="用户唯一标识，请使用英文字母"
 *   titleNode={<span style={{ color: 'blue' }}>（必填）</span>}
 * >
 *   <AriInput placeholder="请输入用户名" />
 * </AriFormItem>
 * ```
 */
export const AriFormItem: React.FC<AriFormItemProps> = ({
    children,
    className,
    label,
    required = false,
    error: propError,
    help,
    name,
    density: itemDensity,
    labelWidth: itemLabelWidth,
    colon = true,
    labelAlign: itemLabelAlign,
    labelCol: itemLabelCol,
    wrapperCol: itemWrapperCol,
    rules: itemRules,
    valuePropName = 'value',
    tooltip,
    titleNode,
    ...props
}) => {
    const cs = useCss("form-item");
    // 尝试使用表单上下文，如果不在表单内则忽略
    const formContext = useContext(FormContext);

    // 如果提供了name和rules，向表单注册该字段及其规则
    useEffect(() => {
        if (name && formContext && formContext.registerField) {
            // 如果表单项具有required属性但没有提供rules，创建一个required规则
            if (required && (!itemRules || itemRules.length === 0)) {
                formContext.registerField(name, [{ required: true, message: '此字段为必填项' }]);
            } else {
                formContext.registerField(name, itemRules);
            }
        }
    }, [name, formContext, itemRules, required]);

    // 检查是否为实际上的必填项（通过规则判断）
    const isRequired = useCallback(() => {
        // 如果props直接指定了required，则直接返回true
        if (required) return true;

        // 如果有rules属性，检查是否包含required规则
        if (itemRules) {
            return itemRules.some((rule) => rule.required);
        }

        // 如果有name属性，检查表单rules中是否包含required规则
        if (name && formContext?.rules) {
            const fieldRules = getRulesByPath(formContext.rules, name);
            return fieldRules.some(rule => rule.required);
        }

        return false;
    }, [required, itemRules, name, formContext]);

    const [isVisible, setIsVisible] = useState(false);
    
    // 确定使用的表单布局方式
    const layout = formContext?.layout || 'horizontal';

    // 确定使用的间距密度（优先级：表单项 > 表单）
    const density = itemDensity || formContext?.density || 'default';
    
    // 确定使用的标签对齐方式（优先级：表单项 > 表单）
    const labelAlign = itemLabelAlign || (formContext?.labelAlign || 'right');

    // 确定使用的标签宽度（优先级：表单项 > 表单）
    const labelWidth = itemLabelWidth || formContext?.labelWidth;

    // 确定使用的栅格配置（优先级：表单项 > 表单）
    const labelCol = itemLabelCol || formContext?.labelCol;
    const wrapperCol = itemWrapperCol || formContext?.wrapperCol;

    // 获取表单上下文中的size
    const size = formContext?.size;

    // 构建标签样式
    const labelStyle: React.CSSProperties = {};
    if (labelWidth !== undefined && !labelCol && layout === 'horizontal') {
        labelStyle.width = typeof labelWidth === 'number' ? `${labelWidth}px` : labelWidth;
    }

    // 检查是否有错误（优先显示prop传入的错误）
    const errorMessage = propError || (name && formContext ? formContext.errors[Array.isArray(name) ? name.join('.') : name] : undefined);

    useEffect(() => {
        if (errorMessage) {
            // 显示错误消息
            setIsVisible(true);
        } else {
            // 隐藏错误消息
            setIsVisible(false);
        }
    }, [errorMessage]);

    // 处理子元素输入变化
    const handleChildChange = (value: any) => {
        if (name && formContext) {
            // 获取更新前的值
            const prevValue = formContext.getFieldValue(name);
            formContext.setFieldValue(name, value, prevValue);
        }
    };

    // 将labelCol和wrapperCol转换为Col组件的props
    const getLabelColProps = () => {
        if (!labelCol) return {};

        if (typeof labelCol === 'number') {
            return { span: labelCol };
        }

        return labelCol;
    };

    const getWrapperColProps = () => {
        if (!wrapperCol) return {};

        if (typeof wrapperCol === 'number') {
            return { span: wrapperCol };
        }

        return wrapperCol;
    };

    // 克隆子元素，根据不同情况注入属性
    let injectedChildren: ReactNode = children;
    
    // 将子元素处理逻辑拆分为两个部分：
    // 1. 带有name属性的表单项：注入value和onChange，以及size属性
    // 2. 不带name的表单项：仅注入size属性（如果存在）
    
    if (children) {
        injectedChildren = Children.map(children, (child) => {
            if (isValidElement(child)) {
                // 准备要注入的属性
                const childProps: any = {};
                
                // 如果有name且在表单上下文内，注入value和onChange
                if (name && formContext) {
                    // 注入值
                    const fieldValue = formContext.getFieldValue(name);
                    
                    // 检查子组件是否已经有value属性，避免覆盖默认值或受控状态
                    if (child.props[valuePropName] === undefined) {
                        childProps[valuePropName] = fieldValue === undefined ? undefined : fieldValue;
                    }

                    // 注入onChange
                    const originalOnChange = child.props.onChange;
                    childProps.onChange = (e: any, ...args: any) => {
                        // 获取更新前的值
                        const prevValue = formContext.getFieldValue(name);
                        
                        // 尝试从事件对象或直接值获取更新值
                        const value = e?.target?.[valuePropName] !== undefined ? e.target[valuePropName] : e;
                        handleChildChange(value);

                        // 调用原始的onChange处理函数（如果存在）
                        if (originalOnChange) {
                            originalOnChange(e, ...args);
                        }
                    };
                }

                // 无论是否有name，都注入size属性（如果存在且子组件没有明确指定）
                if (size && child.props.size === undefined) {
                    childProps.size = size;
                }
                
                // 只有当有属性需要注入时才克隆元素
                if (Object.keys(childProps).length > 0) {
                    return cloneElement(child, childProps);
                }
            }
            
            // 如果不需要注入属性或不是有效的React元素，直接返回原始子元素
            return child;
        });
    }

    // 是否显示必填星号
    const showRequired = isRequired();

    // 根据布局方式渲染不同结构
    if (layout === 'vertical') {
        return (
            <AriRow className={cs.gen(cs.b(), cs.m(layout), cs.m(`density-${density}`), className)} {...props}>
                {label && (
                    <AriCol className={cs.gen(cs.e('label'), cs.m(labelAlign))}  {...getLabelColProps()}>
                        {showRequired && <span className={cs.e('required')}>*</span>}
                        {label}
                        {tooltip && (
                            <AriTooltip content={tooltip} position="top">
                                <AriIcon name="info" size="sm" style={{ marginLeft: '4px', cursor: 'help' }} />
                            </AriTooltip>
                        )}
                        {titleNode}
                        {help && <div className={cs.e('help')}>{help}</div>}
                        {colon && <span className={cs.e('colon')}>:</span>}
                    </AriCol>
                )}
                <AriCol className={cs.e('content')} {...getWrapperColProps()}>
                    <div className={cs.e('control')}>{injectedChildren}</div>
                    <AriTypography variant='caption' color='error' className={cs.gen(
                        cs.e('error'),
                        cs.is('visible', isVisible)
                    )} value={errorMessage || ""} />
                </AriCol>
            </AriRow>
        );
    }

    if (layout === 'inline') {
        return (
            <AriRow className={cs.gen(cs.b(), cs.m(layout), cs.m(`density-${density}`), className)} {...props}>
                {label && (
                    <AriCol className={cs.gen(cs.e('label'), cs.m(labelAlign))} style={labelStyle}  {...getLabelColProps()}>
                        {showRequired && <span className={cs.e('required')}>*</span>}
                        {label}
                        {tooltip && (
                            <AriTooltip content={tooltip} position="top">
                                <AriIcon name="info" size="sm" style={{ marginLeft: '4px', cursor: 'help' }} />
                            </AriTooltip>
                        )}
                        {titleNode}
                        {help && <div className={cs.e('help')}>{help}</div>}
                        {colon && <span className={cs.e('colon')}>:</span>}
                    </AriCol>
                )}
                <AriCol className={cs.e('content')} {...getWrapperColProps()}>
                    <div className={cs.e('control')}>{injectedChildren}</div>
                    <AriTypography variant='caption' color='error' className={cs.gen(
                        cs.e('error'),
                        cs.is('visible', isVisible)
                    )} value={errorMessage || ""} />
                </AriCol>
            </AriRow>
        );
    }

    // horizontal布局，使用Row和Col组件
    return (
        <AriRow className={cs.gen(cs.b(), cs.m(layout), cs.m(`density-${density}`), className)} {...props}>
            {label ? (
                <AriCol
                    className={cs.gen(cs.e('label'), cs.m(labelAlign))}
                    style={labelStyle}
                    {...getLabelColProps()}
                >
                    {showRequired && <span className={cs.e('required')}>*</span>}
                    {label}
                    {tooltip && (
                        <AriTooltip content={tooltip} position="top">
                            <AriIcon name="info" size="sm" style={{ marginLeft: '4px', cursor: 'help' }} />
                        </AriTooltip>
                    )}
                    {titleNode}
                    {help && <div className={cs.e('help')}>{help}</div>}
                    {colon && <span className={cs.e('colon')}>:</span>}
                </AriCol>
            ) : <AriCol style={labelStyle} {...getLabelColProps()}>
            </AriCol>}
            <AriCol className={cs.e('content')} {...getWrapperColProps()}>
                <div className={cs.e('control')}>{injectedChildren}</div>
                <AriTypography variant='caption' color='error' className={cs.gen(
                    cs.e('error'),
                    cs.is('visible', isVisible)
                )} value={errorMessage || ""} />
            </AriCol>

        </AriRow>
    );
};