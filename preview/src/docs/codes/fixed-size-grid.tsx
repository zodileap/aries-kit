import React from 'react';
import { AriFixedSizeGrid, AriContainer, AriTypography } from "@aries-kit/react";

// 创建简单的格子单元格样式
const cellStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #f0f0f0',
    borderRadius: '4px',
    backgroundColor: 'var(--color-bg)',
};

export const BasicGrid: React.FC = () => (
    <AriContainer style={{ height: '400px',overflowY: 'auto' }}>
        <AriFixedSizeGrid
            columnCount={4}
            columnWidth={100}
            rowHeight={100}
            height="100%"
            width="100%"
            itemCount={20}
        >
            {({ columnIndex, rowIndex, style }) => {
                const index = rowIndex * 4 + columnIndex;
                // 只渲染在 itemCount 范围内的单元格
                if (index >= 20) return null;

                return (
                    <div style={{ ...style, padding: '8px' }}>
                        <div style={{ ...cellStyle, height: '100%' }}>
                            <AriTypography variant='h3' value={String(index + 1)} />
                        </div>
                    </div>
                );
            }}
        </AriFixedSizeGrid>
    </AriContainer>
);

export const CustomSizeGrid: React.FC = () => (
  <AriContainer style={{ height: "350px" }}>
    <AriFixedSizeGrid
      columnCount={3}
      columnWidth={150}
      rowHeight={120}
      height="100%"
      width="100%"
      itemCount={15}
    >
      {({ columnIndex, rowIndex, style }) => {
        const index = rowIndex * 3 + columnIndex;
        if (index >= 15) return null;

        return (
          <div style={{ ...style, padding: "8px" }}>
            <div style={{ ...cellStyle, height: "100%" }}>
              <AriTypography variant="h3" value={"项目 " + (index + 1)} />
            </div>
          </div>
        );
      }}
    </AriFixedSizeGrid>
  </AriContainer>
);

export const OverscanDemo: React.FC = () => (
  <AriContainer style={{ height: "300px" }}>
    <AriFixedSizeGrid
      columnCount={4}
      columnWidth={100}
      rowHeight={80}
      height="100%"
      width="100%"
      overscanRowsCount={50}
      itemCount={500}
    >
      {({ columnIndex, rowIndex, style }) => {
        const index = rowIndex * 4 + columnIndex;
        if (index >= 500) return null;

        return (
          <div style={{ ...style, padding: "6px" }}>
            <div style={{ ...cellStyle, height: "100%" }}>
              <AriTypography variant="h3" value={String(index + 1)} />
            </div>
          </div>
        );
      }}
    </AriFixedSizeGrid>
  </AriContainer>
);

export const EventDemo: React.FC = () => {
    const [scrollInfo, setScrollInfo] = React.useState({ scrollTop: 0, scrollLeft: 0 });
    const [visibleRange, setVisibleRange] = React.useState({ start: 0, end: 0 });

    return (
      <AriContainer style={{ height: "450px" }}>
        <AriTypography
          variant="h3"
          value={`滚动位置: 上 ${scrollInfo.scrollTop}px, 左 ${scrollInfo.scrollLeft}px`}
        />
        <AriTypography
          variant="h3"
          value={`可见项目: ${visibleRange.start} - ${visibleRange.end}`}
        />

        <AriFixedSizeGrid
          columnCount={5}
          columnWidth={80}
          rowHeight={80}
          height="300px"
          width="100%"
          itemCount={100}
          onScroll={(scrollTop, scrollLeft) =>
            setScrollInfo({ scrollTop, scrollLeft })
          }
          onItemsRendered={(params) =>
            setVisibleRange({
              start: params.visibleStartIndex,
              end: params.visibleStopIndex,
            })
          }
        >
          {({ columnIndex, rowIndex, style }) => {
            const index = rowIndex * 5 + columnIndex;
            if (index >= 100) return null;

            return (
              <div style={{ ...style, padding: "5px" }}>
                <div style={{ ...cellStyle, height: "100%" }}>
                  <AriTypography variant="h3" value={String(index + 1)} />
                </div>
              </div>
            );
          }}
        </AriFixedSizeGrid>
      </AriContainer>
    );
};
