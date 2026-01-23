"use client"
import React, { useState } from 'react'
import { useAnswer } from '@/utils/context/AnswerContext'
import axios from "axios";

const InputContainer = () => {
    const [message, setMessage] = useState("")
    const { setAnswer } = useAnswer()

    const formSumbitHandle = async (e: React.FormEvent) => {
        e.preventDefault();
        const repsonse = await axios.post("http://localhost:3000/api/ai-worker", { message })
        setAnswer("This is a fake answer for now!");
        setMessage("")

    }
    return (
        <div className='w-full h-fit absolute bottom-5 left-0 right-0 flex items-center justify-center pl-60'>
            <form onSubmit={(e) => formSumbitHandle(e)} className='w-[90%] h-1/2 flex items-center justify-center'>
                <input onChange={(e) => setMessage(e.target.value)} value={message} type="text" placeholder='Enter your message' className='w-[90%] h-1/2 rounded-l-full border-2 border-black/20 p-4' />
                <button className='w-[10%] h-1/2 rounded-r-full cursor-pointer hover:bg-black/80 hover:border-black/20 transition-colors duration-100 border-3 border-black p-3 bg-black text-white' type="submit">Submit</button>
            </form>
        </div>
    )
}

export default InputContainer