import "~/styles/globals.css";
import localFont from 'next/font/local';

import { SidebarProvider, SidebarTrigger } from "~/components/ui/sidebar"
import { AppSidebar } from "~/components/app-sidebar"

import { type Metadata } from "next";

const pretendard = localFont({
  src: [
    {
      path: './fonts/Pretendard-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Pretendard-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Pretendard-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: "Surface Labs",
  description: "The AI-powered conversion engine for B2B.",
  icons: [{ rel: "icon", url: "/slabs.avif" }],
};


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={pretendard.variable}>
      <body>
        <SidebarProvider>
          <AppSidebar />
          <main>
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
