import { NextResponse } from "next/server";

export const POST = async (req) => {
    try {

        const { email, password } = await req.json();
        console.log(email);


        return NextResponse.json({ user: email }, { status: 201 });

    } catch (error) {
        console.log(error.message);

        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}