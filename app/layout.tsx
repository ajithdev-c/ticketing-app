import DeployButton from "@/components/deploy-button";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import HeaderAuth from "@/components/header-auth";
import { ThemeProvider } from "next-themes";
import { ThemeSwitcher } from "@/components/theme-switcher";
// import { verifySupabase } from "@/utils/supabase/verify-supabase";
// import { EnvVarWarning } from "@/components/env-var-warning";
import Link from "next/link";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";
  console.log(defaultUrl);
  

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="">
            <div className="">
              <nav className="w-full flex border-b border-b-foreground/10 h-16">
                <div className="w-full max-w-screen-xl grid grid-cols-2 p-3 px-5 text-sm">
                  <div className="flex gap-5 items-center justify-center font-semibold">
                    <Link href={"/"}>Home</Link>
                  </div>
                  <div className="flex justify-end"> 
                 <><HeaderAuth /> <ThemeSwitcher /></>
                  </div>
                </div>
              </nav>
              <div>
                {children}
              </div>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
