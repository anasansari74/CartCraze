import { useAuthStore } from '../store/authStore';
import { useOrderStore } from '../store/orderStore';

export default function DevFooter() {
  const { user, login } = useAuthStore();
  const { fetchOrders } = useOrderStore();

  const handleFakeLogin = () => {
    const fakeUserId = 'fake-user-id';
    login('fakeUser1@example.com'); 
    fetchOrders(fakeUserId);
  };

  if (process.env.NODE_ENV !== 'development' || user) return null;

  return (
    <footer className="fixed bottom-0 right-0 p-4 z-50">
      <button
        onClick={handleFakeLogin}
        className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 text-sm"
      >
        Dev: Sign In as Fake User
      </button>
    </footer>
  );
}