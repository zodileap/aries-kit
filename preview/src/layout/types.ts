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
    props: Array<{
        param: string;
        desc: string;
        type: string;
        default?: string;
    }>;
    events?: Array<{
        event: string;
        desc: string;
        type: string;
    }>;
    slots?: Array<{
        name: string;
        desc: string;
        type: string;
    }>;
    [key: string]: any;
}

export interface ExtraProp {
    title: string;
    content: string; // api对象中的键名
}

export interface ExtraEvent {
    title: string;
    content: string; // api对象中的键名
}

export interface ExtraSlot {
    title: string;
    content: string; // api对象中的键名
}

export interface DocProps {
    title: string;
    description: string;
    examples: Record<string, DocExample>;
    api: DocAPI;
    extraProps?: ExtraProp[];
    extraEvents?: ExtraEvent[];
    extraSlots?: ExtraSlot[];
}
