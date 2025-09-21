import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "../../api/index";

export const usePhone = () => {
  const client = useQueryClient();

  const getPhone = () =>
    useQuery({
      queryKey: ["phoneKey"],
      queryFn: () => api.get("phone").then((res: any) => res.data),
    });

  const createPhone = useMutation({
    mutationFn: (body: any) =>
      api.post("phone", body).then((res: any) => res.data),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["phoneKey"] });
    },
  });

  const updatePhone = useMutation({
    mutationFn: ({ id, body }: { id: string; body: any }) =>
      api.put(`phone/${id}`, body).then((res: any) => res.data),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["phoneKey"] });
    },
  });

  const deletePhone = useMutation({
    mutationFn: (id: string) => api.delete(`phone/${id}`),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["phoneKey"] });
    },
  });

  return { getPhone, createPhone, deletePhone, updatePhone };
};
