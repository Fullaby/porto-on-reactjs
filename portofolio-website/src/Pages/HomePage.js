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
   
console.log(show);
    return(
        <div className="bg-gradient-to-r from-sky-900 via-purple-900 to-red-900  bg-cover w-screen min-h-screen flex justify-between">
            

        

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
                        <a title="Github" href="https://github.com/Fullaby" target='_blank'><button title="Github"><img style={{width: '25px'}} src="https://cdn-icons-png.flaticon.com/512/25/25231.png"/></button></a>
                    </div>
                    <div className="bg-gray-600 pb-0 pt-1 rounded-lg w-10 absolute" style={{marginLeft: '155px'}}>
                        <a title="Instagram" href="https://instagram.com/fullaby" target='_blank'><button title="Instagram"><img style={{width: '25px'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"/></button></a>
                    </div>
                    <div className="bg-gray-600 pb-0 pt-1 rounded-lg w-10 absolute" style={{marginLeft: '210px'}}>
                        <a title="Linked In" href="https://www.linkedin.com/in/steven-leonardo-778557214/" target='_blank'><button title="Linked In"><img style={{width: '25px'}} src="https://www.iconpacks.net/icons/1/free-linkedin-icon-130-thumb.png"/></button></a>
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
                   <a href="https://doc-0o-60-docs.googleusercontent.com/docs/securesc/sbs2ojriodisspvdk2g15ig647u27lfa/18it1kqf2900g2nnibr5050tuj3pm8dn/1663948575000/13092695948141708543/13092695948141708543/1KgRpZO5tWrh9RSWh4NuXGJaVRHkuunBN?e=download&ax=ALW9-sCrMaf5r9jQey9j-lKXyfqCIkjmsrJURSz2W2UdMZMW9U_EeCdzEheG8Kdcoc6vm3QDZFIbkmLGpZmipOaH4hi9r5ZcsqMftxbyfFqNHFHWX5U6e1aK9oHgM5PWE2iZ_qu98iK1BL4gFa8DPI5zEytVeXbWCRnsn7CA3Nt-3_dZAw8gAm7IxxjJ_uHC8pwNhhdseLpXMs88Zhbzegxipml8ct3STD6e6CPOuAxAj7DMgu69EIZgvI5bQFjVcw4RUT_RRRgF2_oUqfdIxARcHrYoOEleZxTC9F4dh4cVDfUkZjYR4Vp-OOtWmcY0S2x63Hkks45D1lER2mTuzCx6MHZ5KTiWOeor9D7mR4KG_EJ164zNBrgivTC9_TYhBxFPUy-arfRcuIcqU07jH_QenQFzLC--SkUkQzDvH5Po26O3Uk1cnEMstt0-jKTyGz1SY245DVrUcbYZIACA8oxGt3hRMcmBDvNtPGki2mju3PqFe4Q5g4F9cD36b3tUkx2rqjFyI49ahkKNKL05gYL1uJRfK3AnSsjbM7rOzSUHsCnQJKyjhPXbf5yB_c5Bv77h-AJYfozcy1mJeEWpa_6FlmRZDOGR9EauXqDQd_vcn1HLWL6pVXBJCsOCYbzIHeTMo8oEX6omzJJ4sBO56OoUVa-WP-9EaR84Lt_BY8wcoAsEfZbKKDe7x7wvoOAELJk3eyI3cIYh0DKVRKk4KpdruALQlEIeOxBaq-nJpJUVlHMxihvIIT3csPkGJ7Q9tEoju8bSxBstRtY190cTe6ZIQlt6pslh2TYVAFnWgLeyhmgeAOR0PQWQBsUuvvAZxP4XKh5R57Xh_8Zq4ty0h-WVrFJECvFfzxKNjOND03yErAnUOsAcsk6PfyONPN4bt2DT1aF_-rhzAb36aYNpuo-_RC77RzkV7ko6MxVjauPyjsEBVs2S4t0_WAFvAEPcm1nuft9UzrQ_nbbgKraCLlD7d-UR24oSYXZp8zJfbaz59ScUN1l6RNFk8fB5fnQPb0PhoVom_hkBQQ&uuid=1aa65c54-c719-413e-947e-e8fcea959db9&authuser=1&nonce=0mfh11ub7sa7c&user=13092695948141708543&hash=fh9b6ta4dh03v6l9hekgd67s747pq507"><button title="Download My CV" className=" bg-gradient-to-r from-pink-500 to-rose-600 pt-2 pb-2 pr-12 pl-12 rounded-full">Download CV</button></a>
                    </div>
                </div>
               
            </div>
            </div>
         </div>
         </div>
         {/* End */}

         
         <div className=" bg-slate-800 rounded-xl" style={{width: '350px', marginTop:'80px' , height:'80px', marginRight: '50px'}}>
            <div className="p-2 flex justify-center text-center">
                <NavLink onClick={()=> setShow('home')}  className={()=> show == 'home' ? " bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg p-3" : "bg-gray-700 rounded-lg p-3" } style={{width: '60px'}}>
                   <img src="https://cdn1.iconfinder.com/data/icons/ios-11-glyphs/30/about-512.png" alt=""/>
                </NavLink>
                <NavLink onClick={()=> setShow('project')} className={()=> show == 'project' ? " bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg p-3 ml-5" : "bg-gray-700 rounded-lg p-3 ml-5" } style={{width: '60px'}}>
                <img src="https://cdn-icons-png.flaticon.com/512/5956/5956592.png" alt=""/>
                </NavLink>
                <NavLink onClick={()=> setShow('no')} className={()=> show == 'no' ? " bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg p-3 ml-5" : "bg-gray-700 rounded-lg p-3 ml-5" } style={{width: '60px'}}>
                   <span>test</span>
                </NavLink>
            </div>
        

         </div>
         {show == 'home' && <div className="bg-slate-800 absolute rounded-lg" style={{width: '850px', marginTop: '180px', marginLeft: '465px'}}>
            <div className="p-10">
                <h1 className="font-bold" style={{fontSize: '30pt'}}>About Me</h1>
                <hr className="border-black border-2"></hr>
            </div>
            </div> }

         {show == 'project' && <div className="bg-slate-800 absolute rounded-lg" style={{width: '850px' , height: '100px', marginTop: '180px', marginLeft: '465px'}}>
            
         </div> }

        

         
        </div>
    )
}