import React, { useRef } from 'react'
import {AnimatedTitle} from './Animatedtitle.jsx'
import gsap from 'gsap'
import Button from './Button.jsx'

const Story = () => {
    const frameRef = useRef(null)

    const handelMOuseLeave=()=>{
         const element = frameRef.current;
         gsap.to(element,{
                duration:0.3,
                rotateX:0 ,
                 rotateY:0,
                
                ease:"power1.inOut"
            })    
    }

    const handelMOuseMove=(e)=>{
            const {clientX , clientY}=e
            const element = frameRef.current;
            
            if(!element) return;

            const rect = element.getBoundingClientRect()
            const x =clientX - rect.left
            const y = clientY - rect.top;

            const centerX = rect.width/2
            const centerY = rect.height/2


            const rotateX =((y- centerY)/centerY)* -10;
            const rotateY =((x- centerX)/centerX)* 10;
                
            gsap.to(element,{
                duration:0.3,
                rotateX , rotateY,
                transformPerspective: 500,
                ease:"power1.inOut"
            })    
    
        }
  return (
    <section id='story' className='min-h-dvh w-screen bg-black text-blue-50'>
        <div className='flex size-full flex-col items-center py-10 pb-24'>

            <p className='font-general text-sm uppercase md:text-[10px]'>
            The multiversal ip world 
            </p>

            <div className='relative size-full'>
              <AnimatedTitle
                    title="the  st<b>o</b>ry of <br/> a hidden real<b>m</b>  "
                    sectionId="#story"
                    containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
              
              />

              <div className='story-img-container relative md:h-dvh h-[90vh] w-full
   
  '>
                <div className='story-img-mask absolute left-0 top-0 size-full overflow-hidden md:left-[20%] md:top-[-10%] md:size-4/5'>
                    <div className='story-img-content  absolute w-full md:h-dvh h-[50dvh] opacity-100 left-10 top-16 md:left-0 md:top-10 lg:left-[-300px] lg:top-[-100px];
    '>
                        <img 
                        onMouseLeave={handelMOuseLeave}
                        onMouseUp={handelMOuseLeave}
                        onMouseEnter={handelMOuseLeave}
                        onMouseMove={handelMOuseMove}
                        ref={frameRef}
                        src='/img/entrance.webp'
                        alt='entrance'
                        className='object-contain'
                        
                        />
                    </div>
                </div>
              </div>

            </div>


            <div className='-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end'>
             <div className='flex h-full w-fit flex-col items-center md:items-start'>
                <p className='mt-3 max-w-sm text-center font-cirular-web text-violet-50 md:text-start'>
                    where realms coverge, lies zintry and the boundeless piller. 
                    discover it's secrets and shape your fate amite infinite offortunities.
                </p>
                   <Button id='realm-button' title="discover prologue" containerClass="mt-5 bg-white" />
             </div>
            </div>

        </div>
    </section>
  )
}

export default Story