import prisma from "@/lib/pisma";
import { NextResponse } from "next/server";



//TODO: get all contact in dashboard
export const GET = async (req) => {
    try {
        const contacts = await prisma.contact.findMany();

        return NextResponse.json({ contacts }, { status: 200 });

    } catch (error) {
        console.log(error.message);
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}

//TODO: save contacted data
export const POST = async (req) => {
    try {

        const { name, email, message } = await req.json();
        const contact = await prisma.contact.create({
            data: { name, email, message }
        });

        // console.log(contact);
        return NextResponse.json({ message: "success" }, { status: 201 });

    } catch (error) {
        console.log(error.message);
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
