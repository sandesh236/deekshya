
import UnstyledLink from './UnstyledLink';
import { useEffect,useState } from 'react';
import { Link } from 'react-scroll';
export default function Nav() {



    const [backgroundColor,setBackgroundColor]= useState("transparent");
    const [logoColor,SetLogoColor]=useState("white")

    useEffect(() => {
        
            document.addEventListener("scroll", () => {
              const bgcolor = window.scrollY < 100 ? "transparent" : "white";
                const logocolor=window.scrollY<100?"white":"primary";
              setBackgroundColor(bgcolor)
              SetLogoColor(logocolor);
            });
          
    
    });



    return (
        <nav className={`fixed top-0 z-50 w-full bg-${backgroundColor}`}>
            <div className='flex items-center justify-between h-16 py-2 text-black layout'>
                <UnstyledLink href='/'>
                    <figure className='w-28 flex items-center md:w-40'>
                        <img className="w-6 h-6 md:w-8 md:h-8 mr-3" src="/favicon/ms-icon-150x150.png" />
                       <h3 className={`text-${logoColor}`}>Deekshya <hr className={`w-12 h-1 rounded-full bg-${logoColor}`}/></h3>
                    </figure>
                </UnstyledLink>
                <ul className='flex items-center justify-between space-x-4 md:space-x-8'>
                    <li>
                        <UnstyledLink
                            href='/'
                            className={`text-${logoColor} text-sm font-bold tracking-wide transition font-primary hover:text-gray-200 md:text-base active:scale-95`  }                     >
                            Home
                        </UnstyledLink>
                    </li>
                    <li>
                        <UnstyledLink
                            className='inline-flex items-center justify-center px-6 py-2 text-sm font-bold tracking-wide text-white transition rounded-lg font-primary md:text-base bg-gradient-to-r from-spurple-500 to-spurple-600 hover:to-spurple-500 focus:outline-none'
                            href='https://tricodetechnology.com.np/'
                        >
                            <Link to="footer" active="true"  spy={true} smooth={true}>Contact us</Link>
                        </UnstyledLink>
                    </li>
                </ul>
            </div>
            <style jsx>{`
                nav {
                    box-shadow: 0px 4px 16px rgba(127, 47, 243, 0.15);
                }
            `}</style>
        </nav>
    );
}
