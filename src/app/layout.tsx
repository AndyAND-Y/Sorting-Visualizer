import './globals.css'
import { Space_Grotesk } from 'next/font/google'

const inter = Space_Grotesk({
    subsets: ['latin'],
    weight: ["400"]
})


export const metadata = {
    title: 'Sorting Visualizer',
    description: 'A useful and fun way to visualize sorting algorithms',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />

            </head>
            <body className={inter.className}>
                <div
                    className='-z-10 bg-blue-100 dark:bg-slate-800'
                >
                    {children}
                </div>
            </body>
        </html>
    )
}
