'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const path = usePathname();
    console.log('path:', path);

    return (
        <header className="x-240 y-0 w-1200 h-80 text-white bg-gray-400">
            <nav className="top-menu">
                <li>
                    <Link href="/notice">DCU 공지</Link>
                </li>
                <li>
                    <Link href="/dormitory">기숙사 공지</Link>
                </li>
            </nav>
        </header>
    );
}
