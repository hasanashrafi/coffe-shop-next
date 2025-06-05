import Link from 'next/link'
import React from 'react'

function Links() {
    return (
      <>
            <li>
                <Link href="/" className=' '>قهوه ویژه</Link>
            </li>
            <li>
                <Link href="/" className=' '>قهوه ویژه در سطح جهانی</Link>
            </li>
            <li>
                <Link href="/" className=' '>قهوه درجه یک</Link>
            </li>
            <li>
                <Link href="/" className=''>ترکیبات تجاری </Link>
            </li>
            <li>
                <Link href="/" className=' '>کپسول قهوه</Link>
            </li>
            <li>
                <Link href="/" className=' '>قهوه زینو برزیلی</Link>
            </li>
      </>
    )
}

export default Links
