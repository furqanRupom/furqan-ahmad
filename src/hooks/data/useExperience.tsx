"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useExperience = () => {
    const { data, refetch } = useQuery({
        queryKey: ['experience'],
        queryFn: async () => {
            const data = await axios.get('/api/experience');
            return data.data;
        }
    });
    return { data, refetch };
};
