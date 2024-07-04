import { db } from "@/server/db";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    try {
        const projectData = await req.json();

        const createProjects = await db.projects.create({
            data: {
                name:projectData.name,
                github: projectData.github,
                liveLink: projectData.liveLink,
                projectImage:projectData.projectImage,
                description: projectData.description,
                skills: {
                    create: projectData.skills.map((skill:any) => ({
                        name: skill.name,
                        icon: skill.icon,
                    })),
                },
            },
            include: {
                skills: true,
            },
        });

        return NextResponse.json({
            success: true,
            message: "Projects Data created successfully",
            data: createProjects,
        });
    } catch (error:any) {
        return NextResponse.json({ error: error.message, message: "Something went wrong" });
    }
};

export const GET = async (req: NextRequest) => {
    try {
        const result = await db.projects.findMany({
            include: {
                skills: true,
            },
        });
        return NextResponse.json({
            success: true,
            message: "Fetched Projects successfully",
            data: result,
        });
    } catch (error:any) {
        return NextResponse.json({ error: error.message, message: "Something went wrong" });
    }
};
