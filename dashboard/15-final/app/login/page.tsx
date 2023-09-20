import LoginForm from '@/app/ui/login-form';
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function Page() {
  // Get user session token
  const session = await getServerSession(authOptions);
  if (session) redirect('/dashboard');
  // session = null || { user: { name, email, image } }
  return (
    <main>
      <LoginForm />
    </main>
  );
}
