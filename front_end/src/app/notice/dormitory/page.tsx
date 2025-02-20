'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const URL = 'http://localhost:5000/dormitory?url=https://dormitory.cu.ac.kr/board_Qgpk79';

async function getDormitoryList() {
    console.log('Fetching...');
    const res = await fetch(URL);
    const json = await res.json();
    return json;
}

export default function DormitoryListPage() {
    const [notice, setNotice] = useState<{ type: string; hyperlink: string; name: string; date: string; writer: string }[]>([]);
    const [loading, setLoading] = useState(true); // 로딩 상태 관리

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getDormitoryList();
                setNotice(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <h1 className="text-2xl font-bold text-center">기숙사</h1>
            <table className="w-full border-collapse mt-2.5">
                <thead>
                    <tr>
                        <th className="p-3 text-center font-bold text-gray-400 border-b-[1px]">번호</th>
                        <th className="p-3 text-center font-bold text-gray-400 border-b-[1px]">제목</th>
                        <th className="p-3 text-center font-bold text-gray-400 border-b-[1px]">작성자</th>
                        <th className="p-3 text-center font-bold text-gray-400 border-b-[1px]">등록일</th>
                    </tr>
                </thead>
                <tbody>
                    {notice.length > 0 ? (
                        notice.map((item, index) => (
                            <tr key={index}>
                                <td className="text-center p-3 border-b-[1px]">{item.type}</td>
                                <td className="text-center p-3 border-b-[1px]">
                                    <Link href={item.hyperlink} target="_blank">
                                        {item.name}
                                    </Link>
                                </td>
                                <td className="text-center p-3 border-b-[1px]">{item.writer}</td>
                                <td className="text-center p-3 border-b-[1px]">{item.date}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
}
