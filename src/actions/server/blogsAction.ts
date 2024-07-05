"use server"
import { db } from "@/server/db";
const getBlogsData = async () => {
    const blogs = await db.blog.findMany({
        include:{
            author:true
        }
    });
    return blogs;
}

export default getBlogsData;