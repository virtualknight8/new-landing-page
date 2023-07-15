import Feature from "./Feature"


export default function FeatureParent(){
    const featureData = [
        {
            imgPath:'/group.jpg',
            heading:'FEATURE 1',
            description:'Talk about some of the details of your offer with a focus on the value people get back.'

        },
        {
            imgPath:'/tablet.jpg',
            heading:'FEATURE 2',
            description:'Is there a pain point that your service resolves? Tell visitors about it here.'

        },
        {
            imgPath:'/pot.jpg',
            heading:'FEATURE 3',
            description:'Alternatively, you could use this section to address some frequently asked questions.'

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