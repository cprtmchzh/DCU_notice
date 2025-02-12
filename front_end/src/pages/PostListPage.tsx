'use client';

import { useState, useEffect } from 'react';

const URL = 'http://localhost:5000/notice';

async function getNoticeList() {
    console.log('Fetching...');

    const res = await fetch(URL);
    const json = await res.json();
    return json;
}

export default function NoticeListPage() {
    const [notice, setNotice] = useState([]);
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
        <>
            <div>{JSON.stringify(notice[0])}</div>
        </>
    );
}
