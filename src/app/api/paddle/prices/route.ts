import { NextResponse } from "next/server";
import { getPrices } from "~/lib/paddle";

export function GET(){
    return NextResponse.json(getPrices)
}