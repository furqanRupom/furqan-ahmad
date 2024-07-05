"use server"
import { db } from "@/server/db";
const getExperienceData = async () => {
    const experience = await db.experience.findMany();
    return experience;
}

export default getExperienceData;