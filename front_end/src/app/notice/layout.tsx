import React from 'react';
import Sidebar from '../../components/sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Sidebar />
            <div className="table-container">{children}</div>
        </>
    );
}
