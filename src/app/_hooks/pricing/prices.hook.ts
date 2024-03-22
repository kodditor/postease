'use client'
import { Price } from "@paddle/paddle-node-sdk";
import { useEffect, useState } from "react";
import { env } from "~/env";

export default function usePrices(){
    const [prices, setPrices] = useState<Price[]>([])
    useEffect(() => {
        fetch(`${env.NEXT_PUBLIC_BASE_URL}/api/paddle/prices`)
        .then( res => res.json())
        .then((data) => setPrices(data))
    }, [])
    return prices
}

export function usePricingJokes(){

    const jokes = [
        {
            q: `Why did the software engineer choose PostEase's pricing plan?`,
            a: `Because it was priced so nicely, it felt like a bug fix in their budget`
        },
        {
            q: `Why did the developer sign up for PostEase's pricing plan?`,
            a: `Because they heard it was the only thing that wouldn't give them sticker shock!`
        },
        {
            q: `Why did the content curator love PostEase's pricing plan?`,
            a: `Because it was so affordable, they could finally afford to buy more coffee to fuel their creativity!`
        },
        // got a joke for the pricing page? add it here.
    ]
    let initialIndex = Math.floor(Math.random() * (jokes.length) ) 
    const [joke, setJoke] = useState<joke>(jokes[initialIndex]!)
    
    function toggleJoke(){
        let randIndex = Math.floor(Math.random() * (jokes.length) ) 
        setJoke(jokes[randIndex]!)
    }

    return {joke, toggleJoke}

    type joke = {
        q: string,
        a: string
    }
}