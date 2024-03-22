'use client'
import { useSearchParams } from "next/navigation"
import { ReactNode } from "react"
import AppEditorModule from "./editor/AppEditor.component"

export default function AppMainView(){
    const searchParams = useSearchParams()
    const tab = searchParams.get('tab')
    console.log(tab)
    switch (tab) {
        case 'editor':
            return (
                <MainWrapper>
                    <AppEditorModule />
                </MainWrapper>
            )
            break;
        
        case 'dev':
            return (
                <MainWrapper>

                </MainWrapper>
            )
            break;
        
        case 'settings':
            return (
                <MainWrapper>

                </MainWrapper>
            )
            break;
        
        default:
            return (
                <MainWrapper>

                </MainWrapper>
            )

            break;
    }
}

function MainWrapper({children} : {children: ReactNode}){
    return (
        <>
            <section className="w-[calc(100vw-50px-0.5rem)] mt-2 h-[calc(100vh-1rem-50px)] shadow bg-white rounded-lg p-4">
            {children}
            </section>
        </>
    )
}