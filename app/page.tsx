import CardContainer from '@/components/CardContainer'
import InputContainer from '@/components/InputContainer'
import Center from '@/components/Center'
import { AnswerProvider } from '@/utils/context/AnswerContext'


const page = () => {

  return (
    <div className='h-screen w-screen flex items-center flex-col p-2'>
      <AnswerProvider>
        <CardContainer />
        <Center />
        <InputContainer />
      </AnswerProvider>
    </div>
  )
}

export default page