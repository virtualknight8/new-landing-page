import Image from "next/image";

export default function Feature(props){
    return(
        <div>
            <Image src={props.imgPath} width={300} height={169} alt={'Feature images'} />
            <p>{props.heading}</p>
            <p>{props.description}</p>
        </div>

    )
}