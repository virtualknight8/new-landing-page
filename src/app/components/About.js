import Image from "next/image";

export default function About(){

    return(

       <div className="flex justify-center items-center w-full"> 
        <div  className="px-3 w-97 md:w-194 mt-10 mb-12 md:flex md:flex-row">
            <Image className="mb-10 md:mr-16 " src={'/girlinofficesmall.jpg'} width={400} height={200} alt={'woman on laptop'} />
           <div > <p className="text-cyan-500 font-bold mb-5">ABOUT</p>
            <p className="text-3xl font-bold tracking-wide mb-5">Some more information about your business.</p>
            <p>Share a little about yourself as a business owner, or maybe describe what makes your service unique.
                 Give visitors one more reason to care about your offer and want to work with you.</p></div>
        </div>
        </div>
    )
}