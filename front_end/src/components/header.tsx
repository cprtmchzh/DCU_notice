'use client';

import '../ui/globals.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const path = usePathname();
    console.log('path:', path);
    return <header className="header"></header>;
}
