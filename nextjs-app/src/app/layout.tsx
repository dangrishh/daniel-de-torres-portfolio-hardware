import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const FAVICON =
  "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2040%2040'%3E%3Cdefs%3E%3ClinearGradient%20id='g'%20x1='0'%20y1='0'%20x2='1'%20y2='1'%3E%3Cstop%20offset='0'%20stop-color='%2329b6f6'/%3E%3Cstop%20offset='1'%20stop-color='%230d47a1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect%20width='40'%20height='40'%20rx='10'%20fill='url(%23g)'/%3E%3Cpath%20d='M6,20%20L12,20%20L16,8%20L20,32%20L24,20%20L24,8%20A12,12%200%200,1%2024,32%20L24,20'%20stroke='%23ffffff'%20stroke-width='5'%20fill='none'%20stroke-linecap='round'%20stroke-linejoin='round'/%3E%3C/svg%3E";

export const metadata: Metadata = {
  title: "DTech Solutions — Any Gadget Problem? Ipa-Fix mo na!",
  description:
    "DTech Solutions — cellphone, laptop, computer, and CCTV repair services in Calamba City, Laguna. Fast, affordable, and reliable.",
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
