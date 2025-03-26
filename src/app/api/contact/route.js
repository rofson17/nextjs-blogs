import { NextResponse } from "next/server";



//TODO: get all contact in dashboard
export const GET = async (req) => {

}

//TODO: save contacted data
export const POST = async (req) => {
    try {

        const { name, email, message} = await req.json();
        console.log(message);


        return NextResponse.json({ user: email }, { status: 201 });

    } catch (error) {
        console.log(error.message);

        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}

//TODO: delete contacted message from Dashboard
export const DELETE = async (req) => {

}