'use client';

import '../ui/globals.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const path = usePathname();
    console.log('path:', path);

    return (
        <header className="z-50 sticky top-0 flex w-full bg-white border-gray-200 sm:hidden">
            <div className="flex flex-col justify-between flex-grow">
                <div className="w-full px-3 py-4 border-b border-gray-200 text-center">
                    <Link href="/notice" className="font-bold text-2xl">
                        DCU 공지사항
                    </Link>
                </div>
            </div>
        </header>
    );
}
