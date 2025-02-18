'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const URL = 'http://localhost:5000/notice?url=https://www.cu.ac.kr/plaza/notice/scholarship';

async function getScholarshipList() {
    console.log('Fetching...');
    const res = await fetch(URL);
    const json = await res.json();
    return json;
}

export default function ScholarshipListPage() {
    const [notice, setNotice] = useState<{ type: string; hyperlink: string; name: string; date: string; writer: string }[]>([]);
    const [loading, setLoading] = useState(true); // 로딩 상태 관리

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getScholarshipList();
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
                {notice.length > 0 ? (
                    notice.map((item, index) => (
                        <tr key={index}>
                            <td>{item.type}</td>
                            <td>
                                <Link href={item.hyperlink} target="_blank">
                                    {item.name}
                                </Link>
                            </td>
                            <td>{item.writer}</td>
                            <td>{item.date}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td>loading...</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}
