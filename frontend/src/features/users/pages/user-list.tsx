import { useState } from "react";
import { useAddUser, useDeleteUser, useUpdateUser, useUsers } from "../hooks";
import { UserTable } from "../components/user-table/user-table";
import { UserFormModal } from "../components/user-form-modal";
import { Button, Card } from "antd";
import { User } from "../models";
import { TableHeader, TableTitle } from "./styled";

export const UserList = () => {
  const { data: users, isLoading } = useUsers();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedUser, setSelectedUser] = useState<User>();

  const { mutate: deleteUser } = useDeleteUser();
  const { mutate: createUser } = useAddUser();
  const { mutate: editUser} = useUpdateUser();

  const handleDeleteUser = (id: string) => {
    deleteUser(id);
  }

  const handleEditUser = (user: User) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  }


  const handleSubmit = (user: User) => {
    if(selectedUser){
      user.id = selectedUser.id;
      editUser(user);
      setSelectedUser(undefined);
    } 
    else {
      createUser(user);
    }
    setIsModalOpen(false);
}
    


  return (
    <Card>
      <TableHeader>
        <TableTitle>Usuarios</TableTitle>
      <Button type="primary" onClick={() => setIsModalOpen(true)}>
        Crear Usuario
      </Button>
      </TableHeader>
      <UserTable
        users={users || []}
        onDelete={handleDeleteUser}
        onEdit={handleEditUser}
        loading={isLoading}
      />
      <UserFormModal open={isModalOpen} onClose={() => {
        setIsModalOpen(false)
        setSelectedUser(undefined)
      }} 
            onSubmit={handleSubmit}
            user={selectedUser}
        />
    </Card>
  );
};
