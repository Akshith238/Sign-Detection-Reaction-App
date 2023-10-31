"use client"
import { useSession } from "next-auth/react"
import Hero from "@/components/Hero"
import Image from "next/image"
import ObjectDetection from "@/components/ObjectDetection"
const style={
   image:`items-centern hover:-translate-y-2 transition duration-300 drop-shadow-lg hover:drop-shadow:xl`,
   pcontainer:`flex flex-col justify-center items-center p-24`,
   p:`text-5xl bg-gradient-to-r from-gray-700 via-gray-900 to-black transition duration-300 text-transparent bg-clip-text drop-shadow-lg`,
}

const Detect = () => {
  const {data:session}=useSession();
  return (
    <div>
      {session?.user?(<>
        <Hero />
        <ObjectDetection />
      </>):(<div className={style.pcontainer}> 
          <div className={style.card}>
             <Image
                className={style.image}
                src="/Sad.gif"
                width={400}
                height={500}
             />
          </div>
          <p className={style.p}>Log in to detect emoji</p>
      </div>)}
      
    </div>
  )
}

export default Detect