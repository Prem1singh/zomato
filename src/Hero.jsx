import React, { useEffect, useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { FaUser, FaTimes } from "react-icons/fa";

export default function Hero(props) {
    const [toggle, settoggle] = useState(true)
    const [nav, setnav] = useState(false);

    useEffect(
        ()=>{
            props.full(nav)
        },[nav]
    )
    return (
        <div className='w-[100vw] h-[70vh] min-h-[600px]  text-white bg-cover bg-[url(public/img/Hero.webp)] p-5'>
            <div className='lg:hidden block absolute right-5 text-[30px]' onClick={() => { setnav(true) }}><FaUser /></div>

            <div className='fixed lg:hidden block  top-[0px] z-10 bg-[#000000c5] h-[100vh] w-[70vw] duration-300' style={{
                left: (nav) ? '0px' : '-100%'
            }}><ul className='flex flex-col gap-8 md:text-[34px] font-[300] ps-[50px] text-[24px] md:ps-[150px] pt-[50px] '>
                    <li>Get the App</li>
                    <li><a href="#">Investor Relations</a></li>
                    <li><a href="#">Add restaurant</a></li>
                    <li><a href="#">Log in</a></li>
                    <li><a href="#">Sign up</a></li>
                    <div className='absolute top-[20px] right-[30px]' onClick={() => { setnav(false) }}><FaTimes /></div>
                </ul></div>


            <div className='max-w-[1200px] mx-auto lg:flex justify-between hidden'><div>Get the App</div>
                <div><ul className='flex gap-8 text-[20px] font-[300]'>
                    <li><a href="#">Investor Relations</a></li>
                    <li><a href="#">Add restaurant</a></li>
                    <li><a href="#">Log in</a></li>
                    <li><a href="#">Sign up</a></li>
                </ul></div></div>
            <div className='text-center mt-[100px]'><img src="public/img/8313a97515fcb0447d2d77c276532a511583262271.webp" alt=" " className='mx-auto lg:w-[300px] w-[150px]' />
                <p className='my-10 text-[25px] lg:text-[40px] '>Discover the best food & drinks in Jaipur</p>
                <div className='max-w-[900px] mx-auto flex items-center flex-col lg:flex-row gap-5 lg:gap-0  text-[23px] text-[#6e6d6d] font-[300] h-[70px]'>
                    <div className='flex gap-4 w-[80vw] lg:w-[300px] border-e-2 border-e-gray relative  p-5 lg:rounded-tl-lg  lg:rounded-bl-lg lg:rounded-br-none lg:rounded-tr-none rounded-lg bg-white'><img src="public/img/download (11).svg" alt="" /> Jaipur <div className='absolute right-[10px] top-[20px] text-[35px] text-black cursor-pointer' ><IoMdArrowDropdown onClick={() => { settoggle(!toggle) }} className='duration-300' style={{
                        transform: (toggle) ? 'rotate(0deg)' : 'rotate(180deg)'
                    }} />
                    </div>
                        <div className=' absolute  left-[-20px] lg:w-[400px] w-auto p-5 bg-white rounded-lg flex gap-4 duration-300 origin-top cursor-pointer ' style={{
                            top: (toggle) ? '50px' : '70px',
                            scale: (toggle) ? '0' : '1',
                            visibility: (toggle) ? 'hidden' : 'visible'
                        }}><div ><img src="public/img/download (18).svg" className='w-[25px] mt-2' alt="" /></div>
                            <div><p className='text-[#f68195]'>Detect current location</p>
                                <p className='text-gray text-[14px] text-left'>Using GPS</p></div></div>
                    </div>
                    <div className='flex items-center gap-4 ps-3 p-5 lg:rounded-tr-lg lg:rounded-br-lg lg:rounded-tl-none lg:rounded-bl-none rounded-lg lg:w-auto w-[80vw] bg-white' ><img src="public/img/download (14).svg" alt="" className='w-[25px]' /> <input type="text" className='focus:outline-none w-[100%] lg:w-[500px]' placeholder="Search for restaurant, cuisine or a dish" onClick={() => { settoggle(true) }} /></div>
                </div>
            </div>
        </div>
    )
}
