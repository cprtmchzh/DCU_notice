import React from 'react';
import Sidebar from '../../components/sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Sidebar />
            <div className="absolute top-12 left-1/4 bottom-9 shadow-sm p-[20px] w-[1050px] h-[700x] rounded-3xl overflow-x-auto bg-white">
                <table className="w-full border-collapse mt-2.5">
                    <thead>
                        <tr className="p-3 text-center font-bold text-gray-400 border-b-[1px]"></tr>
                    </thead>
                    {children}
                </table>
            </div>
        </>
    );
}
