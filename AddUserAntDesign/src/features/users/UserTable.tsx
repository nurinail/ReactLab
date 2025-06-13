import React, { useState } from 'react';
import { Table, Button, Space, Popconfirm } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, deleteUser, updateUser, type User } from './userSlice';
import UserFormModal from '../../components/UserFormModal';
import { v4 as uuidv4 } from 'uuid';
import type { RootState } from '../../app/store';

const UserTable: React.FC = () => {
  const users = useSelector((state: RootState) => state.users.list);
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  const handleAddClick = () => {
    setEditingUser(null);
    setIsModalVisible(true);
  };

  const handleEditClick = (user: User) => {
    setEditingUser(user);
    setIsModalVisible(true);
  };

  const handleDelete = (id: string) => {
    dispatch(deleteUser(id));
  };

  const handleFormSubmit = (data: Omit<User, 'id'>) => {
    if (editingUser) {
      dispatch(updateUser({ ...editingUser, ...data }));
    } else {
      dispatch(addUser({ ...data, id: uuidv4() }));
    }
    setIsModalVisible(false);
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Actions',
      render: (_: any, record: User) => (
        <Space>
          <Button type="link" onClick={() => handleEditClick(record)}>Edit</Button>
          <Popconfirm title="Are you sure?" onConfirm={() => handleDelete(record.id)}>
            <Button type="link" danger>Delete</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Button type="primary" onClick={handleAddClick} style={{ marginBottom: 16 }}>
        Add User
      </Button>
      <Table dataSource={users} columns={columns} rowKey="id" />
      <UserFormModal
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        onFinish={handleFormSubmit}
        initialValues={editingUser}
      />
    </div>
  );
};

export default UserTable;
