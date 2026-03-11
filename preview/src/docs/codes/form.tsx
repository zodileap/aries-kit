import { AriButton, AriFlex, AriForm, AriFormItem, AriInput, AriTextInput, AriRow, AriCol, AriMessage, useForm, AriFormInstance, AriTypography, AriIcon } from '@aries-kit/react';
import { useRef } from 'react';

const narrowFormStyle = {
    width: '100%',
    maxWidth: 600,
};

const wideFormStyle = {
    width: '100%',
    maxWidth: 700,
};

export const BasicForm: React.FC = () => (
    <AriForm
        labelAlign="right"
        labelWidth={100}
        style={narrowFormStyle}
        initialValues={{ user: { name: 'John' } }}
        rules={{
            user: {
                name: { required: true, message: '请输入用户名' },
                email: [
                    { required: true, message: '请输入邮箱' },
                    { pattern: /^\S+@\S+$/, message: '邮箱格式不正确' }
                ]
            }
        }}
        onFinish={(values) => {
            console.log('表单提交成功:', values);
        }}
        onFinishFailed={(errorFields, values) => {
            console.log('表单校验失败:', errorFields);
        }}
    >
        <AriFormItem name="user.name" label="用户名">
            <AriInput />
        </AriFormItem>
        <AriFormItem name="user.email" label="邮箱">
            <AriInput />
        </AriFormItem>
        <AriFormItem>
            <AriButton htmlType="submit">提交</AriButton>
        </AriFormItem>
    </AriForm>
);

export const LayoutDemo: React.FC = () => (
    <>
        <AriFlex vertical space={24}>
            <AriFlex vertical>
                <AriTypography variant='h4' value='水平布局（默认）' />
                <AriForm layout="horizontal" style={narrowFormStyle} labelWidth={80}>
                    <AriFormItem label="用户名" required>
                        <AriInput placeholder="请输入用户名" />
                    </AriFormItem>
                    <AriFormItem label="密码" required>
                        <AriInput type="password" placeholder="请输入密码" />
                    </AriFormItem>
                    <AriFormItem>
                        <AriButton color="primary">提交</AriButton>
                    </AriFormItem>
                </AriForm>
            </AriFlex>
            <AriFlex vertical>
                <AriTypography variant='h4' value='垂直布局' />
                <AriForm layout="vertical" style={narrowFormStyle}>
                    <AriFormItem label="用户名" required>
                        <AriInput placeholder="请输入用户名" />
                    </AriFormItem>
                    <AriFormItem label="密码" required>
                        <AriInput type="password" placeholder="请输入密码" />
                    </AriFormItem>
                    <AriFormItem>
                        <AriButton color="primary">提交</AriButton>
                    </AriFormItem>
                </AriForm>
            </AriFlex>
            <AriFlex vertical>
                <AriTypography variant='h4' value='内联布局' />
                <AriForm layout="inline">
                    <AriFormItem label="用户名">
                        <AriInput placeholder="用户名" />
                    </AriFormItem>
                    <AriFormItem label="密码">
                        <AriInput type="password" placeholder="密码" />
                    </AriFormItem>
                    <AriFormItem>
                        <AriButton color="primary">登录</AriButton>
                    </AriFormItem>
                </AriForm>
            </AriFlex>
        </AriFlex>
    </>
);

export const ValidationDemo: React.FC = () => {
    const handleFinish = (values: any) => {
        console.log('表单值:', values);
        AriMessage.success('表单验证通过');
    };

    const handleFinishFailed = (errorFields: any, values: any) => {
        console.log('验证失败:', errorFields);
        AriMessage.danger('表单验证失败');
    };

    return (
      <AriForm
        layout="horizontal"
        density="loose"
        size="lg"
        labelWidth={100}
        onFinish={handleFinish}
        onFinishFailed={handleFinishFailed}
        className="preview-validation-form"
        style={narrowFormStyle}
      >
        <AriFormItem
          label="用户名"
          name="username"
          className="preview-validation-item"
          colon={false}
          error="该表单项固定展示 error 属性示例"
          rules={[
            { required: true, message: "请输入用户名" },
            { min: 3, max: 20, message: "用户名长度必须在3-20个字符之间" },
          ]}
          help={<AriIcon name="info" />}
          tooltip="用户名将用于登录系统，请谨慎选择"
        >
          <AriInput placeholder="请输入用户名" />
        </AriFormItem>

        <AriFormItem
          label="邮箱"
          name="email"
          rules={[
            { required: true, message: "请输入邮箱" },
            {
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "邮箱格式不正确",
            },
          ]}
        >
          <AriInput placeholder="请输入邮箱" />
        </AriFormItem>

        <AriFormItem
          label="密码"
          name="password"
          rules={[
            { required: true, message: "请输入密码" },
            { min: 6, message: "密码长度不能少于6个字符" },
          ]}
        >
          <AriInput type="password" placeholder="请输入密码" />
        </AriFormItem>

        <AriFormItem
          label="确认密码"
          name="confirmPassword"
          rules={[
            { required: true, message: "请确认密码" },
            {
              validator: (value, values) =>
                value === values.password ? undefined : "两次输入的密码不一致",
            },
          ]}
        >
          <AriInput type="password" placeholder="请再次输入密码" />
        </AriFormItem>

        <AriFormItem>
          <AriButton color="primary" htmlType="submit">
            提交
          </AriButton>
        </AriFormItem>
      </AriForm>
    );
};

