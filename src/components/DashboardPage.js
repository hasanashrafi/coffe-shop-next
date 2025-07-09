import React, { useEffect, useState } from 'react'

function DashboardPage() {
    const [userDetail, setUserDetail] = useState([])
    useEffect(() => {
        try {
            const token = localStorage.getItem('token');
            fetch("http://localhost:3004/api/users/profile", {
                headers: {
                    'Authorization': token ? `Bearer ${token}` : ''
                }
            })
                .then(res => res.json())
                .then(data => {
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
    return (
        <div>
            <p>dashboard</p>
            <p>{userDetail.username}</p>
            <p>{userDetail.email}</p>
        </div>
    )
}

export default DashboardPage
