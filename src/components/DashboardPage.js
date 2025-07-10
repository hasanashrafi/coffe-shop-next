import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

function DashboardPage() {
    const [userDetail, setUserDetail] = useState([])
    const router = useRouter()

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/signin');
            return;
        }
        try {
            fetch("http://localhost:3004/api/users/profile", {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.message === 'Invalid token' || data.message === 'Authentication required') {
                        localStorage.removeItem('token');
                        router.push('/signin');
                        return;
                    }
                    setUserDetail(data.data)
                    console.log(data)
                })
                .catch(err => {
                    console.log(err)
                })
        } catch (error) {
            console.log(error.message)
        }
    }, [])

    const logoutHandler = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        router.push("/signin")
    }
    return (
        <div className='font-DanaMedium pt-8 md:pt-24 lg:pt-48  min-h-screen '>
            <div className='container '>
                <div className='flex items-center justify-between '>
                    <div><p className='text-2xl md:text-4xl font-DanaDemiBold'>به گلدن کافی خوش آمدید!☕</p>
                        <p className='p-2 m-2'>نام کاربری: {userDetail?.username}</p>
                        <p className='p-2 m-2'>ایمیل: {userDetail?.email}</p></div>
                    <button onClick={logoutHandler} className='py-2 px-4 rounded-md text-white bg-red-600'>خروج</button>
                </div>
            </div>
        </div>
    )
}

export default DashboardPage
