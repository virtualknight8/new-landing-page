import Image from "next/image";

export default function Benefit(props){
    return(
        <div className='flex mt-5 w-96'><Image className='mr-4 self-start' 
        src={props.imgpath} height={55} width={45} alt={'woman using computer'} />
               
               <div>
                
                <p className="text-2xl font-bold">{props.heading}</p>
                
                <p className='text-lg mt-2'>{props.description}</p>
                    </div>
                </div>


    )




}