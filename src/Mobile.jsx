import React from 'react'

export default function Mobile() {
    return (
        <div className='w-[100vw] bg-[#FFFBF7] my-24 py-12 flex flex-col lg:flex-row p-5 justify-center items-center'>

            <div><img src="public/img/mobile.webp" alt="" className='w-[250px] mt-20 me-10' /></div>
            <div><p className='lg:text-[35px] text-[20px] my-5'>public/img/mobile.webp</p>
                <p className='text-[13px] text-[#777676] my-3'>We will send you a link, open it on your phone to download <br /> the app</p>
                <form >
                    <div className='flex gap-10 my-3'>
                        <div ><input name='radio' type="radio" id='email' className='radio cursor-pointer' /><label htmlFor="email" className='ms-2 cursor-pointer'>Email</label></div>
                        <div >
                            <input name='radio' type="radio" id='phone' className='radio cursor-pointer' /><label htmlFor="phone" className='ms-2 cursor-pointer'>Phone</label></div>
                    </div>
                    <div className='my-3'><input type="email" placeholder='Email' className='border  w-[300px] focus:outline-none text-[20px] py-2 px-4  rounded-lg' /> <button className='px-3 py-2 bg-[#ef4f5f] rounded-lg text-white text-[20px] ms-3' >Share App Link</button></div>
                </form>
                <p className='text-[13px] text-[#777676] my-3'>Download app from</p>
                <div className='flex gap-4'><img src="public/img/play.webp" className='w-[130px]' alt="" /><img src="public/img/app.webp" className='w-[130px]' alt="" /></div>
            </div>


        </div>
    )
}
