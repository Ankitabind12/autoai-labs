import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

export const metadata: Metadata = {
  metadataBase: new URL("https://autoai-labs.vercel.app"),
  title: "AUTOAI LABS | Where Automation Meets Intelligence",
  description:
    "AutoAI Labs is building a unified technology ecosystem connecting industrial automation, robotics, IoT, sensors, electronic components, and AI hardware.",
  keywords: [
    "AutoAI Labs",
    "automation",
    "robotics",
    "IoT",
    "AI hardware",
    "sensors",
    "electronic components",
    "industrial control",
    "robotics components",
  ],
  authors: [{ name: "AutoAI Labs Team" }],
  creator: "AutoAI Labs",
  openGraph: {
    title: "AUTOAI LABS | Where Automation Meets Intelligence",
    description:
      "Building the technology layer behind intelligent systems. Connecting automation, robotics, IoT, and AI hardware.",
    url: "https://autoai-labs.vercel.app",
    siteName: "AUTOAI LABS",
    images: [
      {
        url: "/icon.svg",
        width: 800,
        height: 800,
        alt: "AUTOAI LABS - Automation Meets Intelligence",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AUTOAI LABS | Where Automation Meets Intelligence",
    description:
      "Building the technology layer behind intelligent systems. Connecting automation, robotics, IoT, and AI hardware.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#08090C] text-zinc-100 antialiased selection:bg-sky-500/30 selection:text-white">
        <AnimatedBackground />
        <div className="relative min-h-screen flex flex-col justify-between">
          <Navbar />
          <main className="flex-grow pt-20">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
