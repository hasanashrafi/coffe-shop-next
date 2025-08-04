import React, { useState } from 'react'
import Link from 'next/link'
import { FaCoffee } from 'react-icons/fa'
import { useRouter } from 'next/router'
import { signupUser } from '@/utils/api';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignUpPage = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Add validation
        if (!formData.username || !formData.email || !formData.password) {
            toast.error('لطفاً تمام فیلدها را پر کنید');
            return;
        }

        if (formData.password.length < 6) {
            toast.error('رمز عبور باید حداقل ۶ کاراکتر باشد');
            return;
        }

        if (!formData.email.includes('@')) {
            toast.error('لطفاً یک ایمیل معتبر وارد کنید');
            return;
        }

        try {
            setLoading(true);

            const response = await signupUser({
                ...formData,
                email: formData.email.toLowerCase()
            });

            const data = response.data;
            console.log('Signup response:', data);

            if (data.success) {
                toast.success('ثبت نام با موفقیت انجام شد');
                // Store the new token and user data
                localStorage.setItem("token", data.token);
                localStorage.setItem("user", JSON.stringify(data.user));

                // Redirect to home page
                router.push("/signin");
            } else {
                throw new Error(data.message || 'ثبت نام ناموفق بود');
            }
        } catch (error) {
            toast.error(error.message || 'خطا در ثبت نام');
        } finally {
            setLoading(false);
        }
    };
    return (
        <>
            <ToastContainer />
            <div className='  bg-cover bg-center min-h-screen  flex items-center justify-center'>
                <div className='w-full max-w-md mx-4'>
                    <div className='bg-white/90 dark:bg-zinc-800/90 backdrop-blur-md rounded-2xl p-8 shadow-md shadow-brown-300/90'>
                        {/* Logo */}
                        <div className='flex justify-center mb-8'>
                            <div className='bg-brown-600 p-4 rounded-full'>
                                <FaCoffee className='w-8 h-8 text-white' />
                            </div>
                        </div>

                        {/* Title */}
                        <h1 className='text-2xl font-MorabbaBold text-brown-900 dark:text-white text-center mb-6'>
                            ثبت نام در کافی شاپ
                        </h1>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className='space-y-4'>
                            <div>
                                <label className='block text-sm font-DanaMedium text-brown-600 dark:text-brown-300 mb-2'>
                                    نام کاربری
                                </label>
                                <input
                                    name="username"
                                    onChange={handleChange}
                                    value={formData.username}
                                    type="text"
                                    className='w-full px-4 py-2 rounded-lg bg-white dark:bg-zinc-700 border border-brown-200 dark:border-zinc-600 focus:border-brown-600 dark:focus:border-brown-400 outline-none transition-colors font-Dana'
                                    placeholder='نام کاربری خود را وارد کنید'
                                />
                            </div>

                            <div>
                                <label className='block text-sm font-DanaMedium text-brown-600 dark:text-brown-300 mb-2'>
                                    ایمیل
                                </label>
                                <input
                                    name="email"
                                    onChange={handleChange}
                                    value={formData.email}
                                    type="email"
                                    className='w-full px-4 py-2 rounded-lg bg-white dark:bg-zinc-700 border border-brown-200 dark:border-zinc-600 focus:border-brown-600 dark:focus:border-brown-400 outline-none transition-colors font-Dana'
                                    placeholder='ایمیل خود را وارد کنید'
                                />
                            </div>

                            <div>
                                <label className='block text-sm font-DanaMedium text-brown-600 dark:text-brown-300 mb-2'>
                                    رمز عبور
                                </label>
                                <input
                                    name="password"
                                    onChange={handleChange}
                                    value={formData.password}
                                    type="password"
                                    className='w-full px-4 py-2 rounded-lg bg-white dark:bg-zinc-700 border border-brown-200 dark:border-zinc-600 focus:border-brown-600 dark:focus:border-brown-400 outline-none transition-colors font-Dana '
                                    placeholder='رمز عبور خود را وارد کنید'
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full  bg-brown-600 hover:bg-brown-700 dark:bg-brown-700 dark:hover:bg-brown-600 text-white font-DanaMedium py-2 rounded-lg transition-colors ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                {loading ? 'در حال ثبت نام...' : 'ثبت نام'}
                            </button>


                        </form>

                        {/* Login Link */}
                        <p className='font-Dana text-center mt-6 text-brown-600 dark:text-brown-300'>
                            قبلاً ثبت نام کرده‌اید؟
                            <Link href="/signin" className='text-brown-900 dark:text-white font-DanaMedium mr-1 hover:text-brown-600 dark:hover:text-brown-400 transition-colors'>
                                وارد شوید
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUpPage
