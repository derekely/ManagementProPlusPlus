import React from 'react';
import { useLocation, useNavigate} from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

export default function Header() {
    const auth = getAuth()
    const location = useLocation();
    const navigate = useNavigate();
    function pathMatchRoute(route) {
        if (route === location.pathname) {
          return "text-black border-b-blue-400";
        } else {
          return "text-gray-600 border-b-transparent";
        }
      }
      
  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
        <header className='flex justify-between items-center
        px-4 max-w-6xl mx-auto h-16'>
            <div>
                <img onClick={()=>navigate("/")} className='h-12 cursor-pointer' 
                src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" />
            </div>
            <div>
                <ul className='flex space-x-10'>
                <li
  onClick={() => navigate("/Project")}
  className={`cursor-pointer py-3 text-sm font-semibold  border-b-[3px] ${pathMatchRoute("/Project")}`}
>
  Projects
</li>
<li
  onClick={() => navigate("/tasks")}
  className={`cursor-pointer py-3 text-sm font-semibold  border-b-[3px] ${pathMatchRoute("/tasks")}`}
>
  Tasks
</li>
<li
  onClick={() => navigate("/sign-in")}
  className={`cursor-pointer py-3 text-sm font-semibold  border-b-[3px] ${pathMatchRoute("/sign-in")}`}
>
  Sign In
</li>
<li
  onClick={() => {navigate("/sign-in")
  signOut(auth)
  }}
  className={`cursor-pointer py-3 text-sm font-semibold  border-b-[3px] ${pathMatchRoute("/sign-out")}`}
>
  Sign Out
</li>

                </ul>
            </div>
        </header>
    </div>
  )
}
