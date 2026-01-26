import React, { useRef, useState } from 'react'
import { FaLocationArrow } from "react-icons/fa";

const BentoTilt = ({children , className=''})=>{
   const [transformStyle, setTransformStyle] = useState('')
   const itemRef = useRef(null)
   const handelMouseMove =(e)=>{
         if(!itemRef.current) return;


         const {left ,top ,width, height}= itemRef.current.getBoundingClientRect();

         const relativeX =(e.clientX - left)/ width
         const relativeY = (e.clientY - top)/ height

         const tiltX =(relativeY - 0.5) * 5
         const tiltY = (relativeX - 0.5)*-5

     const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98,0.98,0.98)`

       setTransformStyle(newTransform)
   }

   const handelMouseLeave =()=>{
    setTransformStyle('')
   }
  
  return(
    <div className={className} ref={itemRef} onMouseMove={handelMouseMove} onMouseLeave={handelMouseLeave} style={{transform:transformStyle}}>
      {children}
    </div>
  )
}

const BentoCard = ({src , title , description })=>{
  return(
      
    <div>
         <video
         src={src}
         loop 
         muted
         autoPlay
         className='absolute left-0 top-0 size-full object-cover object-center'
         />
            <div className='relative z-10 flex size-full flex-col justify-between p-5 text-blue-50'>
           <h1 className='bento-title special-font relative border-hsla   col-span-2 overflow-hidden rounded-md transition-transform duration-300 ease-out text-4xl font-extrabold
              '>{title}</h1>

              {description && ( <p className='mt-3 max-w-64 text-xs md:text-base'>{description}</p>)}
            </div>

    </div>

  )
}

const Features = () => {
  return (
    <section className='bg-black pb-52' >
       <div className='container mx-auto px-3 md:px-10'>
               <div className='px-5 py-32'>
                      <p className='font-cirular-web text-lg text-blue-50'>Into the metagame layer</p>

             
               <p className='max-w-md font-cirular-web text-lg text-blue-50 opacity-50' >Immerse yourself in a rich and ever-expanding universe
                where a vibrant array of products converge into an interconnected
                overlay experience on your world
               </p>

           </div>
       
       <BentoTilt className='  border border-white/20 relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]' >

       <BentoCard
       src="video/feature-1.mp4"
       title={<>radiant </>}
       description="A cross platform metagame app, turning your activites across web2 and web3 games into a rewarding advanture."
      
     />
       </BentoTilt>

     <div className='grid h-[135vh] grid-cols-2 grid-rows-3 gap-7'>
      <BentoTilt className=' relative  border border-white/20 col-span-2 overflow-hidden rounded-md transition-transform duration-300 ease-out row-span-1 md:col-span-1 md:row-span-2'>

        <BentoCard 
        src='video/feature-2.mp4'
        title={<><b>Z</b>igma</>}
        description="An anime and gaming-inspired NFT collection the IP primed for expansion"
        />
      </BentoTilt>
     <BentoTilt className='relative  border border-white/20 col-span-2 overflow-hidden rounded-md transition-transform duration-300 ease-out row-span-1 ms-32 md:col-span-1 md:ms-0'>
        <BentoCard
        src='video/feature-3.mp4'
        title={<><b>N</b>exux </>}
        description="A gamified scocial hub, adding a new dimention of play to scocial interaction for web3 communication"
        />
     </BentoTilt>
     <BentoTilt className='relative  border border-white/20 col-span-2 overflow-hidden rounded-md transition-transform duration-300 ease-out me-14 md:col-span-1 md:me-0'>
        <BentoCard
        src='video/feature-4.mp4'
        title={<>AZ<b>U</b>L </>}
        description="A cross-world AI agent - elevating your gameplay to be more fun and productive"
        />
     </BentoTilt>
     <div className='relative col-span-1 row-span-1 overflow-hidden rounded-md transition-transform duration-300 ease-out'>
       <div className='flex flex-col size-full justify-between bg-violet-300 p-5'>
           <h1 className='uppercase md:text-6xl text-4xl font-black font-zentry special-font max-w-64 text-black'> m<b>O</b>re  co<b>m</b>ming s<b>o</b>on! </h1>
           <FaLocationArrow className='m-5 scale-[5] self-end' />
       </div>
     </div>
        <BentoTilt className=' relative col-span-1 row-span-1 overflow-hidden rounded-md transition-transform duration-300 ease-out'>
         <video
         src='video/feature-5.mp4'
         loop
         muted
         autoPlay
         className='size-full object-cover object-center'
         
         />
        </BentoTilt>

     </div>


      </div>
    </section>
  )
}

export default Features