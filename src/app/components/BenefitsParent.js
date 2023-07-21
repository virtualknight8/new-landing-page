import Benefit from "./Benefit"

export default function BenefitsParent(){

    const benefitsData = [
        {
            imgpath:'https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/8ab92ea8-multor-benefit2-icon.svg',
            heading : 'Time-Saving Convenience',
            description: "Say goodbye to long wait times and phone calls – book appointments effortlessly online, anytime, and from anywhere."
        },
        {
            imgpath:'https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/13b0f11a-multor-benefit1-icon.svg',
            heading: 'Personalized Experience',
            description: "Customize your appointments to suit your needs, with options for preferred dates, times, and service providers."
        },
        {
            imgpath:'https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/c32dd90d-multor-benefit3-icon.svg',
            heading: 'Stress-Free Organization',
            description: " Keep track of all your appointments in one place, receiving timely reminders for a worry-free experience."
        }
    ]

    return(
        <div className="flex-col flex w-auto justify-center items-center px-3 py-7 lg:mx-28">
            <Benefit imgpath={benefitsData[0].imgpath}
                     heading={benefitsData[0].heading}
                     description={benefitsData[0].description} />

            <Benefit imgpath={benefitsData[1].imgpath}
                     heading={benefitsData[1].heading}
                     description={benefitsData[1].description} />
                     
            <Benefit imgpath={benefitsData[2].imgpath}
                     heading={benefitsData[2].heading}
                     description={benefitsData[2].description} />
        </div>


    )
}

 //<div className="flex-col px-3 py-7">
        //    <div className='flex mt-5'><Image className='mr-4 self-start' src={'https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/8ab92ea8-multor-benefit2-icon.svg'} height={50} width={42} /> 
        //    <div>
        //        <p className="text-2xl font-bold">Benefit 1</p>
        //        <p className='text-lg mt-2'>Highlight the benefits of signing up for an 
        //            appointment, online class, or video 
        //            consultation.
        //        </p></div></div>
        //        <div className='flex mt-5'><Image className='mr-4 self-start' src={'https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/13b0f11a-multor-benefit1-icon.svg'} height={50} width={40} />
        //        <div><p className="text-2xl font-bold">Benefit 2</p>
        //        <p className='text-lg mt-2'>For example, fitness instructions might describe how their routines make
        //            people healthier *and* happier.</p></div>
        //        </div>
        //        <div className='flex mt-5'><Image className='mr-4 self-start' src={'https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/c32dd90d-multor-benefit3-icon.svg'} height={55} width={45} />
        //        <div><p className="text-2xl font-bold">Benefit 3</p>
        //        <p className='text-lg mt-2'>Remind visitors how easy it is to 
        //            claim your offer and start enjoying the benefits.</p></div>
        //        </div>
        //</div>