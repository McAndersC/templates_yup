import { getProducts, getProductsByRange } from "@/lib/data.service";
import { NextResponse } from "next/server"

export async function GET(request) {

    const { searchParams } = new URL(request.url);
    const range = searchParams.get('range');

    if(range) {
        let products = await getProductsByRange(range);
        return NextResponse.json(products);
    }


    let products = await getProducts();
    return NextResponse.json(products);


}
