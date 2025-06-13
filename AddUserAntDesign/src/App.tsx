import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import UserTable from './features/users/UserTable';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div style={{ padding: 24 }}>
        <h1>User Management</h1>
        <UserTable />
      </div>
    </Provider>
  );
};

export default App;
