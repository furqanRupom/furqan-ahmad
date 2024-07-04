import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useSkills = () => {
    const { data, refetch, error, isLoading } = useQuery({
        queryKey: ['skills'],
        queryFn: async () => {
            const response = await axios.get('/api/skills');
            return response.data;
        },
    });

    return { data, refetch, error, isLoading };
};

