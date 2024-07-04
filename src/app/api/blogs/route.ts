import { db } from "@/server/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt"


export const POST = async (req: NextRequest) => {
  try {
    // create blog;
 

    const blogData = await req.json();


    const findAuthor = await db.user.findUniqueOrThrow({
        where:{
            email: blogData.email
        }
    })
    const authorId = findAuthor.id ;

    const createBlogs = await db.blog.create({
        data:{
            authorId:authorId,
            title:blogData.title,
            content:blogData.content
        },
   
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
        const result = await db.blog.findMany({
            include:{
                author:true
            }
        });
        return NextResponse.json({
            success:true,
            message:"Fetched Blogs successfully",
            data:result
        })
    } catch (error) {
        NextResponse.json({ error: error, message: "Something went wrong" })
    }
}