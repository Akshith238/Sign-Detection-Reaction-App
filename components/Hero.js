"use client"
import { useRouter } from "next/navigation";
import Image from "next/image"
import EyeGlass from "@/public/eye-glasses-3144977.png";
import Emoji from "@/public/Sad Face Sticker by Emoji for iOS & Android _ GIPHY.gif"


const style={
    hero:`flex flex-col justify-center items-center p-5 gap-2`,
    herotitle:`animate-gradient text-7xl bg-gradient-to-r from-blue-900 via-sky-800 to-gray-900 transition duration-300 text-transparent bg-clip-text drop-shadow-lg`,
    herocaption:`text-3xl bg-gradient-to-r from-blue-900 via-sky-800 to-gray-900 text-transparent bg-clip-text`,
    heroimage:`items-centern hover:-translate-y-2 transition duration-300 drop-shadow-lg hover:drop-shadow:xl`,
    button:`rounded-xl text-white text-sm bg-gradient-to-r from-gray-900 via-black to-gray-900 drop-shadow-md hover:drop-shadow-xl hover:-translate-y-1 p-2 px-3 transition duration-300`,
}

const Hero = () => {
  const router=useRouter();
  
  return (
    <div className={style.hero}>
        <p className={style.herotitle}>DetMoji</p>
        <Image src={Emoji} 
         className={style.heroimage}
         width={400}
         height={300}
        />
        <p className={style.herocaption}>Step Into The World Of DetMoji</p>
        <button className={style.button} onClick={()=>router.push("/detect")}>
                    Get Started
        </button>
        
    </div>
  )
}

export default Hero