'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const URL = 'http://192.168.0.63:5000/dormitory?url=https://dormitory.cu.ac.kr/board_Qgpk79';

async function getDormitoryList() {
    console.log('Fetching...');
    const res = await fetch(URL);
    const json = await res.json();
    return json;
}

export default function DormitoryListPage() {
    const [notice, setNotice] = useState<{ type: string; hyperlink: string; name: string; date: string; writer: string }[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getDormitoryList();
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
