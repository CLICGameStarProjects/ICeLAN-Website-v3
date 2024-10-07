import type { Metadata } from "next";
import "@styles/style.css";

export const metadata: Metadata = {
  title: {
    template: "%s | ICeLAN",
    default: "ICeLAN",
  },
  description: "25h de tournois de jeux vidéo et jeux de plateau !",
  authors: [{ name: "ICeLAN" }],
  icons: [
    {
      rel: "icon",
      url: "/favicons/favicon.ico",
      type: "image/x-icon",
    },
    {
      rel: "icon",
      url: "/favicons/favicon-16x16.png",
      sizes: "16x16",
      type: "image/png",
    },
    {
      rel: "icon",
      url: "/favicons/favicon-32x32.png",
      sizes: "32x32",
      type: "image/png",
    },
    {
      rel: "apple-touch-icon",
      url: "/favicons/apple-touch-icon.png",
      sizes: "180x180",
    },
  ],
  openGraph: {
    type: "website",
    url: "https://icelan.ch",
    title: "ICeLAN",
    description: "25h de tournois de jeux vidéo et jeux de plateau !",
    siteName: "ICeLAN",
    images: [
      {
        url: "/share-image.jpg",
        width: 1200,
        height: 630,
        alt: "ICeLAN",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
