import { getUsers, getUserByEmail, getUserById } from "@/lib/data.service";
import { NextResponse } from "next/server"

export async function GET(request) {

    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');
    const id = searchParams.get('id');

    let result = {};

    if(email)
    {
        result = await getUserByEmail(email);
    }
    
    if(id)
    {
        result = await getUserById(id);
    }

    return NextResponse.json(result);

}
