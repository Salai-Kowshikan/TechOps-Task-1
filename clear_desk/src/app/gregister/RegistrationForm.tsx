'use client';

import React from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerUser } from '@/lib/api/AuthApis';

const schema = z.object({
  fullName: z.string().min(3, 'Name must be at least 3 characters'),
  email: z.string().email('Invalid email'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
});

type FormData = z.infer<typeof schema>;

export default function RegistrationForm() {
  const { data: session, status } = useSession();
  const router = useRouter();

  React.useEffect(() => {
    console.log('Session:', session, 'Status:', status);
  }, [session, status]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: session?.user?.name || '',
      email: session?.user?.email || '',
      phone: '',
    },
  });

  // Pre-populate form with session data from Google sign-in as a suggestion (optional)
  React.useEffect(() => {
    if (session?.user) {
      setValue('fullName', session.user.name || '');
      setValue('email', session.user.email || '');
    }
  }, [session, setValue]);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await registerUser({
        fullName: data.fullName,
        email: data.email,
        password: 'guser', // Replace with secure logic or user input
        phone: data.phone,
      });

      alert('Registration successful!');
      router.push('/user/dashboard');
    } catch (error: any) {
      console.error('Registration Error:', error);
      alert(error.message || 'Registration failed');
    }
  };

  if (status === 'loading') return <div className="text-center">Loading...</div>;
  if (!session || !session.user) {
    console.log('No session or user data:', session);
    // return <div className="text-center text-red-500">Please sign in with Google to register</div>;
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Complete Registration</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            {...register('fullName')}
            className="w-full border rounded-xl px-4 py-2"
            placeholder="Enter your full name"
          />
          {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            {...register('email')}
            className="w-full border rounded-xl px-4 py-2"
            placeholder="Enter your email"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="tel"
            {...register('phone')}
            className="w-full border rounded-xl px-4 py-2"
            placeholder="Enter your phone number"
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl font-medium transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
}