export const NestedFieldsDemo: React.FC = () => {
    const initialValues = {
        user: {
            name: 'John Doe',
            contact: {
                email: 'john@example.com',
                phone: '13800138000'
            }
        },
        address: {
            city: '北京',
            street: '朝阳区'
        }
    };

    const handleFinish = (values: any) => {
        console.log('表单值:', values);
        AriMessage.success('提交成功');
    };

    return (
        <AriForm
            layout="horizontal"
            labelWidth={120}
            initialValues={initialValues}
            onFinish={handleFinish}
            style={narrowFormStyle}
        >
            <AriFormItem label="用户名" name="user.name" required>
                <AriInput />
            </AriFormItem>

            <AriFormItem label="邮箱" name="user.contact.email" required>
                <AriInput />
            </AriFormItem>

            <AriFormItem label="电话" name="user.contact.phone">
                <AriInput />
            </AriFormItem>

            <AriFormItem label="城市" name={['address', 'city']}>
                <AriInput />
            </AriFormItem>

            <AriFormItem label="街道地址" name={['address', 'street']}>
                <AriInput />
            </AriFormItem>

            <AriFormItem>
                <AriButton color="primary" htmlType="submit">
                    提交
                </AriButton>
            </AriFormItem>
        </AriForm>
    );
};


export const CustomLayoutDemo: React.FC = () => (
    <AriForm style={wideFormStyle}>
        {/* 标准布局 */}
        <AriFormItem
            label="默认布局"
            labelCol={6}
            wrapperCol={18}
        >
            <AriInput placeholder="标签占6列，控件占18列" />
        </AriFormItem>

        {/* 自定义标签宽度 */}
        <AriFormItem
            label="窄标签"
            labelCol={4}
            wrapperCol={20}
        >
            <AriInput placeholder="标签占4列，控件占20列" />
        </AriFormItem>

        {/* 宽标签 */}
        <AriFormItem
            label="宽标签文本示例"
            labelCol={8}
            wrapperCol={16}
        >
            <AriInput placeholder="标签占8列，控件占16列" />
        </AriFormItem>

        {/* 带偏移量的控件 */}
        <AriFormItem
            labelCol={6}
            wrapperCol={{ span: 18, offset: 6 }}
        >
            <AriButton color="primary">提交</AriButton>
        </AriFormItem>
    </AriForm>
);

export const DirectionDemo: React.FC = () => (
    <>
        <AriForm layout="vertical" style={{ marginBottom: '20px' }}>
            <AriFormItem label="垂直布局">
                <AriTextInput />
            </AriFormItem>
            <AriFormItem label="示例输入">
                <AriTextInput />
            </AriFormItem>
        </AriForm>

        <AriForm layout="horizontal">
            <AriFormItem label="水平布局">
                <AriTextInput />
            </AriFormItem>
            <AriFormItem label="示例输入">
                <AriTextInput />
            </AriFormItem>
        </AriForm>
    </>
);




