"use client"
import { useAnswer } from '@/utils/context/AnswerContext';
import React from 'react'

const FinalAnswer = () => {
  const { answer } = useAnswer();
  return (
    <div className='mt-10 ml-10 w-[77%] border rounded-4xl h-full flex justify-center items-center'>
      <p className='text-2xl font-bold text-black tracking-tight'>{answer ? answer : "Your answer will be here"}</p>
    </div>
  )
}

export default FinalAnswer