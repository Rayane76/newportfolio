'use client'
import { useState } from 'react';



export default function CvPreview(){

    return(
        <div id='pvCv'>
        <div onClick={()=>window.scrollTo(0,1000,{scrollBehavior: "smooth"})} className="cursor-pointer font-bold whitespace-nowrap px-10 py-3 text-fun-white border-2 text-xl rounded-full border-fun-white bg-bgColor hover:bg-fun-pink hover:text-white hover:border-fun-pink transition-colors">
           Tell me more
          </div>
          </div>
    )
}