'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
    const path = usePathname();
    console.log('path:', path);

    return (
        <aside className="sidebar">
            <nav>
                <ul className="category">
                    <li>
                        <Link href="/notice/lesson">학사공지(수업/학적)</Link> {path === '/notice/lesson' ? '🫠' : ''}
                    </li>
                    <li>
                        <Link href="/notice/scholarship">장학공지</Link> {path === '/notice/scholarship' ? '🫠' : ''}
                    </li>
                    <li>
                        <Link href="/notice/service">봉사공지</Link> {path === '/notice/service' ? '🫠' : ''}
                    </li>
                    <li>
                        <Link href="/notice/program">진로·취업공지</Link> {path === '/notice/program' ? '🫠' : ''}
                    </li>
                    <li>
                        <Link href="/notice/recruit">채용정보</Link> {path === '/notice/recruit' ? '🫠' : ''}
                    </li>
                    <li>
                        <Link href="/notice/iu_research">산학연구공지</Link> {path === '/notice/iu_research' ? '🫠' : ''}
                    </li>
                    <li>
                        <Link href="/notice/recruitment">교내모집공지</Link> {path === '/notice/recruitment' ? '🫠' : ''}
                    </li>
                    <li>
                        <Link href="/notice/event">교외공지</Link> {path === '/notice/event' ? '🫠' : ''}
                    </li>
                </ul>
            </nav>
        </aside>
    );
}
