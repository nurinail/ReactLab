import React, { useEffect } from 'react';
import { Modal, Form, Input } from 'antd';
import type { User } from '../features/users/userSlice';

interface Props {
  visible: boolean;
  onCancel: () => void;
  onFinish: (user: Omit<User, 'id'>) => void;
  initialValues?: User | null;
}

const UserFormModal: React.FC<Props> = ({ visible, onCancel, onFinish, initialValues }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (visible && initialValues) {
      form.setFieldsValue(initialValues);
    } else {
      form.resetFields();
    }
  }, [visible, initialValues]);

  return (
    <Modal
      title={initialValues ? 'Edit User' : 'Add User'}
      open={visible}
      onCancel={onCancel}
      onOk={() => form.submit()}
    >
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UserFormModal;
