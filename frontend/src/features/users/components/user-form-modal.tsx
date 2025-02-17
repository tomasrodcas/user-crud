import { Modal, Form, Input, Button, Col, Row, DatePicker, InputRef } from "antd";
import { User } from "../models";
import { useEffect, useRef } from "react";
import dayjs from "dayjs";


interface IProps {
    user?: User
    open: boolean
    onClose: () => void
    onSubmit: (user: User) => void
}

export const UserFormModal = ({ open, onClose, onSubmit, user }: IProps) => {
  const [form] = Form.useForm();

  const verificatorDigitRef = useRef<InputRef>(null);

  const handleRutNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length === 8) {
      verificatorDigitRef.current?.focus();
    }
  }

  useEffect(() => {
    if(!user){
      form.resetFields();
      return;
    }
    form.setFieldsValue({
        ...user,
        birthDate: user.birthDate ? dayjs(user.birthDate, "YYYY-MM-DD") : null,
      });
  }, [user, form]);

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      values.birthDate = values.birthDate.toDate().toISOString().split("T")[0];
      onSubmit(values);
      form.resetFields()
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <Modal open={open} onCancel={onClose} footer={null} title="Crear Usuario">
      <Form form={form} layout="vertical">
        <Form.Item validateDebounce={1000} name="firstNames" label="Nombres" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item validateDebounce={1000} name="lastNames" label="Apellidos" rules={[{ required: true, }]}>
          <Input />
        </Form.Item>
        <Form.Item label="RUT">
          <Row gutter={8}>
            <Col span={18}>
              <Form.Item validateDebounce={1000} name="rutNumber" noStyle rules={[{ required: true }]}>
                <Input
                  placeholder="Ej: 12345678"
                  onChange={handleRutNumberChange}
                  maxLength={8}
                />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="verificationDigit" noStyle rules={[{ required: true }]}>
                <Input
                  ref={verificatorDigitRef}
                  placeholder="Dígito"
                  maxLength={1}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item validateDebounce={1000} name="email" label="Email" rules={[{ required: true, type: "email" }]}>
          <Input />
        </Form.Item>
        <Form.Item name="birthDate" label="Fecha de Nacimiento" rules={[{ required: true, type: "date" }]}>
        <DatePicker
            maxDate={dayjs()}
            format={(value) => value.format("DD-MM-YYYY")}
            style={{ width: "100%" }}
            placeholder="Selecciona una fecha"
          />
        </Form.Item>
      
        <Button type="primary" onClick={handleSubmit}>Crear</Button>
      </Form>
    </Modal>
  );
};
