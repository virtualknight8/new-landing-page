
import Image from 'next/image'

export default function Benefits(){
    return(

        <div className="flex-col px-3 py-7">
            <div className='flex mt-5'><Image className='mr-4 self-start' src={'https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/8ab92ea8-multor-benefit2-icon.svg'} height={50} width={42} /> 
            <div>
                <p className="text-2xl font-bold">Benefit 1</p>
                <p className='text-lg mt-2'>Highlight the benefits of signing up for an 
                    appointment, online class, or video 
                    consultation.
                </p></div></div>
                <div className='flex mt-5'><Image className='mr-4 self-start' src={'https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/13b0f11a-multor-benefit1-icon.svg'} height={50} width={40} />
                <div><p className="text-2xl font-bold">Benefit 2</p>
                <p className='text-lg mt-2'>For example, fitness instructions might describe how their routines make
                    people healthier *and* happier.</p></div>
                </div>
                <div className='flex mt-5'><Image className='mr-4 self-start' src={'https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/c32dd90d-multor-benefit3-icon.svg'} height={55} width={45} />
                <div><p className="text-2xl font-bold">Benefit 3</p>
                <p className='text-lg mt-2'>Remind visitors how easy it is to 
                    claim your offer and start enjoying the benefits.</p></div>
                </div>
        </div>

    )
}