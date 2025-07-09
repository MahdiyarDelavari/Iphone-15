import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { heroVideo , smallHeroVideo } from "../utils"
import { useEffect, useState } from "react"

const Hero = () => {
    const [videoSrc, setVideoSrc] = useState(window.innerWidth < 680 ? smallHeroVideo : heroVideo)
    
    const handleVideoSrcSet = () => {
        setVideoSrc(window.innerWidth < 680 ? smallHeroVideo : heroVideo)
    }

    useEffect(() => {
        window.addEventListener('resize', handleVideoSrcSet)
        
        return () => {
            window.removeEventListener('resize', handleVideoSrcSet)
        }
    },[])

    useGSAP(() => {
        gsap.to("#hero-title", { opacity: 1, delay: videoSrc == heroVideo ? 2.5 : 3.5 })
        gsap.to("#cta", {opacity: 1 , y: -30 , delay: videoSrc == heroVideo ? 2.5 : 3.5 })
    }, [])
    

  return (
      <section className="top-14 w-full nav-height bg-black relative">
          <div className="h-5/6 w-full flex-center flex-col">
              <p id="hero-title" className='hero-title'>iPhone 15 Pro</p>
              
              <div className="md:w-10/12 w-9/12">
                  <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc} >
                      <source src={videoSrc} type="video/mp4"/>
                </video>
              </div>

              <div id="cta" className="flex flex-col items-center opacity-0 -translate-y-20">
                  <a href="#highlights" className="btn">Buy Now</a>
                  <p className="font-normal text-xl">From $199/Month Or $999</p>
                  
              </div>
          </div>
    </section>
  )
}

export default Hero