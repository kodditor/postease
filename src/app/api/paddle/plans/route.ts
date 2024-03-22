import { NextResponse } from "next/server";
import { getPlans } from "~/lib/paddle";

export function GET(){
    return NextResponse.json(getPlans)
}