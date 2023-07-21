import Feature from "./Feature"


export default function FeatureParent(){
    const featureData = [
        {
            imgPath:'/group.jpg',
            heading:'Personalized Service Packages',
            description:'Experience the ultimate value with our personalized service packages, offering tailored solutions to meet your individual needs.'

        },
        {
            imgPath:'/tablet.jpg',
            heading:'Seamless Online Booking',
            description:'Enjoy hassle-free scheduling with our user-friendly online booking platform. With just a few clicks.'

        },
        {
            imgPath:'/pot.jpg',
            heading:'Timely Appointment Reminders',
            description:'Never miss an important appointment again! Benefit from our timely appointment reminders that keep you informed and prepared.'

        }
    ]
    return(

        <div className="w-full flex flex-col justify-center items-center md:flex-row md:flex-wrap md:justify-around">
            <Feature imgPath={featureData[0].imgPath}
                     heading={featureData[0].heading}
                     description={featureData[0].description}/>
            <Feature imgPath={featureData[1].imgPath}
                     heading={featureData[1].heading}
                     description={featureData[1].description}/>
            <Feature imgPath={featureData[2].imgPath}
                     heading={featureData[2].heading}
                     description={featureData[2].description}/>
        </div>
    )
}