//import Link from "next/link";

import { Footer } from "./_components/ui/Footer.component";
import Header from "./_components/ui/Header.component";
import SecondaryCTA from "./_components/ui/SecondaryCTA.component,";
import { Button } from "./_components/ui/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenNib, faCalendar, faUserEdit, faCheck, faLayerGroup, faTools, faUserCog } from '@fortawesome/free-solid-svg-icons'
import PricingTabs from "./_components/pricing/pricingTabs.component";

//import { api } from "~/trpc/server";

export default async function Home() {

	

	return (
		<>
			<Header />
			<main className="flex min-h-[calc(100vh-1rem-50px)] flex-col items-center text-blue">
			<section className="flex flex-col gap-3 pt-20 px-8 pb-16 items-center">
				<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl lg:max-w-[60rem] mb-4 lg:mb-6 leading-snug sm:leading-normal md:leading-normal lg:leading-normal text-blue font-semibold text-center">The CMS for people who <span className="bg-accentBlue text-nowrap rounded-lg pb-2 pt-1 border-2 border-paleBlue px-4">get things done.</span></h1>
				<h4 className=" text-xl md:text-2xl text-center font-medium mb-4">Skip the fluff, focus on the content</h4>
				<a href="https://getwaitlist.com/waitlist/14764" target="_blank">
					<Button>Join the waitlist</Button>
				</a>
			</section>
			<section className="w-full p-8 lg:p-16  lg:min-h-[350px] bg-accentBlue text-blue grid place-items-center">
				<div className="w-full md:w-4/5 flex flex-col md:flex-row items-center lg:max-w-[1000px]">
					<div className="w-full md:w-1/2 flex flex-col lg:flex-row items-center justify-center md:justify-end gap-4 lg:gap-8 md:pr-16">
						<div  className="flex gap-4" >
							<FontAwesomeIcon className="md:!h-[20px] lg:!h-[30px]"  height={15} icon={faPenNib} />
							<FontAwesomeIcon className="md:!h-[20px] lg:!h-[30px]"  height={15} icon={faCalendar} />
							<FontAwesomeIcon className="md:!h-[20px] lg:!h-[30px]"  height={15} icon={faUserEdit} />
						</div>
						<h3 className="text-2xl font-bold" >Curators</h3>
					</div>
					<div className="w-full md:w-1/2 py-4 md:pl-16 border-0 md:border-l-2 border-l-blue font-light">
						<ul className="w-full sm:w-fit m-auto flex items-center sm:items-start flex-col gap-3 text-xl lg:gap-2">
							<li className="w-full sm:w-fit flex justify-between sm:justify-normal  gap-4">
								<FontAwesomeIcon width={15} icon={faCheck} />
								<p className="w-[calc(100%-15px-1rem)] sm:w-fit text-left">Create content with ease (and markdown)</p>
							</li>
							<li className="w-full sm:w-fit flex justify-between sm:justify-normal  gap-4">
								<FontAwesomeIcon width={15} icon={faCheck} />
								<p className="w-[calc(100%-15px-1rem)] sm:w-fit text-left">Schedule your content.</p>
							</li>
							<li className="w-full sm:w-fit flex justify-between sm:justify-normal  gap-4">
								<FontAwesomeIcon width={15} icon={faCheck} />
								<p className="w-[calc(100%-15px-1rem)] sm:w-fit text-left" >Create and save your templates.</p>
							</li>
						</ul>
					</div>
				</div>
			</section>
			
			<section className="w-full p-8 lg:p-16 lg:min-h-[350px] bg-blue text-white grid place-items-center">
				<div className="w-full md:w-4/5 flex flex-col md:flex-row items-center lg:max-w-[1000px]">
					<div className="w-full md:w-1/2 flex flex-col lg:flex-row justify-center items-center md:justify-end gap-4 lg:gap-8 md:pr-16">
						<div className="flex gap-4" >
							<FontAwesomeIcon className="md:!h-[20px] lg:!h-[30px]" height={15} icon={faLayerGroup} />
							<FontAwesomeIcon className="md:!h-[20px] lg:!h-[30px]" height={15} icon={faTools} />
							<FontAwesomeIcon className="md:!h-[20px] lg:!h-[30px]" height={15} icon={faUserCog} />
						</div>
						<h3 className="text-2xl font-bold">Developers</h3>
					</div>
					<div className="w-full md:w-1/2 py-4 md:pl-16 border-0 md:border-l-2 border-l-white font-light">
						<ul className="w-full sm:w-fit m-auto flex items-center sm:items-start flex-col  text-xl gap-3 md:gap-2">
							<li className="w-full sm:w-fit flex justify-between sm:justify-normal gap-4">
								<FontAwesomeIcon width={15} icon={faCheck} />
								<p className="w-[calc(100%-15px-1rem)] sm:w-fit" >API Query == Data. No fluff</p>
							</li>
							<li className="w-full sm:w-fit flex justify-between sm:justify-normal gap-4">
								<FontAwesomeIcon width={15} icon={faCheck} />
								<p className="w-[calc(100%-15px-1rem)] sm:w-fit" >Dev sandbox environments</p>
							</li>
							<li className="w-full sm:w-fit flex justify-between sm:justify-normal gap-4">
								<FontAwesomeIcon width={15} icon={faCheck} />
								<p className="w-[calc(100%-15px-1rem)] sm:w-fit" >Custom definitions? No problem</p>
							</li>
						</ul>
					</div>
				</div>
			</section>
			<section className="w-full p-8 lg:p-16 lg:min-h-[350px] bg-paleBlue text-blue grid place-items-center">
				<div className="w-full md:w-4/5 grid place-items-center lg:max-w-[1000px]">
					<PricingTabs />
				</div>
			</section>
			<SecondaryCTA />
			</main>
			<Footer />
		</>
	);
}
