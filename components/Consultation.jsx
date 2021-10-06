import { useState } from 'react'


export default function Consultation(){

    const [email,setEmail]=useState("")
    const handleSubmit=(event)=>{
     event.preventDefault();
     console.log(email)
    }
    return (

        <section id="consultation">
        <div className='rounded-3xl bg-gray-100'>
            <div
                className='py-12 drop-shadow-lg rounded-xl '
            >
                <h3 className='block  w-max mx-auto text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary'>lets get in touch</h3>
                
                <form className=" flex flex-col sm:flex-row overflow-hidden  mx-8 sm:w-max mt-8 sm:mx-auto border-2 md:overflow-hidden border-primary rounded-md ">
                    <input className="border-0 w-auto flex-initial rounded-l-md" type="email" name="email"  vlaue={email} onChange={(event)=>setEmail(event.target.value)} placeholder="enter your email..."/>
                    <button className=" block  py-2 sm:px-3 md:py-0  text-center text-white bg-primary hover:bg-gradient-to-r from-primary to-secondary active:from-secondary active:to-primary active:scale-70 " type="submit" onClick={handleSubmit}>Submit</button>
                </form>
            </div> 
        </div>
        </section>
    )
}