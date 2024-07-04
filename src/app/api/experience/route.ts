import { db } from "@/server/db";
import { NextRequest, NextResponse } from "next/server";


export const POST = async (req: NextRequest) => {
    try {
        // create experience;

        const experienceData = await req.json();

        const createBlogs = await db.experience.create({
            data: experienceData
        });

        return NextResponse.json({
            success: true,
            message: "Experience cerated successfully",
            data: createBlogs
        })
    } catch (error) {
        NextResponse.json({ error: error, message: "Something went wrong" })
    }
}

export const GET = async (req: NextRequest) => {
    try {
        const result = await db.experience.findMany();
        return NextResponse.json({
            success: true,
            message: "Fetched Experiences successfully",
            data: result
        })
    } catch (error) {
        NextResponse.json({ error: error, message: "Something went wrong" })
    }
}