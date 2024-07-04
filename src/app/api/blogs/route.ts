import { db } from "@/server/db";
import { NextRequest, NextResponse } from "next/server";


export const POST = async (req: NextRequest) => {
  try {
    // create blog;

    const blogData = await req.json();

    const createBlogs = await db.blog.create({
        data:blogData
    });

    return NextResponse.json({
        success:true,
        message:"blogs cerated successfully",
        data:createBlogs
    })
  } catch (error) {
     NextResponse.json({error:error,message:"Something went wrong"})
  }
}

export const GET = async (req:NextRequest) => {
    try {
        const result = await db.blog.findMany();
        return NextResponse.json({
            success:true,
            message:"Fetched Blogs successfully",
            data:result
        })
    } catch (error) {
        NextResponse.json({ error: error, message: "Something went wrong" })
    }
}