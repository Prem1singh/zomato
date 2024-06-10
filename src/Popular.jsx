import React from 'react'
import { IoIosArrowForward ,IoIosArrowDown} from "react-icons/io";


export default function Popular() {
    const data=[
        {
            loc:'C Scheme',
            place:'307 places'
        },
        {
            loc:'Malviya Nagar',
            place:'658 places'
        },
        {
            loc:'Tonk Road',
            place:'172 places'
        },
        {
            loc:'Vaishali Nagar',
            place:'730 places'
        },
        {
            loc:'MI Road',
            place:'135 places'
        },
        {
            loc:'Mansarovar',
            place:'1004 places'
        },
        {
            loc:'Raja Park',
            place:'310 places'
        },
        {
            loc:'Bani Park',
            place:'129 places'
        }
    ]
  return (
   
   <div className='max-w-[1200px] mx-auto my-[100px] p-5'>
    <div><p className='lg:text-[30px] text-[20px] font-[400]'>Popular localities in and around Jaipur</p>
    
</div>
    <div className='flex justify-between mt-7 flex-wrap gap-5'> 
    {
    data.map(
     (d,i)=>{
        return(
            <Element d={d} key={i} />
        )
     }
    )
}
    <div className='border rounded-xl p-3 lg:w-[30%] md:w-[48%] w-[100%] text-center cursor-pointer hover:shadow-md mx-auto'>
    <div className='flex items-center justify-center mt-3 gap-3'><p>see more</p>
   <IoIosArrowDown className='inline' /></div>
   </div>

</div>
  
   </div>
   
  )
}
function Element(props) {
    return(
   <div className='border rounded-xl p-3 lg:w-[30%] md:w-[48%] w-[100%] flex justify-between items-center cursor-pointer hover:shadow-md mx-auto'>
    <div><p>{props.d.loc}</p>
    <p>{props.d.place}</p>
    </div>
    <div><IoIosArrowForward /></div>
   </div>
    )
}
