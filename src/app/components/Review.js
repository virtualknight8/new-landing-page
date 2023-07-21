import Image from "next/image";

export default function Review(props){
    return(
        <div className="mb-10 max-w-md lg:w-2/5">
        <Image className="mb-3" src={props.starPath}
        height={21} width={90} alt={'review stars'}></Image>
        <p className="text-left mb-7 italic text-xl">{props.reviewContent}</p>
            
            <div>
                <Image className="inline-block -mt-5" src={props.picturePath} height={70} width={70} alt={'profile picture'}></Image>
             <div className="inline-block ml-5">
                <p className="font-bold">{props.userName}</p>
             <p>{props.location}</p>
             </div>

             </div>
            
        </div>
    )

}