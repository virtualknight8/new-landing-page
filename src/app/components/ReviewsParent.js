import Image from "next/image"
import Review from "./Review"

export default function Reviews(){

    const reviewData = [
        {
            starPath: 'https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/dfb61e74-multor-testimonial1-stars.svg',
            reviewContent:"I've saved so much time using their appointment services. Booking online is a breeze!",
            picturePath: '/bguy.jpg',
            usr:'Richard',
            location:'New Jersey'
        },
        {
            starPath: 'https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/6d441dac-multor-testimonial2-stars.svg',
            reviewContent:'From sign-up to participation, it was a smooth journey. Their user-friendly platform made it effortless!',
            picturePath:'/bgirl2.jpg',
            usr:'Nicole',
            location:'Denver'
        }
    ]

    return(
        <div className="mt-16 px-3 flex flex-col justify-center items-center w-full lg:px-40">
            <div><p className="mb-10 text-cyan-500 font-bold tracking-widest">DON&apos;T JUST TAKE OUR WORD FOR IT</p></div>
            <div className="flex flex-col lg:flex-row lg:flex-wrap lg:justify-between lg:w-full">
        <Review starPath={reviewData[0].starPath}
                reviewContent={reviewData[0].reviewContent}
                picturePath = {reviewData[0].picturePath} 
                userName = {reviewData[0].usr}
                location = {reviewData[1].location}/>
        <Review starPath={reviewData[1].starPath}
                reviewContent={reviewData[1].reviewContent}
                picturePath = {reviewData[1].picturePath}
                userName = {reviewData[1].usr}
                location = {reviewData[1].location} />

            </div>
            </div>
    )
}
