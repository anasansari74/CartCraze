// src/components/DevFooter.tsx
import { useAuthStore } from '../store/authStore';

export default function DevFooter() {
  const { login } = useAuthStore();

  if (process.env.NODE_ENV !== 'development') return null;

  return (
    <footer className="fixed bottom-0 right-0 p-4">
      <button
        onClick={() => login('fakeUser1@example.com')}
        className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 text-sm"
      >
        Dev: Sign In as Fake User
      </button>
    </footer>
  );
}