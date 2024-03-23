"use client";
import { useSearchParams } from "next/navigation";
import type { ReactNode } from "react";
import AppEditorModule from "./editor/AppEditor.component";

export default function AppMainView() {
    const searchParams = useSearchParams();
    const tab = searchParams.get("tab");

    switch (tab) {
        case "editor":
            return (
                <MainWrapper>
                    <AppEditorModule />
                </MainWrapper>
            );

        case "dev":
            return <MainWrapper>Hello</MainWrapper>;

        case "settings":
            return <MainWrapper>Hello</MainWrapper>;

        default:
            return <MainWrapper>Hello</MainWrapper>;
    }
}

function MainWrapper({ children }: { children: ReactNode }) {
    return (
        <>
            <section className="mt-2 h-[calc(100vh-1rem-50px)] w-[calc(100vw-50px-0.5rem)] rounded-lg bg-gray-100 p-4 shadow">
                {children}
            </section>
        </>
    );
}

