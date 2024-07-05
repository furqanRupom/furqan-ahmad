import { db } from '@/server/db';
import * as React from 'react';

interface ISkillsDataProps {
}

const SkillsData: React.FunctionComponent<ISkillsDataProps> = async (props) => {
    const skills = await db.skill.findMany()
    console.log(skills)
  return <>
  
  </>;
};

export default SkillsData;
