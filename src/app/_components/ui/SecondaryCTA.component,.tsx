import { Button } from "./button";

export default function SecondaryCTA() {
    return (
        <section className="grid w-full place-items-center p-8 lg:p-16">
            <div className="flex flex-col gap-2">
                <h2 className="mb-3 text-center text-2xl font-bold sm:text-3xl lg:w-[500px] lg:text-4xl">
                    Get rid of that CMS headache
                </h2>
                <p className=" mb-2 text-center text-2xl font-light">
                    It'll only take 5 minutes to set up.
                </p>
                <a
                    href="https://getwaitlist.com/waitlist/14764"
                    className="m-auto"
                >
                    <Button>Join Waitlist</Button>
                </a>
            </div>
        </section>
    );
}

