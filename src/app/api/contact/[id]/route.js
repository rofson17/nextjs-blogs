import { NextResponse } from "next/server";

//TODO: delete contacted message from Dashboard
export const DELETE = async (req, { params }) => {
    const { id } = await params;
    try {
        await prisma.contact.delete({
            where: {
                id: id,
            },
        });
        return NextResponse.json({ message: "Contact deleted successfully" }, { status: 200 });
    } catch (error) {
        console.log(error.message);
        return NextResponse.json({ message: error.message }, { status: 500 });
    }


}