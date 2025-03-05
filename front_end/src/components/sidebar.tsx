'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { sideButton } from '../ui/design';

export default function Sidebar() {
    const path = usePathname();
    console.log('path:', path);

    return (
        <aside className="hidden lg:sticky lg:top-6 lg:rounded-2xl lg:border lg:bg-white lg:p-6 lg:h-[650px] lg:col-span-1 lg:block">
            <div className="lg:font-bold lg:text-2xl lg:pb-[20px]">
                <Link href="/notice">DCU 공지사항</Link>
            </div>
            <ul className="lg:p-0 lg:list-none">
                <li className={`${sideButton('/notice/lesson')}`}>
                    <Link href="/notice/lesson" className="hover:text-white block">
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
