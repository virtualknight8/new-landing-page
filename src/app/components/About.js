import Image from "next/image";

export default function About(){

    return(

       <div className="flex justify-center items-center w-full"> 
        <div  className="px-3 w-97 md:w-194 mt-10 mb-12 md:flex md:flex-row">
            <Image className="mb-10 md:mr-16 " src={'/girlinofficesmall.jpg'} width={400} height={200} alt={'woman on laptop'} />
           <div > <p className="text-cyan-500 font-bold mb-5">ABOUT</p>
            <p className="text-3xl font-bold tracking-wide mb-5">Discover Our Story</p>
            <p className="font-light">As the proud owner of our business, I am passionate about providing exceptional services
            that cater to the unique needs of our valued customers. What sets us apart is our unwavering commitment to
             delivering personalized experiences.</p></div>
        </div>
        </div>
    )
}