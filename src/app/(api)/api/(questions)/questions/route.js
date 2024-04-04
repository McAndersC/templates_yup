import { getQuestions } from "@/lib/data.service";
import { NextResponse } from "next/server"

export async function GET() {

    let questions = await getQuestions();
    return NextResponse.json(questions);

}
