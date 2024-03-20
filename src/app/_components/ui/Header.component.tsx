import Link from "next/link"
import { Button } from "./button"


export default function Header(){

    return (
        <nav className="sticky top-2 md:top-8 w-full grid place-items-center">
            <div className=" flex items-center bg-accentBlue pl-6 lg:p-1 lg:pl-4 pr-1 justify-between gap-4 h-[50px] w-[calc(100%-1rem)] md:max-w-[500px] rounded-lg border-b-2 border-2 border-paleBlue shadow">
                <Link href={'/'}>
                    <p className="text-blue font-semibold">PostEase</p>
                </Link>
                <div className="flex gap-4">
                    <div className="hidden sm:flex items-center text-sm gap-4">
                        <Link href={'/pricing'}>
                            <div className="font-light" >Pricing</div>
                        </Link>
                        <Link href={'/devs'}>
                            <div className="font-light" >Devs</div>
                        </Link>
                        <Link href={'/curators'}>
                            <div className="font-light" >Curators</div>
                        </Link>
                    </div>
                    <div className="w-fit h-full">
                        <Button>Join the waitlist</Button>
                    </div>
                </div>
            </div>
        </nav>
    )

}