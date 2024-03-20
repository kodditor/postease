export function Footer(){
    const year = new Date().getFullYear()
    return (
        <>
            <footer className="h-[40px] bg-blue text-white w-full grid place-items-center">
                <div className="flex items-center justify-center gap-2">
                    <p className="text-xs font-light">PostEase &copy; {year}</p>
                </div>
            </footer>
        </>
    )
}