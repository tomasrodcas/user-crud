import { Table, Button } from "antd";
import { User } from "../../models";
import dayjs from "dayjs";
import { ActionsWrapper, TableWrapper } from "./styled";

interface IProps {
    users: User[]
    onEdit: (user: User) => void
    onDelete: (id: string) => void
    loading: boolean
}

export const UserTable = ({ users, onEdit, onDelete,  loading }: IProps) => {

  return (
    <TableWrapper>
    <Table dataSource={users} rowKey="id" columns={[
      { title: "Nombres", dataIndex: "firstNames" },
      { title: "Apellidos", dataIndex: "lastNames" },
      { title: "Rut", render: (_, user) => (
        <>
          {user.rutNumber}-{user.verificationDigit}
        </>
        )
      },
      { title: "Email", dataIndex: "email" },
      { title: "Fecha de Nacimiento", dataIndex: "birthDate", render: (date) => dayjs(date, "YYYY-MM-DD").format("DD-MM-YYYY")},
      { title: "Acciones", render: (_, user) => {
        return (
          <ActionsWrapper>
            <Button onClick={() => onEdit(user)} type="primary">Editar</Button>
            <Button onClick={() => onDelete(user.id)} type="primary" danger>Eliminar</Button>
          </ActionsWrapper>
        )
      }}
    ]} 
    loading={loading}
    />
    </TableWrapper>
  );
};
