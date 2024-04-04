import { getSubscribers } from "@/lib/data.service";
import { NextResponse } from "next/server"

export async function GET() {

    let subscribers = await getSubscribers();
    return NextResponse.json(subscribers);

}
