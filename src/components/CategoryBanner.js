import React from 'react'

function CategoryBanner() {
    return (
        <section className='my-20'>
            <div className='container max-w-7xl '>

               <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
               <div className=' bg-white/20 rounded-2xl  h-[248px] '>
                    <h5 className='text-4xl text-zinc-700 dark:text-white'>
                        انواع قهوه
                    </h5>
                    <p className='text-xl font-DanaMedium mt-0.5 md:mt-1.5 text-zinc-700 dark:text-white'>
                        ترکیبی و تک خاستگاه
                    </p>
                </div>
                <div className='bg-white/20 rounded-2xl  h-[248px] '>
                    <h5 className='text-4xl text-zinc-700 dark:text-white'>
                        پودر های فوری
                    </h5>
                    <p className='text-xl font-DanaMedium mt-0.5 md:mt-1.5 text-zinc-700 dark:text-white'>
                        نسکافه ، هات چاکلت ، ماسالا
                    </p>
                </div>

               </div>
            </div>
        </section>
    )
}

export default CategoryBanner
