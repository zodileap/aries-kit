import React, { useState } from 'react';
import { AriRadio, AriFlex } from '@aries-kit/react';

/**
 * 基础用法示例
 * 展示单个Radio的基本用法
 */
export const BasicRadio: React.FC = () => {
  const [value, setValue] = useState<string>('1');
  
  const handleChange = (_e: React.ChangeEvent<HTMLInputElement>, val: string | number) => {
    setValue(val as string);
  };
  
  return (
    <AriFlex vertical space={16}>
      <AriRadio
        value="1"
        name="basic-radio"
        checked={value === "1"}
        onChange={handleChange}
        label="选项1"
      />
      <AriRadio
        value="2"
        name="basic-radio"
        checked={value === "2"}
        onChange={handleChange}
        label="选项2"
      />
      <AriRadio
        name="default-radio"
        value="default"
        defaultChecked={true}
        label="默认选中（非受控）"
      />
    </AriFlex>
  );
};

/**
 * 单选框组示例
 * 使用RadioGroup统一管理一组Radio
 */
export const RadioGroupExample: React.FC = () => {
  const [value, setValue] = useState<string>('a');
  
  return (
    <AriRadio.Group
      name="radio-group-example"
      value={value}
      onChange={(val) => setValue(val as string)}
    >
      <AriRadio value="a" label="选项A" />
      <AriRadio value="b" label="选项B" />
      <AriRadio value="c" label="选项C" />
      <AriRadio value="d" label="选项D" disabled />
    </AriRadio.Group>
  );
};

/**
 * 使用options属性创建单选框组
 */
export const RadioGroupWithOptions: React.FC = () => {
  const [value, setValue] = useState<string>('apple');
  
  const options = [
    { label: '苹果', value: 'apple' },
    { label: '香蕉', value: 'banana' },
    { label: '橙子', value: 'orange' },
    { label: '葡萄', value: 'grape', disabled: true }
  ];
  
  return (
    <AriRadio.Group
      name="radio-options-example"
      options={options}
      value={value}
      onChange={(val) => setValue(val as string)}
    />
  );
};

/**
 * 按钮样式的单选框组
 */
export const RadioButtonExample: React.FC = () => {
  const [value, setValue] = useState<string>('small');
  
  return (
    <AriFlex vertical space={16}>
      <AriRadio.Group
        name="radio-button-example"
        value={value}
        onChange={(val) => setValue(val as string)}
      >
        <AriRadio.Button value="small">小号</AriRadio.Button>
        <AriRadio.Button value="medium">中号</AriRadio.Button>
        <AriRadio.Button value="large">大号</AriRadio.Button>
      </AriRadio.Group>
      
      <AriRadio.Group
        name="radio-button-disabled-example"
        value={value}
        onChange={(val) => setValue(val as string)}
        disabled
      >
        <AriRadio.Button value="small">小号(禁用)</AriRadio.Button>
        <AriRadio.Button value="medium">中号(禁用)</AriRadio.Button>
        <AriRadio.Button value="large">大号(禁用)</AriRadio.Button>
      </AriRadio.Group>
    </AriFlex>
  );
};

/**
 * 不同尺寸的单选框
 */
export const RadioSizesExample: React.FC = () => {
  const [value, setValue] = useState<string>('default');
  
  const handleChange = (_e: React.ChangeEvent<HTMLInputElement>, val: string | number) => {
    setValue(val as string);
  };
  
  return (
    <AriFlex vertical space={16}>
      <AriRadio 
        value="small" 
        name="size-radio"
        checked={value === "small"}
        onChange={handleChange}
        label="小尺寸" 
        size="sm" 
      />
      <AriRadio 
        value="default" 
        name="size-radio"
        checked={value === "default"}
        onChange={handleChange}
        label="默认尺寸" 
        size="default" 
      />
      <AriRadio 
        value="large" 
        name="size-radio"
        checked={value === "large"}
        onChange={handleChange}
        label="大尺寸" 
        size="lg" 
      />
    </AriFlex>
  );
};
