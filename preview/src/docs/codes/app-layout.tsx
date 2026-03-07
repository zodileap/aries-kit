import { AriAppLayout, AriAppLayoutProvider, AppConfig } from '@aries-kit/react';



export const BasicAppLayout: React.FC = () => {
    const mockConfig: AppConfig = {
        baseUrl: "",
        localImgSrc: 'http://localhost:3000',
    };

    return (
        <AriAppLayoutProvider appConfig={mockConfig}>
            <AriAppLayout style={{ width: '300px', height: 'auto' }}>
                <h3>示例应用</h3>
                <p>这是一个基础的应用布局示例</p>
            </AriAppLayout>
        </AriAppLayoutProvider>
    );
};
