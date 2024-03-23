'use client'
import type { Product } from "@paddle/paddle-node-sdk";
import { useEffect, useState } from "react";
import { env } from "~/env";

export default function usePlans(){
    const [plans, setPlans] = useState<Product[]>([])
    useEffect(() => {
        fetch(`${env.NEXT_PUBLIC_BASE_URL}/api/paddle/plans`)
        .then( res => res.json())
        .then((data: Product[] ) => setPlans(data))
        .catch((e) => {
            console.log(e)
        })
    }, [])
    return plans
}