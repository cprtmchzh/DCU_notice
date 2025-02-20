'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
    const path = usePathname();
    console.log('path:', path);

    return (
        <aside className="w-[306px] h-[1198px] fixed bg-white p-[20px]">
            <div className="font-bold text-2xl pb-[20px]">
                <Link href="/notice">DCU 공지사항</Link>
            </div>
            <ul className="p-0 list-none">
                <li className="p-[12px] my-2.5 rounded-md cursor-pointer transition-background-[0.3s] hover:bg-hover hover:text-white active:bg-active">
                    <Link href="/notice/lesson" className="hover:text-white block">
                        학사공지(수업/학적)
                    </Link>
                </li>
                <li className="p-[12px] my-2.5 rounded-md cursor-pointer transition-background-[0.3s] hover:bg-hover hover:text-white active:bg-active">
                    <Link href="/notice/scholarship" className="hover:text-white block">
                        장학공지
                    </Link>
                </li>
                <li className="p-[12px] my-2.5 rounded-md cursor-pointer transition-background-[0.3s] hover:bg-hover hover:text-white active:bg-active">
                    <Link href="/notice/service" className="hover:text-white block">
                        봉사공지
                    </Link>
                </li>
                <li className="p-[12px] my-2.5 rounded-md cursor-pointer transition-background-[0.3s] hover:bg-hover hover:text-white active:bg-active">
                    <Link href="/notice/program" className="hover:text-white block">
                        진로·취업공지
                    </Link>
                </li>
                <li className="p-[12px] my-2.5 rounded-md cursor-pointer transition-background-[0.3s] hover:bg-hover hover:text-white active:bg-active">
                    <Link href="/notice/recruit" className="hover:text-white block">
                        채용정보
                    </Link>
                </li>
                <li className="p-[12px] my-2.5 rounded-md cursor-pointer transition-background-[0.3s] hover:bg-hover hover:text-white active:bg-active">
                    <Link href="/notice/iu_research" className="hover:text-white block">
                        산학연구공지
                    </Link>
                </li>
                <li className="p-[12px] my-2.5 rounded-md cursor-pointer transition-background-[0.3s] hover:bg-hover hover:text-white active:bg-active">
                    <Link href="/notice/recruitment" className="hover:text-white block">
                        교내모집공지
                    </Link>
                </li>
                <li className="p-[12px] my-2.5 rounded-md cursor-pointer transition-background-[0.3s] hover:bg-hover hover:text-white active:bg-active">
                    <Link href="/notice/event" className="hover:text-white block">
                        교외소식
                    </Link>
                </li>
                <li className="p-[12px] my-2.5 rounded-md cursor-pointer transition-background-[0.3s] hover:bg-hover hover:text-white active:bg-active">
                    <Link href="/notice/dormitory" className="hover:text-white block">
                        기숙사
                    </Link>
                </li>
            </ul>
        </aside>
    );
}
