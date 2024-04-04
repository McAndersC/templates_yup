import { getOrders, getProducts, getProductsByRange } from "@/lib/data.service";
import { NextResponse } from "next/server"

export async function GET(request) {

    let orders = await getOrders();
    return NextResponse.json(orders);


}