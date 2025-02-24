import React from 'react';
import Header from '../components/header';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Document</title>
            </head>
            <body className="p-4 mx-auto max-w-screen-2xl md:p-6">
                <Header></Header>
                {children}
            </body>
        </html>
    );
}
