import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
    title: "Carinime",
    description:
        "Explore the latest and most popular anime shows and movies. Watch your favorite anime series online in HD, stay updated with new releases, and join a passionate community of anime fans.",
    keywords: [
        "anime", "watch anime", "best anime", "new anime", "popular anime", "anime shows", "anime movies", "Carinime", "Fransisco", "anim", "ani", "nime", "anilist", "anime list", "anim list carinime", "Cari nime", "carinim", "cari anime", "list anime", "lihat anime"
    ],
    authors: [{ name: "Fransisco Reyhan Fifaldi" }],
    canonical: "https://carinime.vercel.app",
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Carinime",
        description:
            "Explore the latest and most popular anime shows and movies. Join a passionate community of anime fans.",
        url: "https://carinime.vercel.app",
        type: "website",
        images: [
            {
                url: "https://carinime.vercel.app/icon.png",
                width: 1200,
                height: 630,
                alt: "Carinime",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@carinime",
        title: "Carinime",
        description:
            "Explore the latest and most popular anime shows and movies. Join a passionate community of anime fans.",
        images: ["https://carinime.vercel.app/icon.png"],
    },
    revisitAfter: 1,
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="theme-color" content="#ffffff" />
                <meta name="color-scheme" content="light" />
                <link rel="shortcut icon" href={"/favicon/favicon.ico"} type="image/x-icon" />
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}
