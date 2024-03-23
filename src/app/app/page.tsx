import AppHeader from "../_components/ui/app/AppHeader.component"
import AppMainView from "../_components/ui/app/AppMainView.component"
import AppSidebar from "../_components/ui/app/AppSidebar.component"
import { Suspense } from "react"

export default function MainApp(){

    return(
        <> 
            <main className="bg-paleBlue w-screen h-screen overflow-hidden">
                <AppHeader />
                <section className="h-[calc(100vh-50px)] flex bg-blue">
                    <AppSidebar />
                    <Suspense>
                        <AppMainView />
                    </Suspense>
                </section>
            </main>
        </>
    )
}