'use client'
import { Product } from "@paddle/paddle-node-sdk";
import { useEffect, useState } from "react";
import { env } from "~/env";

export default function usePlans(){
    const [plans, setPlans] = useState<Product[]>([])
    useEffect(() => {
        fetch(`${env.NEXT_PUBLIC_BASE_URL}/api/paddle/plans`)
        .then( res => res.json())
        .then((data) => setPlans(data))
    }, [])
    return plans
}