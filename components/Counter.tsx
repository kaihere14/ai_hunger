import axios from 'axios'


const Counter = async () => {
    const response = await axios.get("http://localhost:3000/api/counter");
    const total = response.data.TotalAiDemolished;
  return (
    <div className='w-fit h-fit mt-10 p-4 rounded-full self-start ml-10 sm:ml-23 font-bold bg-zinc-300'>
        <p>Total AI Demolished: {total}</p>
      </div>
  )
}

export default Counter