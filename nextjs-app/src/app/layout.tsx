import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

// Microchip (hardware) with </> inside (software) on the brand gradient.
const FAVICON_SVG = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#29b6f6'/><stop offset='1' stop-color='#0d47a1'/></linearGradient></defs><rect width='40' height='40' rx='10' fill='url(#g)'/><g fill='none' stroke='#fff' stroke-linecap='round' stroke-linejoin='round'><rect x='10' y='10' width='20' height='20' rx='3.5' stroke-width='2.4'/><path d='M15 6v4M20 6v4M25 6v4M15 30v4M20 30v4M25 30v4M6 15h4M6 20h4M6 25h4M30 15h4M30 20h4M30 25h4' stroke-width='2.2'/><path d='M17 16.5 14.5 20l2.5 3.5M23 16.5l2.5 3.5-2.5 3.5M21 15.5l-2 9' stroke-width='1.9'/></g></svg>`;
const FAVICON = `data:image/svg+xml,${encodeURIComponent(FAVICON_SVG)}`;

export const metadata: Metadata = {
  title: "DTech Solutions — We Innovate, Build and Support.",
  description:
    "DTech Solutions is an emerging technology venture focused on IT services, digital solutions, software development, and technology support, creating practical and reliable solutions for individuals and businesses. Based in Calamba City, Laguna.",
  icons: {
    icon: FAVICON,
    apple: FAVICON,
  },
};

export const viewport = {
  themeColor: "#0a1626",
};

const THEME_INIT_SCRIPT = `
(function () {
  var saved = null;
  try {
    saved = localStorage.getItem("dtech-theme");
  } catch (e) {}
  var theme =
    saved ||
    (window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark");
  document.documentElement.setAttribute("data-theme", theme);
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <body>
        <Script id="theme-init" strategy="beforeInteractive">
          {THEME_INIT_SCRIPT}
        </Script>
        {children}
      </body>
    </html>
  );
}
