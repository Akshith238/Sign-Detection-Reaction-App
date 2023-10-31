"use client"
import { useEffect, useState } from 'react'
import Image from 'next/image'
import {signIn,signOut,useSession,getProviders} from 'next-auth/react';
import DetMoji from "@/public/DetMoji_logo-transparent.png"
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const style={
    nav:`flex flex-row justify-between p-5 bg-gradient-to-r from-blue-900 via-sky-800 to-gray-900 drop-shadow-lg`,
    logo:`flex flex-row gap-2`,
    logotext:`mt-1 text-2xl bg-gradient-to-t from-sky-900 via-sky-200 to-white text-transparent bg-clip-text drop-shadow-lg`,
    login:`flex gap-4`,
    button:`rounded-xl text-white text-sm bg-gradient-to-r from-gray-900 via-black to-gray-900 drop-shadow-md hover:drop-shadow-xl hover:-translate-y-0.5 p-2 px-3 transition duration-200`,
    logoimage:`rounded-full drop-shadow-2xl`,
    image:`rounded-full drop-shadow-xl`
}

const Nav = () => {
  const {data:session}=useSession();
  const router=useRouter();
  const [providers, setProviders] = useState(null);

  useEffect(() => {
      const fetchProviders=async()=>{
         const response=await getProviders();
         setProviders(response);
      }
      fetchProviders();
  }, [])
  

  return (
    <nav className={style.nav}>
        <div className={style.logo}>
            <Link href="/">
                <Image 
                    className={style.logoimage}
                    src={DetMoji}
                    width={45}
                    height={15}
                />
            </Link>
            <Link href="/">
                <p className={style.logotext} >
                    DetMoji
                </p>
            </Link>
        </div>
        {session?.user?(
           <div className={style.login}>
                <button className={style.button} onClick={()=>router.push("/detect")}>
                   Get Started
                </button>
               <button className={style.button} onClick={signOut}>
                   Sign Out
               </button>
               <Image
                    src={session?.user.image}
                    alt="profile_img"
                    className={style.image}
                    width={45}
                    height={30}
                 />
           </div> 
            
        ):(
           <>{providers && Object.values(providers).map((provider)=>(
               <button className={style.button}
                key={provider.name}
                onClick={()=>signIn(provider.id)}
               >
                    Sign In
               </button>
           ))}
               
           </>
        )
        }  
    </nav>
  )
}

export default Nav