export const ResponsiveDemo: React.FC = () => (
    <AriForm layout="vertical">
        <AriRow gutter={16}>
            <AriCol xs={24} sm={24} md={12} lg={12} xl={12}>
                <AriFormItem label="姓" required>
                    <AriInput placeholder="请输入姓" />
                </AriFormItem>
            </AriCol>
            <AriCol xs={24} sm={24} md={12} lg={12} xl={12}>
                <AriFormItem label="名" required>
                    <AriInput placeholder="请输入名" />
                </AriFormItem>
            </AriCol>
        </AriRow>

        <AriFormItem label="邮箱" required>
            <AriInput placeholder="请输入邮箱" />
        </AriFormItem>

        <AriRow gutter={16}>
            <AriCol xs={24} sm={24} md={8} lg={8} xl={8}>
                <AriFormItem label="省/自治区/直辖市">
                    <AriInput placeholder="省份" />
                </AriFormItem>
            </AriCol>
            <AriCol xs={24} sm={12} md={8} lg={8} xl={8}>
                <AriFormItem label="城市">
                    <AriInput placeholder="城市" />
                </AriFormItem>
            </AriCol>
            <AriCol xs={24} sm={12} md={8} lg={8} xl={8}>
                <AriFormItem label="区县">
                    <AriInput placeholder="区县" />
                </AriFormItem>
            </AriCol>
        </AriRow>

        <AriFormItem label="详细地址">
            <AriInput placeholder="街道门牌信息" />
        </AriFormItem>

        <AriFormItem>
            <AriButton color="primary">提交</AriButton>
        </AriFormItem>
    </AriForm>
);

export const UseRefDemo: React.FC = () => {
    // 创建表单ref
    const formRef = useRef<AriFormInstance>(null);

    // 表单方法调用示例
    const handleReset = () => {
        formRef.current?.resetFields();
    };

    const handleFill = () => {
        formRef.current?.setFieldsValue({
            username: 'admin',
            password: '123456'
        });
    };

    const handleGetValues = () => {
        const values = formRef.current?.getFieldsValue();
        console.log('当前表单值：', values);
        alert(JSON.stringify(values, null, 2));
    };

    const handleValidate = () => {
        formRef.current?.validate().then((res) => {
            if (res.isValid) {
                AriMessage.success('表单验证通过');
            } else {
                AriMessage.danger('表单验证失败');
            }
        })
    }

    return (
        <>
            <AriForm
                ref={formRef}
                style={narrowFormStyle}
                initialValues={{ username: '' }}
                onFinish={(values) => {
                    console.log('表单提交:', values);
                }}
            >
                <AriFormItem name="username" label="用户名" rules={[{ required: true, message: '请输入用户名' }]}>
                    <AriInput placeholder="请输入用户名" />
                </AriFormItem>
                <AriFormItem name="password" label="密码" rules={[{ required: true, message: '请输入密码' }]}>
                    <AriInput type="password" placeholder="请输入密码" />
                </AriFormItem>
                <AriFormItem>
                    <AriButton htmlType="submit" color="primary">提交</AriButton>
                </AriFormItem>
            </AriForm>

            <AriFlex style={{ marginTop: '20px', flexWrap: 'wrap', gap: '12px' }}>
                <AriButton onClick={handleReset}>重置表单</AriButton>
                <AriButton onClick={handleFill}>填充数据</AriButton>
                <AriButton onClick={handleGetValues}>获取表单值</AriButton>
                <AriButton onClick={handleValidate}>验证表单</AriButton>
            </AriFlex>
        </>
    );
};


export const UseHookDemo: React.FC = () => {
    // 自定义表单字段组件
    const CustomFormField: React.FC = () => {
        // 使用useForm获取表单上下文
        const form = useForm();

        // 使用form实例直接操作表单
        const handleClick = () => {
            // 设置一个新值
            form.setFieldValue('email', `usename@example.com`);
        };

        return (
            <div>
                <AriButton onClick={handleClick}>根据用户名生成邮箱</AriButton>
            </div>
        );
    };

    return (
        <AriFlex vertical space={24}>
            <AriTypography variant='h4' value='个人资料' />
            <AriForm layout="horizontal" labelCol={6} wrapperCol={18} style={narrowFormStyle}>
                <AriFormItem label="用户名" name="username">
                    <AriInput placeholder="请输入用户名" />
                </AriFormItem>

                <AriFormItem label="邮箱" name="email">
                    <AriInput placeholder="请输入邮箱" />
                </AriFormItem>

                <AriFormItem >
                    <CustomFormField />
                </AriFormItem>

                <AriFormItem >
                    <AriButton type="default" htmlType="submit">保存</AriButton>
                </AriFormItem>
            </AriForm>
        </AriFlex>
    );
};
