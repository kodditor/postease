import { z } from "zod";
import { getPlans, getPrices } from "~/lib/paddle";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";


export const paddleRouter = createTRPCRouter({
    getPlans: publicProcedure
        .query(() => {
            return getPlans
        }),
    getPrices: publicProcedure
        .query(() => {
            return getPrices
        }),
    
})