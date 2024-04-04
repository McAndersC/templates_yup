import { deleteSubscriber, getSubscriberByEmail, getSubscriberById, postSubscriber, putSubscriber } from "@/lib/data.service";
import { NextResponse } from "next/server"

export async function GET(request) {

    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');
    const id = searchParams.get('id');

    let result = {};

    if(email)
    {
        result = await getSubscriberByEmail(email);
    }
    
    if(id)
    {
        result = await getSubscriberById(id);
    }

    return NextResponse.json(result);

}


export async function POST(request) {

    const body = await request.json();
    
        let result = await postSubscriber(body);
        
        if(result)
        {
            return NextResponse.json({'ok': true, 'message' : 'Subscriber er tilføjet', data: result});
            
        } else {

            return NextResponse.json({'ok': false, 'message' : 'Det opstod en fejl', data: {}});

        }


}

export async function DELETE(request) {

    const body = await request.json();

        let result = await deleteSubscriber(body.id);
        
        if(result)
        {
            return NextResponse.json({'ok': true, 'message' : 'Subscriber er slettet', data: result});
            
        } else {

            return NextResponse.json({'ok': false, 'message' : 'Det opstod en fejl', data: {}});

        }

}

export async function PUT(request) {

        const body = await request.json();
        
        let result = await putSubscriber(body);
        
        if(result)
        {
            return NextResponse.json({'ok': true, 'message' : 'Subscriber er opdateret', data: {}});
            
        } else {

            return NextResponse.json({'ok': false, 'message' : 'Det opstod en fejl', data: {}});

        }

}