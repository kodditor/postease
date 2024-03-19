import Link from "next/link"


export default function Header(){

    return (
        <>
            <nav className="sticky flex items-center pl-2 pr-1 justify-between gap-4 h-[50px] max-w-[500px] top-4 left-[calc((100%-24rem)/2)] p-1 rounded-lg border-2 border-paleBlue">
                <Link href={'/'}>
                    <p className="text-blue font-semibold">PostEase</p>
                </Link>
                <div className="flex gap-3">
                    <div className="flex items-center gap-2">
                        <Link href={'/pricing'}>
                            <div>Pricing</div>
                        </Link>
                        <Link href={'/devs'}>
                            <div>Devs</div>
                        </Link>
                        <Link href={'/curators'}>
                            <div className="font-light">Curators</div>
                        </Link>
                    </div>
                    <div className="w-fit h-full">
                        <button className="w-full bg-blue text-white h-[calc(50px-0.7rem)] px-2 rounded-md overflow-hidden hover:bg-slate-600 duration-150">Join the waitlist</button>
                    </div>
                </div>
            </nav>
        </>
    )

}