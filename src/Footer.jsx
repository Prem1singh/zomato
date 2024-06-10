import React from 'react'

export default function Footer() {
    return (
        <div className='bg-[#f8f8f8] p-10 mt-5 '>
            <div className='max-w-[1200px] mx-auto '>
                <div className='flex justify-between flex-wrap gap-10'>
                    <div><img src="public/img/bottomlogo.webp" alt="" />
                    </div>
                    <div className='flex items-center gap-3'><select name="" id="" className='w-[100px] px-3 py-2 rounded-lg focus:outline-none border border-black bg-transparent'>
                        <option value="India">India</option>
                        <option value="Uae">UAE</option>
                    </select>
                        <select name="" id="" className='w-[100px] px-3 py-2 rounded-lg focus:outline-none border border-black bg-transparent'>
                            <option value="English">English</option>
                            <option value="Hindi">Hindi</option>
                        </select>
                    </div>
                </div>

                <div className='flex gap-10 lg:gap-36 text-[gray] py-10 border-b-2 text-[14px] flex-wrap'>
                    <div>
                        <ul className='flex flex-col gap-2'>
                            <li className='text-black text-[18px]'>About Zomato</li>
                            <li><a href="">Who We Are</a></li>
                            <li><a href="">Blog</a></li>
                            <li><a href="">Work With Us</a></li>
                            <li><a href="">Investor Relations</a></li>
                            <li><a href="">Report Fraud</a></li>
                            <li><a href="">Press Kit</a></li>
                            <li><a href="">Contact Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul className='flex flex-col gap-2'>
                            <li className='text-black text-[18px]'>Zomaverse</li>
                            <li><a href="">Zomato</a></li>
                            <li><a href="">Blinkit</a></li>
                            <li><a href="">Feeding India</a></li>
                            <li><a href="">Hyperpure</a></li>
                            <li><a href="">Zomaland</a></li>
                            
                        </ul>
                    </div>
                    <div>
                        <ul className='flex flex-col gap-2'>
                            <li className='text-black text-[18px]'>For Restaurants</li>
                            <li><a href="">Partner With Us</a></li>
                            <li><a href="">Apps For You</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul className='flex flex-col gap-2'>
                            <li className='text-black text-[18px]'>Learn More</li>
                            <li><a href="">Privacy</a></li>
                            <li><a href="">Security</a></li>
                            <li><a href="">Terms</a></li>
                            <li><a href="">Sitemap</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul className='flex flex-col gap-2'>
                            <li className='text-black text-[18px]' >Social links</li>
                            <div className='flex gap-3'>
                            <img src="public/img/download (3).svg" alt="" />
                            <img src="public/img/download (4).svg" alt="" />
                            <img src="public/img/download (5).svg" alt="" />
                            <img src="public/img/download (6).svg" alt="" />
                            <img src="public/img/download (7).svg" alt="" /></div>
                            <div className='flex flex-col gap-3 mt-3'>
                            <img src="public/img/app.webp" alt=""  className='h-[40px]' />
                            <img src="public/img/play.webp " alt="" className='h-[40px]' />
                            </div>
                        </ul>
                    </div>
                </div>
                <div><p className='text-[gray] text-[13px] mt-5'>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © Zomato™ Ltd. All rights reserved.</p></div>
            </div>
        </div>

    )
}
