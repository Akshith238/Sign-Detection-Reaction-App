"use client"
import Hero from '@/components/Hero'
import { useEffect,useState } from 'react'
import Image from 'next/image'
import Preloader from '@/components/Preloader';

const style={
    home:``,
    preloader:``,
}

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); 

  }, []);
  return (
    <div className='home'>
        {loading?(
           <div className='preloaderContainer'>
            <Preloader className={style.preloader} />
           </div>
        ):(
          <div>
            <Hero />
          </div>
        )
        }
    </div>
  )
}
