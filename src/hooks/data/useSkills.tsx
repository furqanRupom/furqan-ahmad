
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useSkills = () => {
    const { data, refetch } = useQuery({
        queryKey: ['skills'],
        queryFn: async () => {
            const data = await axios.get('/api/skills');
            return data.data;
        },
    });

    return { data, refetch };
};
