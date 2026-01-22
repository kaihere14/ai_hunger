import React from 'react'
import Card from './Card'
import axios from 'axios'
import { AI } from '@/utils/models/ai.model';




const CardContainer =async () => {
    const respone = await axios.get("http://localhost:3000/api/ai");
    const fakeData = respone.data;
  return (
    <div className='h-fit w-screen flex justify-evenly gap-10 flex-wrap'>
        {fakeData?.map((item:AI) => (
            <Card key={item.slotNumber} slotNumber={item.slotNumber} name={item.name} image={item.image} description={item.description} personality={item.personality}/>
        ))}
    </div>
  )
}

export default CardContainer