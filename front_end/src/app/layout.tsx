'use client';

import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const currentPath: { [key: string]: string } = {
        '/notice': '전체공지',
        '/notice/lesson': '학사공지(수업/학적)',
        '/notice/scholarship': '장학공지',
        '/notice/service': '봉사공지',
        '/notice/program': '진로·취업공지',
        '/notice/recruit': '채용정보',
        '/notice/iu_research': '산학연구공지',
        '/notice/recruitment': '교내모집공지',
        '/notice/event': '교외소식',
        '/notice/dormitory': '기숙사',
    };

    const handleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLinkClick = () => {
        setIsDropdownOpen(false);
    };

    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>{currentPath[pathname] || '공지사항'}</title>
            </head>
            <body className="lg:p-6 lg:mx-auto lg:max-w-screen-2xl">
                <Header />
                <div className="p-4 mx-auto max-w-screen-2xl lg:p-0">
                    <div className="flex flex-wrap items-center justify-between gap-3 lg:hidden relative">
                        <h2 className="p-4 text-xl font-semibold text-gray-800">{currentPath[pathname] || 'Page'}</h2>
                        <button
                            onClick={handleDropdown}
                            className="lg:hidden text-2xl flex items-center w-10 dropdown-toggle text-gray-300 justify-center bg-white h-10 transition-colors border rounded-lg max-w-10 active:bg-gray-100"
                        >
                            =
                        </button>

                        {isDropdownOpen && (
                            <div className="absolute right-0 top-12 mt-2 rounded-xl border bg-white shadow-theme-lg w-48 p-2">
                                <ul>
                                    {Object.entries(currentPath).map(([path, label]) => (
                                        <li key={path} className="p-2 hover:bg-gray-100 rounded-xl">
                                            <Link href={path} onClick={handleLinkClick} className="block w-full active:bg-gray-200">
                                                {label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                    {children}
                </div>
            </body>
        </html>
    );
}
