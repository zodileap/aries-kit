import { AriContainer, AriPagination, AriFlex } from '@aries-kit/react';
import React, { useState } from 'react';

export const BasicPagination: React.FC = () => {
    const [current, setCurrent] = useState(1);

    const handleChange = (page: number) => {
        setCurrent(page);
    };

    return (
        <AriPagination total={50} current={current} onChange={handleChange} />
    );
};

export const SimplePagination: React.FC = () => {
    const [current, setCurrent] = useState(1);

    const handleChange = (page: number) => {
        setCurrent(page);
    };

    return (
        <AriPagination total={50} current={current} onChange={handleChange} simple />
    );
};

export const JumperPagination: React.FC = () => {
    const [current, setCurrent] = useState(1);

    const handleChange = (page: number) => {
        setCurrent(page);
    };

    return (
        <AriPagination
            total={500}
            current={current}
            onChange={handleChange}
            showQuickJumper
        />
    );
};

export const SizeChangerPagination: React.FC = () => {
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    const handleChange = (page: number, size: number) => {
        setCurrent(page);
        setPageSize(size);
    };

    const handleSizeChange = (current: number, size: number) => {
        setPageSize(size);
        setCurrent(current);
    };

    return (
        <AriPagination
            total={500}
            current={current}
            pageSize={pageSize}
            onChange={handleChange}
            showSizeChanger
            pageSizeOptions={[10, 20, 50, 100]}
            onShowSizeChange={handleSizeChange}
        />
    );
};

export const DisabledPagination: React.FC = () => {
    return (
        <AriPagination total={50} disabled defaultCurrent={2} defaultPageSize={20} />
    );
};

export const TotalInfoPagination: React.FC = () => {
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    const handleChange = (page: number, size: number) => {
        setCurrent(page);
        setPageSize(size);
    };

    return (
        <AriFlex vertical space={16}>
            <AriContainer>
                <AriPagination
                    total={85}
                    current={current}
                    pageSize={pageSize}
                    onChange={handleChange}
                    showTotal={(total) => `共 ${total} 条`}
                />
            </AriContainer>

            <AriContainer>
                <AriPagination
                    total={85}
                    current={current}
                    pageSize={pageSize}
                    onChange={handleChange}
                    showTotal={(total, range) => `第 ${range[0]}-${range[1]} 条，共 ${total} 条`}
                />
            </AriContainer>
        </AriFlex>
    );
};
