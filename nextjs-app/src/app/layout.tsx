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
  "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2040%2040'%3E%3Cdefs%3E%3ClinearGradient%20id='g'%20x1='0'%20y1='0'%20x2='1'%20y2='1'%3E%3Cstop%20offset='0'%20stop-color='%2329b6f6'/%3E%3Cstop%20offset='1'%20stop-color='%230d47a1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect%20width='40'%20height='40'%20rx='10'%20fill='url(%23g)'/%3E%3Cpath%20transform='translate(8,8)%20scale(0.9)'%20d='M22.7%2019l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9%206%206%209%201.6%204.7C.4%207.1.9%2010.1%202.9%2012.1c1.9%201.9%204.6%202.4%206.9%201.5l9.1%209.1c.4.4%201%20.4%201.4%200l2.3-2.3c.5-.4.5-1.1.1-1.4z'%20fill='%23ffffff'/%3E%3C/svg%3E";

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
