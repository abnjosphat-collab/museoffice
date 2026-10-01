import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono, Manrope, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

// Workspace typefaces. Variable names match the extracted workspace CSS
// (--font-body/--font-manrope/--font-jakarta/--font-geist-mono).
const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], display: "swap" });
const plusJakarta = Plus_Jakarta_Sans({ variable: "--font-jakarta", subsets: ["latin"], display: "swap" });

const appName = "Dallaglio Portable Tools and Equipment E-System";
const description =
  "Find, issue, return and account for portable tools and equipment across Dallaglio departments with searchable registers, clear custody records and a permanent history.";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3002",
  ),
  title: appName,
  description,
  applicationName: appName,
  keywords: [
    "portable tools",
    "equipment management",
    "tool register",
    "equipment custody",
    "Dallaglio",
  ],
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/icons/tools-icon.svg", type: "image/svg+xml" },
      { url: "/icons/tools-icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/icons/tools-apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: appName,
    description,
    siteName: appName,
    type: "website",
    url: "/",
    images: [
      {
        url: "/icons/tools-share-1200x630.png",
        width: 1200,
        height: 630,
        alt: `${appName} app preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: appName,
    description,
    images: ["/icons/tools-share-1200x630.png"],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Dallaglio Tools",
  },
};

export const viewport: Viewport = {
  themeColor: "#f4f6f5",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${geistMono.variable} ${manrope.variable} ${plusJakarta.variable}`}>
        {children}
        <Toaster
          position="top-right"
          richColors
          toastOptions={{
            style: {
              fontFamily: "var(--font-body)",
              border: "1px solid #ccd7d1",
              boxShadow: "0 4px 16px rgba(27,41,35,0.10)",
            },
          }}
        />
      </body>
    </html>
  );
}
