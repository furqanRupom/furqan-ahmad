import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useSkills = () => {
    const { data, refetch, error, isLoading } = useQuery({
        queryKey: ['skills'],
        queryFn: async () => {
            const response = await axios.get('/api/skills');
            return response.data;
        },
        refetchInterval: 2000, // Refetch every 3 seconds
    });

    return { data, refetch, error, isLoading };
};

