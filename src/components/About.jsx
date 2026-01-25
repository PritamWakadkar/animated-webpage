import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'

import { ScrollTrigger} from 'gsap/all'
import Animatedtitle from './Animatedtitle'

gsap.registerPlugin(ScrollTrigger)


const About = () => {

    useGSAP(()=>{
        const clipAnimation = gsap.timeline({
            scrollTrigger:{
                trigger:'#clip',
                start:'center center',
                end:'+=800 center',
                scrub:0.5,
                pin:true,
                pinSpacing:true,
            }
        })
    
        clipAnimation.to('.mask-clip-path',{
            width:'100vw',
            height:'100vh',
            borderRadius:0      
        })
       
    
    
    })

    return (
    <div id='about' className='min-h-screen w-screen '>
        <div className='relative mb-8 mt-36 flex flex-col items-center gap-5 '>
            <h2 className='font-general text-sm uppercase md:text-[10px]'>welcome to zentry</h2>
               
               <Animatedtitle />

               <div className='absolute bottom-[-80dvh] left-1/2 w-full max-w-96 -translate-x-1/2 text-center font-circular-web text-lg md:max-w-[34rem]; '>
               <p> the Game of Games begins-your life , now an epic MMORPG </p>
               <p>Zentry unites every player from countless games and  platforms</p>
               </div>
        </div>
        <div className='h-dvh w-screen' id='clip'>
            <div className='mask-clip-path  absolute left-1/2 top-0 z-20 h-[60vh] w-96 origin-center -translate-x-1/2 overflow-hidden rounded-3xl md:w-[30vw];'>
            
            <img 
             src='img/about.webp'
             alt='background'
             className='top-0 left-0 absolute size-full object-cover'
            
            />
            </div>

        </div>
    </div>
  )
}

export default About