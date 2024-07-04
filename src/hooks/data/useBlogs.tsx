
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useBlogs = () => {
    const { data, refetch } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const data = await axios.get('/api/blogs');
            return await data.data;
        },
        refetchInterval: 2000, 
    });
    return { data, refetch };
};
