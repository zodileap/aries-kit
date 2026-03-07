import { AriButton, AriCheckbox, AriFlex, AriCheckboxGroup } from '@aries-kit/react';
import { useState } from 'react';

export const BasicCheckbox: React.FC = () => {
    const [checked, setChecked] = useState(false);

    return (
        <AriFlex>
            <AriCheckbox
                checked={checked}
                onChange={setChecked}
            >
                点击选择
            </AriCheckbox>
            <AriButton label="选择" onClick={() => setChecked(!checked)} />
        </AriFlex>
    );
};

export const DisabledDemo: React.FC = () => {
    return (
        <AriFlex vertical>
            <AriCheckbox checked={false} onChange={() => { }} disabled>
                禁用未选中
            </AriCheckbox>
            <AriCheckbox checked={true} onChange={() => { }} disabled>
                禁用已选中
            </AriCheckbox>
        </AriFlex>
    );
};

export const IndeterminateDemo: React.FC = () => {
    const [checkedAll, setCheckedAll] = useState(false);
    const [indeterminate, setIndeterminate] = useState(false);
    const [checkedList, setCheckedList] = useState<string[]>([]);
    
    const options = ['苹果', '香蕉', '橙子'];
    
    const onCheckAllChange = (checked: boolean) => {
        setCheckedAll(checked);
        setIndeterminate(false);
        setCheckedList(checked ? options : []);
    };
    
    const onChange = (list: Array<string | number>) => {
        setCheckedList(list as string[]);
        setIndeterminate(list.length > 0 && list.length < options.length);
        setCheckedAll(list.length === options.length);
    };
    
    return (
        <AriFlex vertical>
            <AriCheckbox 
                checked={checkedAll} 
                indeterminate={indeterminate}
                onChange={onCheckAllChange}
            >
                全选
            </AriCheckbox>
            
            <div style={{ margin: '8px 0 0 24px' }}>
                <AriCheckboxGroup
                    value={checkedList}
                    onChange={onChange}
                >
                    {options.map((option) => (
                        <AriCheckbox key={option} value={option}>
                            {option}
                        </AriCheckbox>
                    ))}
                </AriCheckboxGroup>
            </div>
        </AriFlex>
    );
};

export const CheckboxGroupDemo: React.FC = () => {
    const [value, setValue] = useState<Array<string | number>>(['选项1', '选项3']);
    
    return (
        <AriFlex vertical>
            <AriCheckboxGroup value={value} onChange={setValue}>
                <AriCheckbox value="选项1">选项1</AriCheckbox>
                <AriCheckbox value="选项2">选项2</AriCheckbox>
                <AriCheckbox value="选项3">选项3</AriCheckbox>
                <AriCheckbox value="选项4" disabled>选项4（禁用）</AriCheckbox>
            </AriCheckboxGroup>
            
            <div style={{ marginTop: '16px' }}>
                当前选中的值: {JSON.stringify(value)}
            </div>
        </AriFlex>
    );
};