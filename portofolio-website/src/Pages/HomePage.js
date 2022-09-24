import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import ProfileCard from "../Components/ProfileCard";

export default function HomePage(){
    const [show, setShow]= useState('home')

    const projects= [
        {
            name: 'Gametive',
            desc: 'E-sport',
            image: 'https://i.ibb.co/7jp715q/GAMETIVE-LOGO.png',
            link: 'https://gametive-id.web.app'
        },
        {
            name: 'Court Report',
            desc: 'Report',
            image: 'https://i.ibb.co/VMD8nTx/png-clipart-justice-law-court-judge-lawyer-emblem-leaf-removebg-preview.png',
            link: 'https://court-application-e7619.web.app'
        },
        {
            name: 'Movie Mobile App',
            desc: 'Movie App',
            image: 'https://icon-library.com/images/play-white-png-icon/play-white-png-icon-27.jpg',
            link: 'https://expo.dev/@stevenleonardo/Mobile-App?serviceType=classic&distribution=expo-go'
        }
    ]
   
console.log(show);
    return(
        <div className="bg-gradient-to-r from-sky-900 via-purple-900 to-red-900  bg-cover w-screen min-h-screen flex justify-between">
        {/* PROFILE CARD */}
           <ProfileCard/>
         {/* End */}
         
         <div className=" bg-slate-800 rounded-xl" style={{width: '200px', marginTop:'100px' , height:'80px', marginRight: '50px'}}>
            <div className="p-2 flex justify-center text-center">
                <NavLink onClick={()=> setShow('home')}  className={()=> show == 'home' ? "bg-gradient-to-r from-blue-600 to-rose-500 rounded-lg p-3" : "bg-gray-700 rounded-lg p-3" } style={{width: '60px'}}>
                   <img src="https://cdn1.iconfinder.com/data/icons/ios-11-glyphs/30/about-512.png" alt=""/>
                </NavLink>
                <NavLink onClick={()=> setShow('project')} className={()=> show == 'project' ? "bg-gradient-to-r from-blue-600 to-rose-500 rounded-lg p-3 ml-5" : "bg-gray-700 rounded-lg p-3 ml-5" } style={{width: '60px'}}>
                <img src="https://cdn-icons-png.flaticon.com/512/5956/5956592.png" alt=""/>
                </NavLink>
            </div>
        

         </div>
         {show == 'home' && <div className="bg-slate-800 absolute rounded-lg" style={{width: '850px', marginTop: '200px', marginLeft: '465px'}}>
            <div className="p-10">
                <h1 className="font-bold text-slate-100" style={{fontSize: '30pt'}}>About Me</h1>
                <hr className="border-slate-900 border-2"></hr>
                <div>
                    <h1 className="text-slate-100" style={{fontSize:'12pt'}}>Durable, always train to improve skills, a very skillful and passionate Web and Mobile App developer, a competent developer with top coding bootcamp certification, an active learner, seeking something to broaden my Developer knowledge and contribute my skills for something useful for environment and company as a Developer</h1>
                </div>
            </div>
            </div> }

         {show == 'project' && <div className="bg-slate-800 absolute rounded-lg p-10" style={{width: '850px' , height: 'auto', marginTop: '200px', marginLeft: '465px'}}>
            <div>
                <h1 className="font-bold text-slate-100" style={{fontSize: '30pt'}}>My Projects</h1>
                <hr className="border-slate-900 border-2"></hr>
            </div>
            <div className="grid grid-cols-3 pl-10">
                {projects.map((el)=>
         <div style={{width:'200px', marginTop: '20px', marginBottom: '20px'}} className=" max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <div className="flex flex-col items-center pb-10">
        <img className="mb-3 w-24 mt-3 shadow-lg" src={el.image} alt="Bonnie image"/>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{el.name}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">{el.desc}</span>
        <div className="flex mt-4 space-x-3 md:mt-6">
            <a href={el.link} target='_blank' className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Visit</a>
        </div>
    </div>
</div>
)}
</div>
         </div> }

        

         
        </div>
    )
}