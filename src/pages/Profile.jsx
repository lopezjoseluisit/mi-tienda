import React from 'react';
import { useSelector } from 'react-redux';
import ProfileInfo from '../components/profile/ProfileInfo';
import OrderHistory from '../components/profile/OrderHistory';

export default function Profile() {
  const { user } = useSelector((state) => state.auth);
  const orders = useSelector((state) => state.orders?.items || []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Mi Perfil</h1>
      
      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <ProfileInfo 
            user={user}
            onUpdate={(data) => console.log('Update profile:', data)}
          />
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Resumen</h2>
            <div className="space-y-2">
              <p>Pedidos totales: {orders.length}</p>
              <p>Miembro desde: {new Date(user?.createdAt).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <OrderHistory orders={orders} />
      </div>
    </div>
  );
}
