import React from 'react';
import ClientList from '../components/ClientList';

export default function AdminPage({ users,deleteUser,updateUserInfo }) {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className='text-xl text-center mt-2 mb-4'>Admin Page</h2>
      <ClientList users={users} deleteUser={deleteUser} updateUserInfo={updateUserInfo} />
    </section>
  );
}
