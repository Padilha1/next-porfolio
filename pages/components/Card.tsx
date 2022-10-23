import Image from 'next/image'
import React from 'react'
import NLW from '../../public/NLW.png'
import S4 from '../../public/S4.png'


export default function Card1 (){
  return (
    <div className='text-center shadow-lg p-10 rounded-xl my-10 lg:text-lg dark:shadow-[#352D39]'>
        <div className='border-white'>
            <a href=""><Image src={S4} width={300} height={150} alt=""/></a>
        </div>
        <h3 className='text-xl font-semibold pt-7 pb-2 border-b-4 border-purple-700'>S4 Treinamentos website</h3>
        <p className='py-2'>Created a SPA to S4 Treinamentos company, showing their courses/trainings and their history.
            Also a form to contact using email.js.
        </p>
        <h4 className='py-4 text-purple-600 font-semibold'>Tools I used</h4>
        <p className='text-gray-800 py-1 dark:text-slate-200'>React.Js and Typescript</p>
        <p className='text-gray-800 py-1 dark:text-slate-200'>Radix and Keen Slider</p>
        <p className='text-gray-800 py-1 dark:text-slate-200'>Vite</p>
    
    </div>
  )
}


export const Card2 = () => {
    return (
        <div className='text-center shadow-lg p-10 rounded-xl my-10 lg:text-lg dark:shadow-[#352D39]' >
            <a href=""><Image src={NLW} width={300} height={150} alt=""/></a>
            <h3 className='text-xl font-semibold pt-7 pb-2 border-b-4 border-purple-700'>NLW eSports web application</h3>
            <p className='py-2 max-w-5xl'>Created a web application where you create/post an AD to find someone to play together.
            You choose the game, pick the day you play and after you can see the ADs created per Game.</p>
            <h4 className='py-4 text-purple-600 font-semibold'>Tools I used</h4>
            <p className='text-gray-800 py-1 dark:text-slate-200'> React.js and Typescript</p>
            <p className='text-gray-800 py-1 dark:text-slate-200'>Node.js | Axios | Express</p>
            <p className='text-gray-800 py-1 dark:text-slate-200'>Vite</p>
        
        </div>
      )
}

export const Card3 = () => {
    return (
        <div className=' text-center flex justify-center items-center shadow-lg p-10 rounded-xl mb-10 lg:text-lg dark:shadow-[#352D39]' >
            <a href=""></a>
            <h3 className='text-xl font-semibold pt-7 pb-2 border-b-4 border-purple-700'>More to come...</h3>
            {/* <p className='py-2 max-w-5xl'>Created a web application where you create/post an AD to find someone to play together.
            You choose the game, pick the day you play and after you can see the ADs created per Game.</p>
            <h4 className='py-4 text-purple-600 font-semibold'>Tools I used</h4>
            <p className='text-gray-800 py-1 dark:text-slate-200'> React.js and Typescript</p>
            <p className='text-gray-800 py-1 dark:text-slate-200'>Node.js | Axios | Express</p>
            <p className='text-gray-800 py-1 dark:text-slate-200'>Vite</p> */}
        
        </div>
      )
}
