import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AriApp, setAppConfig } from '@ari/init';
import Layout from './layout';
import { menuConfig, routes } from './config';
import { Navigation } from './layout/header';
import "@ari/theme/components/index.scss"

const previewBaseName = import.meta.env.BASE_URL.replace(/\/$/, '');
const defaultPreviewRoute = '/icon';

const Preview = () => {
    return (
        <BrowserRouter
            basename={previewBaseName}
            future={{
                v7_startTransition: true,
                v7_relativeSplatPath: true,
            }}
        >
            <Layout menu={menuConfig}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<Navigate replace to={defaultPreviewRoute} />} />
                        {routes.map(route => (
                            <Route
                                key={route.path}
                                path={route.path}
                                element={<route.component />}
                            />
                        ))}
                        <Route path="*" element={<Navigate replace to={defaultPreviewRoute} />} />
                    </Routes>
                </Suspense>
            </Layout>
        </BrowserRouter>
    );
};

const appConfig = setAppConfig({
    localImgSrc: "/assets/images",
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <AriApp loadingAnimation={false} appConfig={appConfig}>
            <Preview />
        </AriApp>
    </React.StrictMode>
);
