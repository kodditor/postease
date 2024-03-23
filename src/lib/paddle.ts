import { env } from "../env.js";
import { Paddle} from "@paddle/paddle-node-sdk";

const paddle = new Paddle(env.PADDLE_API_KEY);

export async function getPaddle(): Promise<Paddle>{
    return paddle
}

export const getPlans = await (paddle.products.list()).next()

export const getPrices = await (paddle.prices.list()).next()