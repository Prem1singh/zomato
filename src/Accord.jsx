import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";

export default function Accord() {
   
    const data=[
        {
            title:'Popular cuisines near me',
            desc:'Bakery food near me . Beverages food near me . Biryani food near m .  Burger food near me . Chinese food near me . Coffee food near me . Continental food near me . Desserts food near me . Italian food near me . Momos food near me . Mughlai food near me . North Indian food near me . Pizza food near me . Rajasthani food near me . Rolls food near me .  Sandwich food near me . Shake food near me . South Indian food near me . Street food near me . Tea food near me '
        },
        {
            title:'Popular restaurant types near me',
            desc:'Bakeries near me . Bars near me . Beverage Shops near me . Bhojanalya near me . Cafés near me . Casual Dining near me . Clubs near me . Cocktail Bars near me . Dessert Parlors near me . Dhabas near me . Fine Dining near me . Food Courts near me . Food Trucks near me . Kiosks near me . Lounges near me . Microbreweries near me . Paan Shop near me . Quick Bites near me . Sweet Shops near me'
        },{
            title:'Top Restaurant Chains',
            desc:'Bikanervala Biryani BluesBurger KingBurger SinghDunkin  Donuts  KFCMc  Donalds Pizza HutSagar Ratna'
        }
        ,{
            title:'Popular cuisines near me',
            desc:'Bakery food near me . Beverages food near me . Biryani food near m .  Burger food near me . Chinese food near me . Coffee food near me . Continental food near me . Desserts food near me . Italian food near me . Momos food near me . Mughlai food near me . North Indian food near me . Pizza food near me . Rajasthani food near me . Rolls food near me .  Sandwich food near me . Shake food near me . South Indian food near me . Street food near me . Tea food near me '
        }
    ]

    return (
        <div className='max-w-[1200px] mx-auto p-5 '>

            <h2 className='text-[23px]' >Explore options near me</h2>
            
           {
            data.map(
                (d,i)=>{
                    return(
                        <Accordian d={d} key={i} />
                    )
                }
            )
           }

        </div>

    )
}
function Accordian(props) {
    const [tackle, settoggle] = useState(true);
    return(
    <div className='border p-5 rounded-lg cursor-pointer my-5' onClick={() => { settoggle(!tackle) }}>
                <div className='flex justify-between items-center text-[20px] font-[600]' ><h2>{props.d.title}</h2>
                    <div className='duration-200' style={{
                        transform: (tackle) ? 'rotate(0deg)' : 'rotate(180deg)'

                    }} ><IoIosArrowDown /></div>

                </div>
                <div style={{display:(tackle)?'none':'block'}}><p>{props.d.desc}</p></div>

            </div>
    )
}