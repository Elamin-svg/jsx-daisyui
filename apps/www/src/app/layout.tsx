import { Footer, Navbar } from "@/components/layout";
import { Toaster } from "@registry/components/react/feedback/toast";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "jsx-daisyui",
  description:
    "jsx-daisyui is a React component library built on daisyUI and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${outfit.className} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme')||'dark';document.documentElement.setAttribute('data-theme',t);})();`,
          }}
        />
      </head>
      <body suppressHydrationWarning className="min-h-screen flex flex-col">
        <NextTopLoader showSpinner={false} color="var(--color-primary)" />
        <Navbar />
        <div className="pt-16">{children}</div>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
