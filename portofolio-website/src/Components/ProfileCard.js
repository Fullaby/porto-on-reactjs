export default function ProfileCard(){
    return(
         <div className="pt-5 pl-10">
            <div className="absolute pl-20 pb-40 pt-2">
                <img style={{width: '200px', height: '200px'}} className='rounded-xl' src="https://i.ibb.co/stwvJwP/gradProf.jpg" alt=""/>
                </div>
         <div className="pt-40 pb-10">
            <div>
            <div className="bg-slate-800 text-white text-center rounded-xl pb-5 pt-5" style={{height: 'auto', width: '350px'}}>
                
                <div>
                <div>
                <h1 className="font-bold pt-10 pb-1 text-slate-100" style={{fontSize: '20pt'}}>Steven Leonardo</h1>
                </div>
                <div className="flex justify-center pb-5">
                <h1 className="bg-gray-700 text-gray-300 rounded-lg" style={{width: '150px'}}>Software Engineer</h1>
                </div>
                </div>
                    <div className="bg-gray-600 pb-0 pt-1 rounded-lg w-10 absolute hover:scale-125 transition-all duration-300" style={{marginLeft: '100px'}}>
                        <a title="Github" href="https://github.com/Fullaby" target='_blank'><button title="Github"><img style={{width: '25px'}} src="https://cdn-icons-png.flaticon.com/512/25/25231.png"/></button></a>
                    </div>
                    <div className="bg-gray-600 pb-0 pt-1 rounded-lg w-10 absolute hover:scale-125 transition-all duration-300" style={{marginLeft: '155px'}}>
                        <a title="Instagram" href="https://instagram.com/fullaby" className="" target='_blank'><button title="Instagram"><img style={{width: '25px'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"/></button></a>
                    </div>
                    <div className="bg-gray-600 pb-0 pt-1 rounded-lg w-10 absolute hover:scale-125 transition-all duration-300" style={{marginLeft: '210px'}}>
                        <a title="Linked In" href="https://www.linkedin.com/in/steven-leonardo-778557214/" target='_blank'><button title="Linked In"><img style={{width: '25px'}} src="https://www.iconpacks.net/icons/1/free-linkedin-icon-130-thumb.png"/></button></a>
                    </div>
                <div className="flex justify-center pb-5 pt-14 flex-col">
                <div className="bg-gray-700 rounded-lg self-center" style={{width: '300px', height:'auto'}}>
                    <div className="pl-10 pr-10 pt-5 pb-5 text-slate-100">
                   <div className="text-left pb-2">
                   <img className="absolute pt-0.5" style={{width: '15px'}} src="https://www.freeiconspng.com/thumbs/phone-icon/office-phone-icon--25.png" alt=""/>
                    <h1 className="pl-6">Phone:</h1>
                    <h1>(+62) 812-6172-8088</h1>
                   </div>
                   <hr className="border-black"></hr>
                
                   <div className="text-left pb-2 pt-1 relative">
                   <img className="absolute pt-0.5" style={{width: '20px'}} src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png" alt=""/>
                    <h1 className="pl-6">Email:</h1>
                    <h1>Stevenleonardo57@gmail.com</h1>
                   </div>
                   <hr className="border-black"></hr>
                   <div className="text-left pb-2 pt-1">
                   <img className="absolute pt-0.5" style={{width: '20px'}} src="https://i.pinimg.com/originals/29/93/fd/2993fd151e2e1cab871aec155e22cbcc.png" alt=""/>
                    <h1 className="pl-6">Location:</h1>
                    <h1>Batam, Kepulauan Riau</h1>
                   </div>
                   <hr className="border-black"></hr>
                   <div className="text-left pb-2 pt-1">
                   <img className="absolute pt-0.5" style={{width: '20px'}} src="https://icon-library.com/images/celebration-icon-png/celebration-icon-png-6.jpg" alt=""/>
                    <h1 className="pl-6">Birthday:</h1>
                    <h1>August 6, 2001</h1>
                   </div>
                    </div>
                    
                </div>
                <div className="pb-1 pt-10">
                   <a href="https://drive.google.com/file/d/1KgRpZO5tWrh9RSWh4NuXGJaVRHkuunBN/view?usp=sharing" target='_blank'><button title="Download My CV" className=" bg-gradient-to-r from-pink-500 to-rose-600 pt-2 pb-2 pr-24 pl-24 rounded-full text-slate-100 hover:bg-gradient-to-r hover:from-pink-400 hover:to-red-500 hover:scale-110 transition-all duration-300">My CV</button></a>
                    </div>
                </div>
               
            </div>
            </div>
         </div>
         </div>
    )
}