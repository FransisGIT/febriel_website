import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
    title: "Lumineer Gallery",
    description:
        "COMING SOON Lumineer Gallery.",
    keywords: [
        ""
    ],
    authors: [{ name: "Fransisco Reyhan Fifaldi" }],
    canonical: "https://lumineer-gallery.vercel.app/febriel.png",
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Lumineer Gallery",
        description:
            "Explore the latest and most popular anime shows and movies. Join a passionate community of anime fans.",
        url: "https://lumineer-gallery.vercel.app/febriel.png",
        type: "website",
        images: [
            {
                url: "https://lumineer-gallery.vercel.app/febriel.png",
                width: 1200,
                height: 630,
                alt: "Lumineer Gallery",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@Lumineer Gallery",
        title: "Lumineer Gallery",
        description:
            "Explore the latest and most popular anime shows and movies. Join a passionate community of anime fans.",
        images: ["https://lumineer-gallery.vercel.app/febriel.png"],
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
                <Analytics />
            </body>
        </html>
    );
}
