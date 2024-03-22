import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../button";
import { faPlus, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";


export default function AppHeader(){

    return (
        <>
            <section className="h-[50px] flex justify-between items-center px-4 p-2 bg-paleBlue">
                <Link href='/'>
                    <div className="h-[25px] w-[25px] relative">
                        <Image src={'/img/logo.png'} alt="PostEase Logo" fill />
                    </div>
                </Link>
                <div className="flex gap-4 items-center">
                    <Button className="flex items-center h-[30px] gap-2">
                        <FontAwesomeIcon icon={faPlus} height={12} />
                        New Post
                    </Button>
                    <FontAwesomeIcon className="text-blue" icon={faUserCircle} height={25} />
                </div>
            </section>
        </>
    )
}