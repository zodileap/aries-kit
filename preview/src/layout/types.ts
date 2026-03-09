export interface Demo {
    title?: string;
    component: React.ComponentType;
    sourceCode?: string;  // 新增属性
}

export interface DocExample {
    title: string;
    key: string;
    description: string;
    demos: Demo[];
}

export interface DocAPI {
    props: DocPropRow[];
    events?: DocEventRow[];
    slots?: DocSlotRow[];
    hooks?: DocNamedApiSection;
    methods?: DocMethodRow[] | DocNamedApiSection;
    [key: string]: any;
}

export interface DocPropRow {
    param: string;
    desc: string;
    type: string;
    default?: string;
}

export interface DocEventRow {
    event: string;
    desc: string;
    type: string;
}

export interface DocSlotRow {
    name: string;
    desc: string;
    type: string;
}

export interface DocNamedApiRow {
    name: string;
    desc: string;
    type?: string;
    returns?: string;
}

export interface DocNamedApiSection {
    title: string;
    apis: DocNamedApiRow[];
    anchor?: string;
}

export interface DocTableSection<T> {
    title: string;
    content?: string; // api对象中的键名
    data?: T[];
    anchor?: string;
}

export type ExtraProp = DocTableSection<DocPropRow>;
export type ExtraEvent = DocTableSection<DocEventRow>;
export type ExtraSlot = DocTableSection<DocSlotRow>;

export interface DocProps {
    title: string;
    description: string;
    examples: Record<string, DocExample>;
    api: DocAPI;
    apiTitle?: string;
    apiAnchor?: string;
    extraProps?: ExtraProp[];
    extraEvents?: ExtraEvent[];
    extraSlots?: ExtraSlot[];
}
