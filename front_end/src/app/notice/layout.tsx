import React from 'react';
import Sidebar from '../../components/sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="sm:grid sm:ap-4 sm:grid-cols-4 sm:gap-6">
                <Sidebar />
                <div className="sm:rounded-2xl sm:border sm:bg-white sm:p-6 sm:col-span-3">
                    <table className="sm:w-full sm:mt-2.5">
                        <thead>
                            <tr className="sm:p-3 sm:text-center sm:font-bold sm:text-gray-400 sm:border-b-[1px]"></tr>
                        </thead>
                        {children}
                    </table>
                </div>
            </div>
        </>
    );
}
