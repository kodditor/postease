'use client'
import useBillingPeriod from "~/app/_hooks/pricing/billingPeriod.hook";
import usePlans from "~/app/_hooks/pricing/plans.hook";
import usePrices, { usePricingJokes } from "~/app/_hooks/pricing/prices.hook";
import { Button } from "../ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function PricingTabs(){
    const plans = usePlans()
    const prices = usePrices()
    
    const {joke, toggleJoke} = usePricingJokes()

	const {billingPeriod, toggleBilling} = useBillingPeriod()

    if(plans.length == 0 || prices.length == 0){
        return (
            <>
                <div className="flex gap-4">Loading...</div>
            </>
        )
    }

    return (
        <>
            <h2 className="mb-2 text-center text-2xl font-bold sm:text-3xl lg:w-[500px] lg:text-4xl">Pricing</h2>
            <h3 className="text-md mb-3">Focus on delivering value, not the bill.</h3>
            <div className="flex flex-col gap-1 items-center mb-4">
                <h3 className="text-xs">Billing Period</h3>
                <div className="flex gap-1 bg-white p-1 rounded-full">
                    <div className={`w-20 text-sm duration-150 text-center px-4 py-1 cursor-pointer rounded-full ${(billingPeriod == 'year' ) ? 'bg-blue text-white hover:bg-slate-800' : 'bg-gray-100, text-blue hover:bg-gray-200'}`} onClick={()=>{ billingPeriod == 'year' ? null : toggleBilling() }}>Yearly</div>
                    <div className={`w-20 text-sm duration-150 text-center py-1 cursor-pointer rounded-full ${(billingPeriod == 'year' ) ? 'bg-gray-100, text-blue hover:bg-gray-200' : 'bg-blue text-white hover:bg-slate-800'}`} onClick={()=>{ billingPeriod == 'year' ? toggleBilling() : null }}>Monthly</div>
                </div>
            </div>
            <div className="w-full md:w-fit flex flex-col md:flex-row-reverse gap-4 mb-8">
                { 
                    plans.map((plan , idx) => {
                        const priceYearly = prices.filter(p => p.billingCycle!.interval == 'year').find(a => a.productId == plan.id)
                        const priceMonthly = prices.filter(p => p.billingCycle!.interval == 'month').find(a => a.productId == plan.id)

                        return (
                            //@ts-expect-error the recommended attribute it not typesafe 
                            <div className={`w-full md:w-fit shadow ${ plan.customData!.recommended == 1 ? 'bg-blue text-white shadow-xl': 'bg-white text-blue'} border-2 border-blue  p-8 rounded-xl  hover:shadow-md `} key={idx}>
                                <div className="mb-4 flex  md:flex-col justify-between md:justify-normal">
                                    <h4 className="text-xl font-semibold">{plan.name}</h4>
                                    <h2 className="text-2xl">
                                    {	billingPeriod == 'year' 
                                        ?
                                        priceYearly != null ? '$' + parseInt(priceYearly.unitPrice.amount,10)/100 + '/year' : '0.00'
                                        : 
                                        priceMonthly != null ? '$' + parseInt(priceMonthly.unitPrice.amount, 10)/100 + '/month' : '0.00'
                                    }
                                    </h2>
                                </div>
                                <a className="w-full block mb-4" href="https://getwaitlist.com/waitlist/14764">
                                    {/* @ts-expect-error This */}
                                    <Button className="w-full" variant={plan.customData!.recommended == 1 ? 'secondary': 'default'}>Join Waitlist</Button>
                                </a>
                                <div className="flex flex-col gap-2">
                                    {
                                        plan.description?.split('- ').map((feat, idx) => {
                                            if(feat != ''){
                                                return(
                                                    <div className="flex items-center gap-3" key={idx}>
                                                        <FontAwesomeIcon icon={faCheck} height={12} />
                                                        <p>{feat}</p>    
                                                    </div>
                                                )
                                            }
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                
                }
                    <>
                        <div className={`w-full md:w-fit shadow bg-white text-blue border-2 border-blue  p-8 rounded-xl  hover:shadow-md `} >
                            <div className="mb-4 flex  md:flex-col justify-between md:justify-normal">
                                <h4 className="text-xl font-semibold">Free Plan</h4>
                                <h2 className="text-2xl">
                                {	billingPeriod == 'year' 
                                    ?
                                    '$0.00/year'
                                    : 
                                    '$0.00/month'
                                }
                                </h2>
                            </div>
                            <a className="w-full block mb-4" href="https://getwaitlist.com/waitlist/14764">
                                <Button className="w-full" variant={'default'}>Join Waitlist</Button>
                            </a>
                            <div className="flex flex-col gap-2">
                                {
                                    [
                                        '25 Posts',
                                        'Up to 30 Gallery images',
                                        'Up to 2 seats',
                                        'Cheaper than a cup of coffee'
                                    ].map((feat, idx) => {
                                        if(feat != ''){
                                            return(
                                                <div className="flex items-center gap-3" key={idx}>
                                                    <FontAwesomeIcon icon={faCheck} height={12} />
                                                    <p>{feat}</p>    
                                                </div>
                                            )
                                        }
                                    })
                                }
                            </div>
                        </div>
                    </>
            </div>
            <small className="text-slate-500 max-w-[500px] text-center cursor-pointer" onClick={toggleJoke}>{joke.q}<br/>{joke.a}</small>
        </>
    )

}