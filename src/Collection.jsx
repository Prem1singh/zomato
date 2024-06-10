import React from 'react'
import { IoMdArrowDropright } from "react-icons/io";


export default function Collection() {
    const data=[
        {
            img:'public/img/card1.webp',
            name:'Newly Opened Restaurants',
            about:'17 Places'
        },
        {
            img:'public/img/card2.webp',
            name:'Best Royal Dining Places',
            about:'11 Places'
        },
        {
            img:'public/img/card3.webp',
            name:'Best of live screenings',
            about:'39 Places'
        },
        {
            img:'public/img/card4.webp',
            name:'Best Insta-worthy Places',
            about:'36 Places'
        }
    ]
  return (
   
   <div className='max-w-[1200px] mx-auto my-[100px] p-5'>
    <div><p className='lg:text-[30px] text-[20px] font-[600]'>Collections</p>
    <div className='flex justify-between gap-5 lg:text-[16px] text-[13px]'><p className='text-[gray]'>Explore curated lists of top restaurants, cafes, pubs, and bars in Jaipur, based on trends</p> <p className='text-[#f48c9f] lg:block hidden'>All collections in Jaipur <IoMdArrowDropright className='inline-block text-[25px]'/>
</p> </div></div>
    <div className='flex justify-between mt-7 flex-wrap gap-7'> 
    {
    data.map(
     (d,i)=>{
        return(
            <Element d={d} key={i} />
        )
     }
    )
}
</div>
  
   </div>
   
  )
}
function Element(props) {
    return(
    <div className='w-[267px] h-[320px] mx-auto border-2  rounded-lg overflow-hidden duration-200 cursor-pointer relative hover:scale-105'><div><img className='w-w-[267px] h-[320px]' src={props.d.img} alt="" /></div>
    <div className='w-[100%] coll absolute bottom-0 p-3 text-white pt-10'><p className='w-[100%]'>{props.d.name}</p>
    <p className='w-[100%] '>{props.d.about}<IoMdArrowDropright className='inline-block text-[20px]'/></p></div></div>
    )
}
