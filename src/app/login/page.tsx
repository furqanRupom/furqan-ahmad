"use client";
import AnimatedBackground from '@/animation/login/backgroundAnimation';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import { useForm } from 'react-hook-form';

interface ILoginPageProps { }

const Login: React.FC = () => {
  const { register, handleSubmit } = useForm<{ email: string, password: string }>();
  const router = useRouter();

  const onSubmit = async (data: { email: string, password: string }) => {
    await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false
    });
    router.push('/dashboard');
  }
  return (
    <div className='bg-center bg-no-repeat min-h-screen bg-cover relative flex items-center justify-center' style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMiPTnXnj6lOJ3OtDJ6gwIoVQ6VbfCWFi4LHQ1-2MLofZwcR6XaZWVqONd2rvy7HvDtYA&usqp=CAU')" }}>
      <div className='absolute inset-0 h-full w-full bg-gray-900 opacity-75 '></div>
      <div className="bg-gray-800 backdrop-blur-sm bg-opacity-50 rounded-lg shadow-lg overflow-hidden max-w-xl mx-auto  p-6 z-20 w-full">
        <h2 className="text-2xl font-bold text-gray-200 mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input
              {...register('email')}
              className="shadow appearance-none border border-gray-700 bg-gray-800 rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="password">Password</label>
            <input
              {...register('password')}
              className="shadow appearance-none border border-gray-700 rounded w-full bg-gray-800 py-2 px-3 text-gray-400 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
              type="submit"
            >
              Login
            </button>

          </div>
        </form>

      </div>
    </div>
  );
};

export default Login;
