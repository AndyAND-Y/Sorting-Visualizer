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


                <title>Sorting Visualizer</title>
                <meta name="description" content="A useful and fun way to visualize sorting algorithms" />


                <meta property="og:url" content="https://sorting-algos-tau.vercel.app/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Sorting Visualizer" />
                <meta property="og:description" content="A useful and fun way to visualize sorting algorithms" />
                <meta property="og:image" content="https://cdn.discordapp.com/attachments/1095388165969297470/1149669329558851675/image.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="sorting-algos-tau.vercel.app" />
                <meta property="twitter:url" content="https://sorting-algos-tau.vercel.app/" />
                <meta name="twitter:title" content="Sorting Visualizer" />
                <meta name="twitter:description" content="A useful and fun way to visualize sorting algorithms" />
                <meta name="twitter:image" content="https://cdn.discordapp.com/attachments/1095388165969297470/1149669329558851675/image.png" />

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
