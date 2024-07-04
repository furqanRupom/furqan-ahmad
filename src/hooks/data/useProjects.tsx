
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useProjects = () => {
    const { data, refetch } = useQuery({
        queryKey: ['projects'],
        queryFn: async () => {
            const data =  await axios.get('/api/projects');
           return  await data.data;
        },
    });
    return { data, refetch };
};
