'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { sideButton } from '../ui/design';

export default function Sidebar() {
    const path = usePathname();
    console.log('path:', path);

    return (
        <aside className="hidden sm:sticky sm:top-6 sm:rounded-2xl sm:border sm:bg-white sm:p-6 sm:h-[650px] sm:col-span-1 sm:block">
            <div className="sm:font-bold sm:text-2xl sm:pb-[20px]">
                <Link href="/notice">DCU 공지사항</Link>
            </div>
            <ul className="sm:p-0 sm:list-none">
                <li className={`${sideButton('/notice/lesson')}`}>
                    <Link href="/notice/lesson" className="sm:hover:text-white sm:block">
                        학사공지(수업/학적)
                    </Link>
                </li>
                <li className={sideButton('/notice/scholarship')}>
                    <Link href="/notice/scholarship" className="hover:text-white block">
                        장학공지
                    </Link>
                </li>
                <li className={sideButton('/notice/service')}>
                    <Link href="/notice/service" className="hover:text-white block">
                        봉사공지
                    </Link>
                </li>
                <li className={sideButton('/notice/program')}>
                    <Link href="/notice/program" className="hover:text-white block">
                        진로·취업공지
                    </Link>
                </li>
                <li className={sideButton('/notice/recruit')}>
                    <Link href="/notice/recruit" className="hover:text-white block">
                        채용정보
                    </Link>
                </li>
                <li className={sideButton('/notice/iu_research')}>
                    <Link href="/notice/iu_research" className="hover:text-white block">
                        산학연구공지
                    </Link>
                </li>
                <li className={sideButton('/notice/recruitment')}>
                    <Link href="/notice/recruitment" className="hover:text-white block">
                        교내모집공지
                    </Link>
                </li>
                <li className={sideButton('/notice/event')}>
                    <Link href="/notice/event" className="hover:text-white block">
                        교외소식
                    </Link>
                </li>
                <li className={sideButton('/notice/dormitory')}>
                    <Link href="/notice/dormitory" className="hover:text-white block">
                        기숙사
                    </Link>
                </li>
            </ul>
        </aside>
    );
}
