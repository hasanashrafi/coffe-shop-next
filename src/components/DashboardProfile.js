import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getDashboard, getProfile } from '@/utils/api';

function DashboardProfile() {
    const [userDetail, setUserDetail] = useState({});
    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    // Mock stats data - replace with real data from your API
    const [stats] = useState({
        totalOrders: 24,
        totalSpent: 1250000,
        favoriteItems: 8,
        loyaltyPoints: 450
    });

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

                setUserDetail(data.data || {});
                setLoading(false);
            } catch (error) {
                console.error('Error fetching profile:', error);
                setLoading(false);
            }
        };
        const fetchDashboard = async () => {
            try {
                const response = await getDashboard(userDetail.id);
                const data = response.data;
                console.log(data)
                setLoading(false);
            } catch (error) {
                console.error('Error fetching profile:', error);
                setLoading(false);
            }
        };

        fetchDashboard()
        fetchUserProfile();
    }, [router]);

    const logoutHandler = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        router.push("/signin");
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-brown-100 to-brown-300 dark:from-brown-900 dark:to-zinc-800 flex items-center justify-center">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-brown-600"></div>
            </div>
        );
    }


    return (
        <div className="min-h-screen bg-gradient-to-br from-brown-100 to-brown-300 dark:from-brown-900 dark:to-zinc-800 font-Dana pt-32 md:pt-40">
            {/* Header */}
            <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-b border-brown-200 dark:border-zinc-700">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 space-x-reverse">
                            <div className="w-12 h-12 bg-gradient-to-br from-brown-300 to-brown-600 rounded-full flex items-center justify-center">
                                <span className="text-white font-DanaDemiBold text-lg">
                                    {userDetail?.username?.charAt(0)?.toUpperCase() || 'U'}
                                </span>
                            </div>
                            <div>
                                <h1 className="text-2xl font-MorabbaMedium text-brown-900 dark:text-white">
                                    پروفایل کاربری
                                </h1>
                                <p className="text-brown-600 dark:text-brown-300 font-DanaMedium">
                                    به گلدن کافی خوش آمدید! ☕
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={logoutHandler}
                            className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors duration-200 font-DanaMedium"
                        >
                            خروج
                        </button>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Profile Card */}
                    <div className="lg:col-span-1">
                        <div className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm rounded-2xl shadow-light dark:shadow-dark p-6 border border-brown-200 dark:border-zinc-700">
                            <div className="text-center mb-6">
                                <div className="w-24 h-24 bg-gradient-to-br from-brown-300 to-brown-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                                    <span className="text-white font-MorabbaBold text-3xl">
                                        {userDetail?.username?.charAt(0)?.toUpperCase() || 'U'}
                                    </span>
                                </div>
                                <h2 className="text-xl font-MorabbaMedium text-brown-900 dark:text-white mb-2">
                                    {userDetail?.username || 'کاربر'}
                                </h2>
                                <p className="text-brown-600 dark:text-brown-300 font-DanaMedium">
                                    عضو از {new Date().getFullYear()}
                                </p>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-3 bg-brown-50 dark:bg-zinc-800 rounded-lg">
                                    <span className="text-brown-700 dark:text-brown-300 font-DanaMedium">نام کاربری:</span>
                                    <span className="text-brown-900 dark:text-white font-DanaDemiBold">
                                        {userDetail?.username || 'نامشخص'}
                                    </span>
                                </div>

                                <div className="flex items-center justify-between p-3 bg-brown-50 dark:bg-zinc-800 rounded-lg">
                                    <span className="text-brown-700 dark:text-brown-300 font-DanaMedium">ایمیل:</span>
                                    <span className="text-brown-900 dark:text-white font-DanaDemiBold">
                                        {userDetail?.email || 'نامشخص'}
                                    </span>
                                </div>

                                <button
                                    onClick={() => setIsEditing(!isEditing)}
                                    className="w-full mt-6 px-4 py-3 bg-brown-600 hover:bg-brown-700 text-white rounded-lg transition-colors duration-200 font-DanaMedium"
                                >
                                    {isEditing ? 'انصراف' : 'ویرایش پروفایل'}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Stats and Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm rounded-xl p-4 border border-brown-200 dark:border-zinc-700">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-brown-600 dark:text-brown-300 text-sm font-DanaMedium">کل سفارشات</p>
                                        <p className="text-2xl font-MorabbaBold text-brown-900 dark:text-white">{stats.totalOrders}</p>
                                    </div>
                                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                                        <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm rounded-xl p-4 border border-brown-200 dark:border-zinc-700">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-brown-600 dark:text-brown-300 text-sm font-DanaMedium">کل هزینه</p>
                                        <p className="text-2xl font-MorabbaBold text-brown-900 dark:text-white">
                                            {stats.totalSpent.toLocaleString()} تومان
                                        </p>
                                    </div>
                                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                                        <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm rounded-xl p-4 border border-brown-200 dark:border-zinc-700">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-brown-600 dark:text-brown-300 text-sm font-DanaMedium">محصولات مورد علاقه</p>
                                        <p className="text-2xl font-MorabbaBold text-brown-900 dark:text-white">{stats.favoriteItems}</p>
                                    </div>
                                    <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                                        <svg className="w-5 h-5 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm rounded-xl p-4 border border-brown-200 dark:border-zinc-700">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-brown-600 dark:text-brown-300 text-sm font-DanaMedium">امتیاز وفاداری</p>
                                        <p className="text-2xl font-MorabbaBold text-brown-900 dark:text-white">{stats.loyaltyPoints}</p>
                                    </div>
                                    <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center">
                                        <svg className="w-5 h-5 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Recent Orders */}
                        <div className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm rounded-2xl shadow-light dark:shadow-dark p-6 border border-brown-200 dark:border-zinc-700">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-MorabbaMedium text-brown-900 dark:text-white">
                                    آخرین سفارشات
                                </h3>
                                <button className="text-brown-600 dark:text-brown-300 hover:text-brown-800 dark:hover:text-white transition-colors font-DanaMedium">
                                    مشاهده همه
                                </button>
                            </div>

                            <div className="space-y-4">
                                {[1, 2, 3].map((order) => (
                                    <div key={order} className="flex items-center justify-between p-4 bg-brown-50 dark:bg-zinc-800 rounded-lg">
                                        <div className="flex items-center space-x-4 space-x-reverse">
                                            <div className="w-12 h-12 bg-brown-200 dark:bg-brown-700 rounded-lg flex items-center justify-center">
                                                <svg className="w-6 h-6 text-brown-600 dark:text-brown-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="font-DanaDemiBold text-brown-900 dark:text-white">
                                                    سفارش #{1000 + order}
                                                </p>
                                                <p className="text-sm text-brown-600 dark:text-brown-300 font-DanaMedium">
                                                    {order === 1 ? 'امریکانو' : order === 2 ? 'کاپوچینو' : 'لاته'} - {order === 1 ? '۲ روز پیش' : order === 2 ? '۱ هفته پیش' : '۲ هفته پیش'}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-DanaDemiBold text-brown-900 dark:text-white">
                                                {(45000 + order * 5000).toLocaleString()} تومان
                                            </p>
                                            <span className={`text-xs px-2 py-1 rounded-full ${order === 1 ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                                                order === 2 ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' :
                                                    'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400'
                                                }`}>
                                                {order === 1 ? 'تحویل شده' : order === 2 ? 'در حال آماده‌سازی' : 'تکمیل شده'}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-gradient-to-br from-brown-300 to-brown-600 rounded-2xl p-6 text-white">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-MorabbaMedium">سفارش جدید</h3>
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                </div>
                                <p className="text-brown-100 font-DanaMedium mb-4">
                                    از منوی متنوع ما سفارش دهید
                                </p>
                                <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors font-DanaMedium">
                                    سفارش دهید
                                </button>
                            </div>

                            <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl p-6 text-white">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-MorabbaMedium">پشتیبانی</h3>
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z" />
                                    </svg>
                                </div>
                                <p className="text-orange-100 font-DanaMedium mb-4">
                                    سوالی دارید؟ با ما تماس بگیرید
                                </p>
                                <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors font-DanaMedium">
                                    تماس با پشتیبانی
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardProfile; 