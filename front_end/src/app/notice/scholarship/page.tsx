'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const URL = 'http://192.168.0.63:5000/notice?url=https://www.cu.ac.kr/plaza/notice/scholarship';

async function getScholarshipList() {
    console.log('Fetching...');
    const res = await fetch(URL);
    const json = await res.json();
    return json;
}

export default function ScholarshipListPage() {
    const [notice, setNotice] = useState<{ type: string; hyperlink: string; name: string; date: string; writer: string }[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getScholarshipList();
                setNotice(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <tbody>
                {notice.map((item, index) => (
                    <tr key={index} className="cursor-pointer hover:bg-gray-100 active:bg-gray-200" onClick={() => window.open(item.hyperlink)}>
                        <td className="text-center p-3 border-b-[1px]">{item.type}</td>
                        <td className="text-center p-3 border-b-[1px]">{item.name}</td>
                        <td className="text-center p-3 border-b-[1px]">{item.writer}</td>
                        <td className="text-center p-3 border-b-[1px]">{item.date}</td>
                    </tr>
                ))}
            </tbody>
        </>
    );
}
