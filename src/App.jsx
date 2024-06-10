import React, { useState } from 'react'
import Hero from './Hero'
import Card from './Card'
import Collection from './Collection'
import Popular from './Popular'
import Mobile from './Mobile'
import Accord from './Accord'
import Footer from './Footer'

export default function App() {
  const [fullstate,setstate]=useState(false);
  const full=(data)=>{
    setstate(data)
  }
  return (
    <div style={{
      height:(fullstate)?'100vh':'auto',
      overflow:(fullstate)?'hidden':'visible'
    }}>
   <Hero full={full} />
   <Card />
   <Collection />
   <Popular />
   <Mobile />
   <Accord />
   <Footer />
   </div>
  )
}
