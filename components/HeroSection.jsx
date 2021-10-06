import { Link } from "react-scroll"
export default function HeroSection(){
    return<section className="w-full">
        <img className=" mx-auto object-cover -z-10 hidden lg:block absolute right-0 left-0  "src="/images/background.svg" />
        <div className="relative flex mb-12 md:mb-0 flex-col md:flex-row mt-26 bg-gradient-to-l from-primary to-secondary max-w-6xl px-8 mx-auto w-full lg:from-transparent lg:to-transparent">
            <div className="flex-1 block pt-48  pb-14 xl:pb-24">
            <h1 className="text-white">forget Excel, <br /> manage with Deekshya</h1>
            <p className='max-w-lg mb-2 text-md mt-4 font-medium md:mb-4 leading-7 text-gray-200'>
            We bring you the all rounded software solution to manage all your school needs
                </p>

                <div className="flex flex-row space-x-4 mt-8">
                    <button className="bg-white py-3 px-3 font-semibold rounded-md active:shadow-lg duration-150 active:transform active:scale-95 focus:outline-black "><span  className=" bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hover:from-secondary hover:to-primary"><Link to="footer" active="true"  spy={true} smooth={true}>Get Consultation</Link></span></button>
                    <button className="border-white text-white border-2 py-3 px-3 font-semibold rounded-md active:shadow-lg duration-150 active:transform active:scale-95 focus:outline-black hover:bg-white hover:text-primary "><Link to="footer" active="true"  spy={true} smooth={true}>Contact us</Link></button>
                </div>
            </div>
            <div className="flex-1 pt-24 sm:pt-48 self-end justify-self-center lg:pt-0">
                <img className="mx-auto left-0 right-0 absolute -bottom-44 md:relative md:bottom-0"src="/images/admin.png" />
            </div>

        </div>
 
    </section>
}