import { getReviews } from "@/lib/data.service";
import { NextResponse } from "next/server"

export async function GET() {

    let reviews = await getReviews();
    return NextResponse.json(reviews);

}
