"use server"
import { db } from "@/server/db";
const getProjectsData = async () => {
    const projects = await db.projects.findMany();
    return projects;
}

export default getProjectsData;