import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { notification } from "antd";
import { addUser, deleteUser, fetchUsers, updateUser } from "../services";

export const useAddUser = () => {
  const queryClient = useQueryClient();
  const [api] = notification.useNotification();

  return useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      api.success({ message: "Usuario creado exitosamente!" });
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: () => {
      api.error({ message: "Error al agregar usuario. Intentelo nuevamente" });
    },
  });
};

export const useDeleteUser = () => {
  const [api] = notification.useNotification();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      api.success({ message: "Usuario eliminado!" });
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: () => {
      api.error({ message: "Error al eliminar usuario. Intentelo nuevamente" });
    },
  });
};

export const useUpdateUser = () => {
    const [api] = notification.useNotification({
        placement: "topRight",
        duration: 3,
    });
    const queryClient = useQueryClient();
    
    return useMutation({
        mutationFn: updateUser,
        onSuccess: () => {
        api.success({ message: "Usuario actualizado exitosamente!",  
        });
        queryClient.invalidateQueries({ queryKey: ["users"] });
        },
        onError: () => {
        api.error({ message: "Error al actualizar usuario. Intentelo nuevamente" });
        },
    });
    }


export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
};