import React from 'react';
import { AriCollapse, AriCode, AriTable, AriTypography } from '@ari/components';
import {
    DocProps,
    DocAPI,
    DocNamedApiRow,
    DocTableSection,
    DocPropRow,
    DocEventRow,
    DocSlotRow
} from './types';

const PROP_COLUMNS = [
    { title: '参数', key: 'param', width: '220px' },
    { title: '说明', key: 'desc' },
    { title: '类型', key: 'type', width: '320px' },
    { title: '默认值', key: 'default', width: '200px' }
] as const;

const EVENT_COLUMNS = [
    { title: '事件名', key: 'event', width: '220px' },
    { title: '说明', key: 'desc' },
    { title: '类型', key: 'type', width: '360px' }
] as const;

const SLOT_COLUMNS = [
    { title: '名称', key: 'name', width: '220px' },
    { title: '说明', key: 'desc' },
    { title: '类型', key: 'type', width: '320px' }
] as const;

const NAMED_API_COLUMNS = [
    { title: '名称', key: 'name', width: '220px' },
    { title: '说明', key: 'desc' },
    { title: '类型', key: 'type', width: '320px' },
    { title: '返回值', key: 'returns', width: '220px' }
] as const;

const toAnchorId = (value: string) => {
    return value
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
        .replace(/\s+/g, '-')
        .replace(/[^a-zA-Z0-9-]/g, '')
        .replace(/-+/g, '-')
        .toLowerCase();
};

const resolveSectionData = <T,>(api: DocAPI, section: DocTableSection<T>): T[] => {
    if (section.data) {
        return section.data;
    }

    if (section.content) {
        const candidate = api[section.content];
        if (Array.isArray(candidate)) {
            return candidate as T[];
        }
    }

    return [];
};

const renderTable = <T extends Record<string, unknown>>(
    data: T[],
    columns: ReadonlyArray<{ title: string; key: string; width?: string }>
) => {
    if (data.length === 0) {
        return null;
    }

    return (
        <div className="doc-table-wrapper">
            <AriTable
                title={``}
                data={data}
                columns={[...columns]}
                bordered
                striped
            />
        </div>
    );
};

const Doc: React.FC<DocProps> = ({
    title,
    description,
    examples,
    api,
    apiTitle,
    apiAnchor,
    extraProps,
    extraEvents,
    extraSlots
}) => {
    const propSections = extraProps?.map(section => ({
        ...section,
        data: resolveSectionData<DocPropRow>(api, section)
    })) ?? [];
    const eventSections = extraEvents?.map(section => ({
        ...section,
        data: resolveSectionData<DocEventRow>(api, section)
    })) ?? [];
    const slotSections = extraSlots?.map(section => ({
        ...section,
        data: resolveSectionData<DocSlotRow>(api, section)
    })) ?? [];
    const hooksSection = api.hooks;
    const methodsSection = Array.isArray(api.methods)
        ? { title: '方法', apis: api.methods, anchor: 'methods' }
        : api.methods;
    const hasProps = (api.props?.length ?? 0) > 0 || propSections.some(section => (section.data?.length ?? 0) > 0);
    const hasEvents = (api.events?.length ?? 0) > 0 || eventSections.some(section => (section.data?.length ?? 0) > 0);
    const hasSlots = (api.slots?.length ?? 0) > 0 || slotSections.some(section => (section.data?.length ?? 0) > 0);

    const renderExtraTables = <T extends Record<string, unknown>>(
        sections: Array<DocTableSection<T> & { data: T[] }>,
        columns: ReadonlyArray<{ title: string; key: string; width?: string }>
    ) => {
        return sections
            .filter(section => section.data.length > 0)
            .map((section, index) => (
                <React.Fragment key={`${section.title}-${index}`}>
                    <AriTypography
                        variant="h4"
                        value={section.title}
                        id={section.anchor ?? (section.content ? toAnchorId(section.content) : toAnchorId(section.title))}
                    />
                    {renderTable(section.data, columns)}
                </React.Fragment>
            ));
    };

    const renderNamedApiSection = (section: { title: string; anchor?: string; apis: DocNamedApiRow[] } | undefined) => {
        if (!section || section.apis.length === 0) {
            return null;
        }

        return (
            <>
                <AriTypography variant="h3" value={section.title} id={section.anchor ?? toAnchorId(section.title)} />
                {renderTable(section.apis, NAMED_API_COLUMNS)}
            </>
        );
    };

    return (
        <div className="doc-container">
            <AriTypography variant="h1" value={title} />
            <AriTypography variant="body" value={description} />

            {Object.entries(examples).map(([key, example]) => (
                <section className="doc-section" key={key}>
                    <AriTypography variant="h2" value={example.title} id={example.key} />
                    <AriTypography variant="body" value={example.description} />
                    {example.demos.map((demo, index) => {
                        const DemoComponent = demo.component;
                        const sourceCode = demo.sourceCode

                        return (
                            <div key={index} className="doc-example">
                                {demo.title && <h4 className="doc-example__title">{demo.title}</h4>}
                                {sourceCode && (
                                    <AriCollapse
                                        collapseContent={
                                            <AriCode language="tsx" value={sourceCode} />
                                        }
                                    >
                                        <div className="doc-example-preview">
                                            <DemoComponent />
                                        </div>
                                    </AriCollapse>
                                )}
                                {!sourceCode && (
                                    <div className="doc-example-preview">
                                        <DemoComponent />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </section>
            ))}

            <AriTypography variant="h2" value={apiTitle ?? 'API'} id={apiAnchor ?? 'api'} />

            {hasProps && (
                <>
                    <AriTypography variant="h3" value="属性" id="props" />
                    {api.props && renderTable(api.props, PROP_COLUMNS)}
                    {renderExtraTables(propSections, PROP_COLUMNS)}
                </>
            )}

            {hasEvents && (
                <>
                    <AriTypography variant="h3" value="事件" id="events" />
                    {api.events && renderTable(api.events, EVENT_COLUMNS)}
                    {renderExtraTables(eventSections, EVENT_COLUMNS)}
                </>
            )}

            {hasSlots && (
                <>
                    <AriTypography variant="h3" value="插槽" id="slots" />
                    {api.slots && renderTable(api.slots, SLOT_COLUMNS)}
                    {renderExtraTables(slotSections, SLOT_COLUMNS)}
                </>
            )}

            {renderNamedApiSection(hooksSection)}
            {renderNamedApiSection(methodsSection)}
        </div>
    );
};

export default Doc;
