"use client"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Image from 'next/image';
import EyeGlass from "@/public/eye-glasses-3144977.png";
import DetMoji from "@/public/DetMoji_logo-transparent.png"

const style={
   footer:`flex flex-col p-3 bg-gradient-to-t from-black via-black to-neutral-800 text-white justify-between items-center gap-2`,
   logo:`flex gap-2 items-center justify-center`,
   logotext:`text-lg`,
   footertext:`text-xs`,
   subfooter:`flex flex-col gap-2 items-center`,
   iconholder:`flex flex-row gap-2`,
   icon:``,
}

const Footer = () => {
  return (
    <div className={style.footer}>
       <div className={style.logo}>
            <Image 
                src={DetMoji}
                width={30}
                height={30}
            />
            <p className={style.logotext}>
                DetMoji
            </p>
        </div>
        <div className={style.subfooter}>
            <div className={style.iconholder}>
              <FacebookRoundedIcon className={style.icon} />
              <InstagramIcon className={style.icon} />
              <WhatsAppIcon className={style.icon}/>
              <LinkedInIcon className={style.icon}/>
          </div>
          <p className={style.footertext}>© 2023, All rights reserved</p>
        </div>
       
    </div>
  )
}

export default Footer