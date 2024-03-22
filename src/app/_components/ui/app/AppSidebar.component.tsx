import { faCode, faCog, faHome, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";



export default function  AppSidebar(){

    return (
        <> 
            <nav className="w-[50px] h-full group hover:w-[170px] overflow-hidden text-white duration-300 flex py-4 p-2 flex-col gap-2">
                <Link href={'/app'}>
                    <div className="flex h-[40px] hover:bg-slate-800 px-2 rounded-lg duration-75 items-center">
                        <div  className="w-[15px] mr-5">
                            <FontAwesomeIcon icon={faHome} width={15} />
                        </div>
                        <p className="duration-100">Home</p>
                    </div>
                </Link>
                <Link href={'/app'}>
                <div className="flex h-[40px] hover:bg-slate-800 px-2 rounded-lg duration-75 items-center">
                        <div  className="w-[15px] mr-5">
                            <FontAwesomeIcon icon={faPen} width={15} />
                        </div>
                        <p className="duration-100">Editor</p>
                    </div>
                </Link>
                <Link href={'/app'}>
                    <div className="flex h-[40px] hover:bg-slate-800 px-2 rounded-lg duration-75 items-center">
                        <div  className="w-[15px] mr-5">
                            <FontAwesomeIcon icon={faCode} width={15} />
                        </div>
                        <p className="duration-100">Developers</p>
                    </div>
                </Link>
                <Link href={'/app'}>
                    <div className="flex h-[40px] hover:bg-slate-800 px-2 rounded-lg duration-75 items-center">
                        <div  className="w-[15px] mr-5">
                            <FontAwesomeIcon icon={faCog} width={15} />
                        </div>
                        <p className="duration-100">Settings</p>
                    </div>
                </Link>
            </nav>
        </>
    )
}