'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const URL = 'http://localhost:5000/notice?url=https://www.cu.ac.kr/plaza/notice/lesson';

async function getNoticeList() {
    console.log('Fetching...');

    const res = await fetch(URL);
    const json = await res.json();
    return json;
}

export default function NoticeListPage() {
    const [notice, setNotice] = useState<{ type: string; hyperlink: string; name: string; date: string; writer: string }[]>([]);
    const [loading, setLoading] = useState(true); // 로딩 상태 관리

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getNoticeList();
                setNotice(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>등록일</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{notice[0]?.type}</td>
                        <td>
                            <Link href={notice[0]?.hyperlink} target="_blank">
                                {notice[0]?.name}
                            </Link>
                        </td>
                        <td>{notice[0]?.writer}</td>
                        <td>{notice[0]?.date}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
