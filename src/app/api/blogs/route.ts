import { db } from "@/server/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt"



export const POST = async (req: NextRequest) => {


    return NextResponse.json({
        message: "admin created"
    })
}