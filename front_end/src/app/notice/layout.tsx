import React from 'react';
import Sidebar from '../../components/sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="lg:grid lg:ap-4 lg:grid-cols-3 xl:grid-cols-4 lg:gap-6">
                <Sidebar />
                <div className="rounded-2xl w-full border bg-white lg:rounded-2xl lg:border lg:bg-white lg:p-6 lg:col-span-2 xl:col-span-3">
                    <table className="w-full mt-2.5">
                        <thead>
                            <tr className="lg:p-3 lg:text-center lg:font-bold lg:text-gray-400 lg:border-b-[1px]"></tr>
                        </thead>
                        {children}
                    </table>
                </div>
            </div>
        </>
    );
}
