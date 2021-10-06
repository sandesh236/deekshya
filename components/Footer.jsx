
import { HiPhone,HiLocationMarker,HiOutlineGlobeAlt } from 'react-icons/hi';

export default function Footer() {
    return (
        <footer id="footer" className=' items-center justify-betwee pt-4 bg-gradient-to-r from-primary to-secondary'>
            <section className="  mx-auto max-w-7xl px-8" >
            <div className="md:space-x-28 flex flex-col mt-6 md:flex-row md:items-center md:justify-center">
            <div className="flex flex-col">
            <h3 className="text-gray-100">Deekshya <br /> <div className="w-24 h-1 mt-1 rounded-full bg-white"></div></h3>
            <p className="text-md md:teaxt-lg mt-4 text-gray-200" >School Information management and automation software from <a href="https://www.tricodetechnology.com.np/" className="hover:border-b-2 font-semibold transition-all duration-150" target="_blank">TriCode Tecnology</a></p>
            </div>
            <div className="mt-8 md:mt-0 flex flex-col">
            <h3 className="text-gray-100 mb-4">Contact us at <br /> <div className="w-24 h-1 mt-1 rounded-full bg-white"></div></h3>
                <div className="flex items-center space-x-3">
                    <HiPhone className="bg-gray-100 text-gray-800 rounded-md  w-8 h-8 p-2" />
                    <p className="py-4 font-semibold text-center text-xs md:text-sm text-gray-200">
                    +9779845454545
                    </p>
                </div>
                <div className="flex items-center space-x-3">
                    <HiLocationMarker className="bg-gray-100 text-gray-800 rounded-md  w-8 h-8 p-2" />
                    
                    <p className="py-2 font-semibold text-xs md:text-sm text-gray-200">
                    sanepa,lalitpur
                    <br/>
                    Kathmandu,Nepal
                    </p>
                    
                </div>
                <div className="flex l items-center space-x-3">
                    <HiOutlineGlobeAlt className="bg-gray-100 text-gray-800 rounded-md  w-8 h-8 p-2" />
                    <p className="py-2 font-semibold text-xs md:text-sm text-gray-200">
                    <a href="tricodetechnology.com.np" >tricodetechnology.com.np</a>
                    <br/>
                    official@tricodetechnology.com.np
                    </p>
                </div>

            </div>
            </div>
            <p className='py-4 text-center text-xs md:text-sm text-gray-200'>
                © {new Date().getFullYear()} TriCode Technology
            </p>
            </section>
        </footer>
    );
}
