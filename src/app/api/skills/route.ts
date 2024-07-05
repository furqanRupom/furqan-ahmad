import { db } from "@/server/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt"


export const POST = async (req: NextRequest) => {
    try {
        // create blog;
        //  const hashPassword = await bcrypt.hash('fab123',12);
        //  const user = await db.user.create({
        //     data:{
        //         name:"Furqan Ahmad",
        //         email:"furqanrupom100@gmail.com",
        //         password:hashPassword
        //     }
        //  })
       


        const skillsData = await req.json();

        const createBlogs = await db.skill.create({
            data: skillsData
        });

        return NextResponse.json({
            success: true,
            message: "blogs cerated successfully",
            data: createBlogs
        })
    } catch (error) {
       return  NextResponse.json({ error: error, message: "Something went wrong" })
    }
}

export const GET = async (req: NextRequest) => {
    try {
        const result = await db.skill.findMany();
        return NextResponse.json({
            success: true,
            message: "Fetched Skills successfully",
            data: result
        })
    } catch (error) {
       return  NextResponse.json({ error: error, message: "Something went wrong" })
    }
}