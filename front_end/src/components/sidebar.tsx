'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
    const path = usePathname();
    console.log('path:', path);

    return (
        <aside className="w-[306px] h-[1198px] fixed bg-sidebar p-[20px]">
            <div className="font-bold text-2xl pb-[20px]">DCU 공지사항</div>
            <ul className="p-0 list-none">
                <li className="p-[12px] my-2.5 rounded-md cursor-pointer transition-background-[0.3s] hover:bg-hover hover:text-white active:bg-active">
                    <Link href="/notice/lesson" className="hover:text-white">
                        학사공지(수업/학적)
                    </Link>{' '}
                </li>
                <li className="p-[12px] margin-[10px] border-radius-[6px] cursor-pointer transition-background-[0.3s]">
                    <Link href="/notice/scholarship">장학공지</Link>
                </li>
                <li className="p-[12px] margin-[10px] border-radius-[6px] cursor-pointer transition-background-[0.3s]">
                    <Link href="/notice/service">봉사공지</Link>
                </li>
                <li className="p-[12px] margin-[10px] border-radius-[6px] cursor-pointer transition-background-[0.3s]">
                    <Link href="/notice/program">진로·취업공지</Link>
                </li>
                <li className="p-[12px] margin-[10px] border-radius-[6px] cursor-pointer transition-background-[0.3s]">
                    <Link href="/notice/recruit">채용정보</Link>
                </li>
                <li className="p-[12px] margin-[10px] border-radius-[6px] cursor-pointer transition-background-[0.3s]">
                    <Link href="/notice/iu_research">산학연구공지</Link>
                </li>
                <li className="p-[12px] margin-[10px] border-radius-[6px] cursor-pointer transition-background-[0.3s]">
                    <Link href="/notice/recruitment">교내모집공지</Link>
                </li>
                <li className="p-[12px] margin-[10px] border-radius-[6px] cursor-pointer transition-background-[0.3s]">
                    <Link href="/notice/event">교외소식</Link>
                </li>
            </ul>
        </aside>
    );
}
