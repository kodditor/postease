import "~/styles/globals.css";

import { Work_Sans } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";

const workSans = Work_Sans({
  weight: ['100','200', '300', '400', '700', '900'],
  subsets: ['latin'],
  variable: "--font-sans"
})

export const metadata = {
  title: "PostEase CMS",
  description: "The CMS for people who get things done.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${workSans.variable}`}>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
