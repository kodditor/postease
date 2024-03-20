import { Button } from "./button";



export default function SecondaryCTA(){

    return (
        <section className="w-full p-8 lg:p-16 grid place-items-center">
            <div className="flex flex-col gap-2">
                <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl lg:w-[500px] text-center mb-3">Get rid of that CMS headache</h2>
                <p className=" text-2xl text-center font-light mb-2">It'll only take 5 minutes to set up.</p>
                <Button>Join Waitlist</Button>
            </div>
        </section>
    )
}