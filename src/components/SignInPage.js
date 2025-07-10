import Link from 'next/link'
import React, { useState } from 'react'
import { FaCoffee } from 'react-icons/fa'
import { useRouter } from 'next/router'
import { loginUser } from '@/utils/api';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignInPage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const signin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await loginUser({ email, password });
      // Axios: response.data is the actual payload
      const data = response.data.data;
      console.log('Signin response:', data);

      if (data.token) {
        toast.success("با موفقیت وارد شدید")
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        router.push('/dashboard');
      } else {
        toast.error(data.message || 'ورود ناموفق بود');
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('خطا در ارتباط با سرور');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='font-Dana  bg-cover bg-center min-h-screen w-full flex items-center justify-center'>
      <ToastContainer
        position="top-right"
        autoClose={7000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className='w-full max-w-md mx-4'>
        <div className='bg-white/90 dark:bg-zinc-800/90 backdrop-blur-md rounded-2xl p-8 shadow-xl'>
          {/* Logo */}
          <div className='flex justify-center mb-8'>
            <div className='bg-brown-600 p-4 rounded-full'>
              <FaCoffee className='w-8 h-8 text-white' />
            </div>
          </div>

          {/* Title */}
          <h1 className='text-2xl font-MorabbaBold text-brown-900 dark:text-white text-center mb-6'>
            ورود به کافی شاپ
          </h1>

          {/* Form */}
          <form onSubmit={signin} className='space-y-4'>
            <div>
              <label className='block text-sm font-DanaMedium text-brown-600 dark:text-brown-300 mb-2'>
                ایمیل
              </label>
              <input
                name="email"
                type="email"
                className='w-full px-4 py-2 rounded-lg bg-white dark:bg-zinc-700 border border-brown-200 dark:border-zinc-600 focus:border-brown-600 dark:focus:border-brown-400 outline-none transition-colors'
                placeholder='ایمیل خود را وارد کنید'
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className='block text-sm font-DanaMedium text-brown-600 dark:text-brown-300 mb-2'>
                رمز عبور
              </label>
              <input
                name="password"
                type="password"
                className='w-full px-4 py-2 rounded-lg bg-white dark:bg-zinc-700 border border-brown-200 dark:border-zinc-600 focus:border-brown-600 dark:focus:border-brown-400 outline-none transition-colors'
                placeholder='رمز عبور خود را وارد کنید'
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>

            <div className='flex items-center justify-between'>
              <label className='flex items-center'>
                <input type="checkbox" className='ml-2' checked={remember} onChange={e => setRemember(e.target.checked)} />
                <span className='text-sm text-brown-600 dark:text-brown-300'>مرا به خاطر بسپار</span>
              </label>
              <Link href="/forgot-password" className='text-sm text-brown-600 dark:text-brown-300 hover:text-brown-900 dark:hover:text-white transition-colors'>
                فراموشی رمز عبور؟
              </Link>
            </div>

            {error && (
              <p className='text-center text-red-600'>
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-brown-600 hover:bg-brown-700 dark:bg-brown-700 dark:hover:bg-brown-600 text-white font-DanaMedium py-2 rounded-lg transition-colors ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {loading ? 'در حال ورود...' : 'ورود'}
            </button>
          </form>

          {/* Signup Link */}
          <p className='text-center mt-6 text-brown-600 dark:text-brown-300'>
            حساب کاربری ندارید؟
            <Link href="/signup" className='text-brown-900 dark:text-white font-DanaMedium mr-1 hover:text-brown-600 dark:hover:text-brown-400 transition-colors'>
              ثبت نام کنید
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
