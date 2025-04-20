import { useQuery } from "@tanstack/react-query";
import { api } from "@/utils/axios";

export const useComplaints = () => {
  return useQuery({
    queryKey: ["complaints"],
    queryFn: async () => {
      const res = await api.get("/complaints");
      return res.data;
    },
  });
};


