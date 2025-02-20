import React from 'react';
import Sidebar from '../../components/sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Sidebar />
            <div className="absolute top-28 left-1/4 bottom-9 shadow-sm p-[20px] w-[1050px] h-[700x] rounded-3xl overflow-x-auto bg-white">{children}</div>
        </>
    );
}
