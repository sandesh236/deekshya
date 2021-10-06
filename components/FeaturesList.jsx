import { featuresData } from "@/data/features";


export default function FeaturesList(){
 
 return <>
 <h2 className='block  text-3xl w-max mx-auto text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary'>Do you still manage by hand <br/><span className=" flex justify-center mt-2"> and Excel?</span></h2>
 <div>
     {featuresData.map((feature)=>(<FeatureCard key={feature.id} feature={feature} />))}
 </div>
 </>   
}



function FeatureCard({feature}){
    
    return <div className={`my-12  bg-white rounded-md py-4  px-8 md:shadow-none md:rounded-xl md:space-x-16 flex flex-${ feature.id%2==0?'col':'col-reverse' } items-center  gap-4 shadow-sm mx-auto md:mx-0 md:my-28 md:max-w-none md:px-8   md:flex-row event__card_group `}>
        { feature.id%2==0?<FeatureImage id={feature.id} source={feature.payload.image} alt={feature.alt}/>:""}
        <div className={`  mt-4 space-y-2 `} >
            <img className="w-8 h-8"src={`/images/features/${feature.id%2==0?'triangle-circle.svg':'polygon-circle.svg'}`} />
            <h3 className="pt-3">{feature.title}</h3>
            <ul className="pt-2">
            
            {
                feature.payload.data.map((data=>(<FeatureDetailsList key={data.title} data={data}/>)))
            }
            </ul>
 
            

        </div>
        { feature.id%2!=0?<FeatureImage id={feature.id} source={feature.payload.image} />:""}
    </div>
}



function FeatureImage({ source,id,alt }) {
    return (
        <div
            className={`mt-6 mr-6 w-80 md:pr-8 md:w-72 xl:w-120 lg:w-96 bg-gradient-to-r ${id%2==0?'col-start-2':'col-start-1'} rounded-2xl`}>
            <figure className='overflow-hidden   w-80 md:w-72 lg:w-96 xl:w-120 rounded-2xl'>
                <img
                    className="object-cover"
                    src={source}
                    alt={alt}
                    width={493}
                    height={280}
                  
                />
            </figure>
            <style jsx>{`
                @media (min-width: 320px) and (max-width: 370px) {
                    div,
                    figure {
                        width: 16rem;
                    }
                }

                @media (min-width: 370px) and (max-width: 400px) {
                    div,
                    figure {
                        width: 18.5rem;
                    }
                }
            `}</style>
        </div>
    );
}


function FeatureDetailsList ({data}){

    return (<li>


<div className="flex my-1 md:my-4">
         <div className="w-3 mr-4 h-3 col-auto rounded-full bg-primary ring-4 ring-secondary ring-opacity-40 my-2"> </div>
         <div className="col-span-full w-full"> 
          <p className=" font-semibold text-gray-900 text-lg">{data.title}</p>
          <p className='max-w-lg mb-2 md:mb-4 leading-7 text-gray-800'>
                    {data.subtitle}
                </p>
         </div>
        </div>
     
    </li>)

}