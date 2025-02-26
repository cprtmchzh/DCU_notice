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
            <body className="sm:p-6 sm:mx-auto sm:max-w-screen-2xl">
                <Header></Header>
                {children}
            </body>
        </html>
    );
}
