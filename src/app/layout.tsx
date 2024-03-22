import "~/styles/globals.css";

import { Work_Sans as FontSans } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import { cn } from "~/lib/utils";

const fontSans = FontSans({
    weight: ["100", "200", "300", "400", "700", "900"],
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata = {
    title: "PostEase CMS",
    description: "The CMS for people who get things done.",
    icons: [{ rel: "icon", url: "/img/favicon.ico" }],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={cn("font-sans ", fontSans.variable)}>
                <TRPCReactProvider>{children}</TRPCReactProvider>
            </body>
        </html>
    );
}
