import React from 'react';
import { AriFlex, AriCollapse, AriCode, AriTable, AriTypography } from '@ari/components';
import { DocProps } from './types';

const Doc: React.FC<DocProps> = ({ title, description, examples, api, extraProps, extraEvents, extraSlots }) => {
    return (
        <div className="doc-container">
            <AriTypography variant="h1" value={title} />
            <AriTypography variant="body" value={description} />

            {Object.entries(examples).map(([key, example]) => (
                <React.Fragment key={key}>
                    <AriTypography variant="h2" value={example.title} id={example.key} />
                    <AriTypography variant="body" value={example.description} />
                    {example.demos.map((demo, index) => {
                        const DemoComponent = demo.component;
                        const sourceCode = demo.sourceCode

                        return (
                            <div key={index} style={{ width: '100%' }}>
                                {demo.title && <h4>{demo.title}</h4>}
                                {sourceCode && (
                                    <AriCollapse
                                        collapseContent={
                                            <AriCode language="tsx" value={sourceCode} />
                                        }
                                    >
                                        <DemoComponent />
                                    </AriCollapse>
                                )}
                                {!sourceCode && <DemoComponent />}
                            </div>
                        );
                    })}
                </React.Fragment>
            ))}

            <AriTypography variant="h2" value="API" id="api" />

            <AriTypography variant="h3" value="属性" id="props" />
            {api.props && api.props.length > 0 && <AriTable
                title={``}
                data={api.props}
                columns={[
                    { title: '参数', key: 'param' },
                    { title: '说明', key: 'desc' },
                    { title: '类型', key: 'type', width: '150px' },
                    { title: '默认值', key: 'default', width: '150px' }
                ]}
                bordered
                striped
            />}

            {/* 渲染额外的部分 */}
            {extraProps && extraProps.map((section, index) => (
                <React.Fragment key={index}>
                    <AriTypography variant="h4" value={section.title} id={section.content.toLowerCase()} />
                    <AriTable
                        title={``}
                        data={api[section.content]}
                        columns={[
                            { title: '参数', key: 'param' },
                            { title: '说明', key: 'desc' },
                            { title: '类型', key: 'type', width: '150px' },
                            { title: '默认值', key: 'default', width: '150px' }
                        ]}
                        bordered
                        striped
                    />
                </React.Fragment>
            ))}
            <AriTypography variant="h3" value="事件" id="events" />
            {api.events && api.events.length > 0 && <AriTable
                title={``}
                data={api.events}
                columns={[
                    { title: '事件名', key: 'event' },
                    { title: '说明', key: 'desc' },
                    { title: '类型', key: 'type', width: '200px' }
                ]}
                bordered
                striped
            />}

            {/* 渲染额外的部分 */}
            {extraEvents && extraEvents.map((section, index) => (
                <React.Fragment key={index}>
                    <AriTypography variant="h4" value={section.title} id={section.content.toLowerCase()} />
                    <AriTable
                        title={``}
                        data={api[section.content]}
                        columns={[
                            { title: '事件名', key: 'event' },
                            { title: '说明', key: 'desc' },
                            { title: '类型', key: 'type', width: '200px' }
                        ]}
                        bordered
                        striped
                    />
                </React.Fragment>
            ))}

            <AriTypography variant="h3" value="插槽" id="slots" />
            {api.slots && api.slots.length > 0 && <AriTable
                title={``}
                data={api.slots}
                columns={[
                    { title: '名称', key: 'name' },
                    { title: '说明', key: 'desc' },
                    { title: '类型', key: 'type', width: '200px' }
                ]}
                bordered
                striped
            />
            }

            {/* 渲染额外的部分 */}
            {extraSlots && extraSlots.map((section, index) => (
                <React.Fragment key={index}>
                    <AriTypography variant="h4" value={section.title} id={section.content.toLowerCase()} />
                    <AriTable
                        title={``}
                        data={api[section.content]}
                        columns={[
                            { title: '名称', key: 'name' },
                            { title: '说明', key: 'desc' },
                            { title: '类型', key: 'type', width: '200px' }
                        ]}
                        bordered
                        striped
                    />
                </React.Fragment>
            ))}

        </div>
    );
};

export default Doc;