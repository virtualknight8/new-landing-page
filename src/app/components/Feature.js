import Image from "next/image";

export default function Feature(props){
    return(
        <div className="mb-5 px-3 flex flex-col mt-16" style={{maxWidth:'400px'}}>
            <Image className="mb-6 max-w-sm" src={props.imgPath} width={400} height={169} alt={'Feature images'} />
            <p className="font-bold text-xl tracking-wider mb-3">{props.heading}</p>
            <p className="font-light w-4/5 tracking-wider">{props.description}</p>
        </div>

    )
}