import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"

export default function HomePage(){
    const [show, setShow]= useState('home')

    const projects= [
        {
            name: 'Gametive',
            projectLink: 'https://i.ibb.co/7jp715q/GAMETIVE-LOGO.png'
        },
        {
            name: 'Court Report',
            projectLink: 'https://i.ibb.co/7jp715q/GAMETIVE-LOGO.png'
        }
    ]
   

    return(
        <div className="bg-gradient-to-r from-sky-900 via-purple-900 to-red-900  bg-cover w-screen min-h-screen">
            
            <div className=" bg-slate-800 rounded-xl absolute" style={{width: '350px', marginLeft: '900px', marginTop:'80px'}}>
            <div className="p-2 flex justify-center text-center">
                <NavLink onClick={()=> setShow('home')}  className={()=> show == 'home' ? " bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg p-3" : "bg-gray-700 rounded-lg p-3" } style={{width: '60px'}}>
                   <span>test</span>
                </NavLink>
                <NavLink onClick={()=> setShow('test')} className={()=> show == 'test' ? " bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg p-3 ml-5" : "bg-gray-700 rounded-lg p-3 ml-5" } style={{width: '60px'}}>
                   <span>test</span>
                </NavLink>
                <NavLink onClick={()=> setShow('no')} className={()=> show == 'no' ? " bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg p-3 ml-5" : "bg-gray-700 rounded-lg p-3 ml-5" } style={{width: '60px'}}>
                   <span>test</span>
                </NavLink>
            </div>
         </div>
            {/* PROFILE CARD */}
            <div className="pt-10 pl-10">
            <div className="absolute pl-32 pb-40 pt-2">
                <img style={{width: '100px', height: '100px'}} className='rounded-xl' src="https://mediapublica.co/wp-content/uploads/2015/01/Mr_beans_holiday_ver2.jpg" alt=""/>
                </div>
         <div className="pt-20 pb-5">
            <div>
            <div className="bg-slate-800 text-white text-center rounded-xl pb-5" style={{height: 'auto', width: '350px'}}>
                
                <div>
                <div>
                <h1 className="font-bold pt-10 pb-1" style={{fontSize: '20pt'}}>Steven Leonardo</h1>
                </div>
                <div className="flex justify-center pb-5">
                <h1 className="bg-gray-700 text-gray-400 rounded-lg" style={{width: '150px'}}>Software Engineer</h1>
                </div>
                </div>
                    <div className="bg-gray-600 pb-0 pt-1 rounded-lg w-10 absolute" style={{marginLeft: '100px'}}>
                        <a href="https://github.com/Fullaby" target='_blank'><button><img style={{width: '25px'}} src="https://cdn-icons-png.flaticon.com/512/25/25231.png"/></button></a>
                    </div>
                    <div className="bg-gray-600 pb-0 pt-1 rounded-lg w-10 absolute" style={{marginLeft: '155px'}}>
                        <a href="https://instagram.com/fullaby" target='_blank'><button><img style={{width: '25px'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"/></button></a>
                    </div>
                    <div className="bg-gray-600 pb-0 pt-1 rounded-lg w-10 absolute" style={{marginLeft: '210px'}}>
                        <a href="https://www.linkedin.com/in/steven-leonardo-778557214/" target='_blank'><button><img style={{width: '25px'}} src="https://www.iconpacks.net/icons/1/free-linkedin-icon-130-thumb.png"/></button></a>
                    </div>
                <div className="flex justify-center pb-5 pt-14 flex-col">
                <div className="bg-gray-700 rounded-lg self-center" style={{width: '300px', height:'auto'}}>
                    <div className="pl-10 pr-10 pt-5 pb-5">
                   <div className="text-left pb-2">
                    <h1>Phone:</h1>
                    <h1>(+62) 812-6172-8088</h1>
                   </div>
                   <hr className="border-black"></hr>
                   <div className="text-left pb-2 pt-1">
                    <h1>Email:</h1>
                    <h1>(+62) 812-6172-8088</h1>
                   </div>
                   <hr className="border-black"></hr>
                   <div className="text-left pb-2 pt-1">
                    <h1>Location:</h1>
                    <h1>(+62) 812-6172-8088</h1>
                   </div>
                   <hr className="border-black"></hr>
                   <div className="text-left pb-2 pt-1">
                    <h1>Birthday:</h1>
                    <h1>August 6, 2001</h1>
                   </div>
                    </div>
                    
                </div>
                <div className="pb-1 pt-5">
                   <a><button className=" bg-gradient-to-r from-pink-500 to-rose-600 pt-2 pb-2 pr-12 pl-12 rounded-full">Download CV</button></a>

                    </div>
                </div>
               
            </div>
            </div>
         </div>
         </div>
         {/* End */}

         
        </div>
    )
}