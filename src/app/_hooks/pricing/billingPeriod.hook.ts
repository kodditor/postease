'use client'
import { useState } from "react";

export default function useBillingPeriod(){
    const [ billingPeriod, setBP] = useState< 'year' | 'month'>('year')
    
    function toggleBilling(){
        billingPeriod == 'year' ? setBP('month') : setBP('year')
    }

    return { billingPeriod, toggleBilling}
}