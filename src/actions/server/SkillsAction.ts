"use server"
import { db } from "@/server/db";
const getSkillsData = async () => {
    const skills = await db.skill.findMany();
    return skills;
}

export default getSkillsData;