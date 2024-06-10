import React from 'react'

export default function Card() {
    const data=[
        {
            img:'public/img/coll1.webp',
            name:'Order Online',
            about:'Stay home and order to your doorstep'
        },
        {
            img:'public/img/coll2.webp',
            name:'Dining',
            about:'View the city favourite dining venues'
        },
        {
            img:'public/img/coll3.webp',
            name:'Nightlife and Clubs',
            about:'Explore the city’s top nightlife outlets'
        }
    ]
  return (
   
   <div className='max-w-[1200px] mx-auto my-10 flex flex-wrap gap-8 justify-between'>
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
   
  )
}
function Element(props) {
    return(
    <div className='w-[90vw] md:w-[350px] mx-auto h-[220px] border-2  rounded-lg overflow-hidden duration-200 cursor-pointer relative hover:scale-105'><div><img className='w-[350px] h-[190px]' src={props.d.img} alt="" /></div>
    <div className='w-[100%] bg-[white] absolute bottom-0 p-3'><p className='w-[100%] font-bold'>{props.d.name}</p>
    <p className='w-[100%] '>{props.d.about}</p></div></div>
    )
}
