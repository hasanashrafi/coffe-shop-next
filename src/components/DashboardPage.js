import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { getProfile } from '@/utils/api';

function DashboardPage() {
    const [userDetail, setUserDetail] = useState([])
    const router = useRouter()

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/signin');
            return;
        }
        const fetchUserProfile = async () => {
            try {
                const response = await getProfile();
                const data = response.data;

                if (data.message === 'Invalid token' || data.message === 'Authentication required') {
                    localStorage.removeItem('token');
                    router.push('/signin');
                    return;
                }
                setUserDetail(data.data);
                console.log(data);
            } catch (error) {
                console.log(error.message);
            }
        };

        fetchUserProfile();
    }, [])

    const logoutHandler = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        router.push("/signin")
    }
    return (
        <div className='font-DanaMedium pt-32 md:pt-40 min-h-screen bg-gradient-to-br from-brown-100 to-brown-300 dark:from-brown-900 dark:to-zinc-800'>
            <div className='container max-w-5xl'>
                <div className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm rounded-2xl shadow-light dark:shadow-dark p-8 border border-brown-200 dark:border-zinc-700">
                    <div className="text-center mb-8">
                        <h1 className='text-3xl md:text-5xl font-MorabbaMedium text-brown-900 dark:text-white mb-4'>به گلدن کافی خوش آمدید!☕</h1>
                        <p className="text-brown-600 dark:text-brown-300 font-DanaMedium text-lg">داشبورد مدیریتی شما</p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
                        <div className="bg-brown-50 dark:bg-zinc-800 rounded-xl p-6">
                            <h3 className="text-xl font-MorabbaMedium text-brown-900 dark:text-white mb-4">اطلاعات کاربری</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-brown-600 dark:text-brown-300 font-DanaMedium">نام کاربری:</span>
                                    <span className="text-brown-900 dark:text-white font-DanaDemiBold">{userDetail?.username}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-brown-600 dark:text-brown-300 font-DanaMedium">ایمیل:</span>
                                    <span className="text-brown-900 dark:text-white font-DanaDemiBold">{userDetail?.email}</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-brown-50 dark:bg-zinc-800 rounded-xl p-6">
                            <h3 className="text-xl font-MorabbaMedium text-brown-900 dark:text-white mb-4">دسترسی سریع</h3>
                            <div className="space-y-3">
                                <Link href="/dashboard/profile" className="block w-full px-4 py-3 bg-brown-600 hover:bg-brown-700 text-white rounded-lg transition-colors font-DanaMedium text-center">
                                    مشاهده پروفایل کامل
                                </Link>
                                <Link href="/products" className="block w-full px-4 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors font-DanaMedium text-center">
                                    مشاهده محصولات
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between items-center">
                        <div className="text-brown-600 dark:text-brown-300 font-DanaMedium">
                            آخرین ورود: {new Date().toLocaleDateString('fa-IR')}
                        </div>
                        <button onClick={logoutHandler} className='py-3 px-8 rounded-lg text-white bg-red-500 hover:bg-red-600 transition-colors font-DanaMedium'>
                            خروج
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardPage
