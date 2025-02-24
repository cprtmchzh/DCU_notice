import React from 'react';
import Sidebar from '../../components/sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 md:gap-6">
                <Sidebar />
                <div className="rounded-2xl border p-5 md:p-6 bg-white col-span-3">
                    <table className="w-full mt-2.5">
                        <thead>
                            <tr className="p-3 text-center font-bold text-gray-400 border-b-[1px]"></tr>
                        </thead>
                        {children}
                    </table>
                </div>
            </div>
        </>
    );
}
