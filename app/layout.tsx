import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
    subsets: ["latin"],
});
export const metadata: Metadata = {
    title: "Vinod N Patil - Full Stack Developer",
    description:
        "Full Stack Developer specializing in building scalable web applications with React, Node.js, and modern technologies. Explore my projects and blog posts.",
    icons: {
        icon: "/favicon.ico",
    },
    metadataBase: new URL("https://vinod-patil.vercel.app"), // Replace with your actual domain after deployment
    openGraph: {
        title: "Vinod N Patil - Full Stack Developer",
        description:
            "Full Stack Developer specializing in building scalable web applications with React, Node.js, and modern technologies.",
        url: "https://vinod-patil.vercel.app", // Replace with your actual domain
        siteName: "Vinod N Patil Portfolio",
        images: [
            {
                url: "/og-bg.png",
                width: 1200,
                height: 630,
                alt: "Vinod N Patil - Full Stack Developer",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Vinod N Patil - Full Stack Developer",
        description:
            "Full Stack Developer specializing in building scalable web applications with React, Node.js, and modern technologies.",
        creator: "@vinodcodes",
        images: ["/og-bg.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.className} antialiased`}>
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
