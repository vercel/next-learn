import LoginForm from '@/app/ui/login-form';
import { authOptions } from '@/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (session) redirect('/dashboard');
  return (
    <main>
      <LoginForm />
    </main>
  );
}
