import Image from "next/image";

export default function Benefit(props){
    return(
        <div className='flex mt-5 max-w-sm'><Image className='mr-4 self-start' 
        src={props.imgpath} height={55} width={45} alt={'woman using computer'} />
               
               <div>
                
                <p className="text-2xl font-bold">{props.heading}</p>
                
                <p className='text-lg mt-2 font-light'>{props.description}</p>
                    </div>
                </div>


    )




}