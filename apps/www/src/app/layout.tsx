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
  metadataBase: new URL("https://jsx-daisyui.com"),
  title: {
    default: "jsx-daisyui | React DaisyUI Components for Tailwind CSS",
    template: "%s | jsx-daisyui",
  },
  description:
    "Build faster with jsx-daisyui, an open-source React component library built on daisyUI v5, Tailwind CSS v4, and TypeScript. Copy accessible, customizable UI components directly into your project.",
  keywords: [
    "React components",
    "daisyUI components",
    "daisyUI v5",
    "Tailwind CSS components",
    "Tailwind CSS v4",
    "React UI library",
    "TypeScript components",
    "accessible UI components",
    "copy paste React components",
  ],
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
