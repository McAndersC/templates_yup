import { getUsers } from "@/lib/data.service";
import { NextResponse } from "next/server"

export async function GET() {

    let users = await getUsers();
    return NextResponse.json(users);

}
