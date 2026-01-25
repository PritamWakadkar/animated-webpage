import React, { useEffect, useRef, useState } from 'react'
import Button from './Button'
import { FaLocationArrow } from "react-icons/fa";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(true)
    const [loadedVideos, setLoadedVideos] = useState(0);

    const totalVideos = 4;
    const nextVdRef = useRef(null);

    const handleVideoLoad = () => {
        setLoadedVideos((prev) => prev + 1);
    };

    const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

    const handleMiniVdClicked = () => {
        setHasClicked(true);
        setCurrentIndex(upcomingVideoIndex);
    };

    const getVideoSrc = (index) => `video/hero-${index}.mp4`;

    // for loaded video animation handel

    useEffect(()=>{
      if(loadedVideos === totalVideos -1){
        setIsLoading(false)
      }
    })

    // 1. CLICK ANIMATION (Expansion from Center)
    useGSAP(() => {
        if (hasClicked) {
            // Force the video to start at scale 0 in the dead center
            gsap.set('#next-video', { 
                visibility: 'visible',
                xPercent: -50,
                yPercent: -50,
            });

            gsap.to('#next-video', {
                transformOrigin: 'center center',
                scale: 1, 
                width: '100%',
                height: '100%',
                duration: 1,
                ease: 'power1.inOut',
                onStart: () => nextVdRef.current.play(),
            });

            gsap.from('#current-video', {
                transformOrigin: 'center center',
                scale: 0,
                duration: 1.5,
                ease: 'power1.inOut',
            });
        }
    }, { dependencies: [currentIndex], revertOnUpdate: true });

    // 2. SCROLL ANIMATION (The Clip Path)
    useGSAP(() => {
        gsap.set('#video-frame', {
            clipPath: 'polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)',
            borderRadius: '0 0 40% 10%'
        });

        gsap.from('#video-frame', {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            borderRadius: '0 0 0 0',
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '#video-frame',
                start: 'center center',
                end: 'bottom center',
                scrub: true,
            }
        });
    });

    return (
        <div className='relative h-dvh w-screen overflow-x-hidden'>
             {isLoading && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-violet-50">
    <div className="three-body">
      <div className="three-body__dot" />
      <div className="three-body__dot" />
      <div className="three-body__dot" />
    </div>
  </div>
)}

              
          
            <div id='video-frame' className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-[#dfdff2]'>
                <div>
                    {/* MINI VIDEO TRIGGER */}
                    <div className='mask-clip-path absolute top-1/2 left-1/2 z-50 size-64 -translate-x-1/2 -translate-y-1/2 cursor-pointer overflow-hidden rounded-lg'>
                        <div onClick={handleMiniVdClicked} className='origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100'>
                            <video
                                src={getVideoSrc(upcomingVideoIndex)}
                                loop
                                muted
                                id='current-video'
                                className='size-64 origin-center scale-150 object-cover object-center'
                                onLoadedData={handleVideoLoad}
                            />
                        </div>
                    </div>

                    {/* EXPANDING VIDEO - This is the "flip" fix area */}
                    <video
                        ref={nextVdRef}
                        src={getVideoSrc(currentIndex)}
                        loop
                        muted
                        id='next-video'
                        /* We use xPercent/yPercent in GSAP, so we only need 
                           top/left 50% here to anchor it.
                        */
                        className='absolute left-1/2 top-1/2 z-20 size-64 object-cover object-center invisible'
                        onLoadedData={handleVideoLoad}
                    />

                    {/* BACKGROUND VIDEO */}
                    <video
                        src={getVideoSrc(currentIndex === totalVideos ? 1 : currentIndex)}
                        autoPlay
                        loop
                        muted
                        className='absolute left-0 top-0 size-full object-cover object-center'
                        onLoadedData={handleVideoLoad}
                    />
                </div>

                <h1 className='special-font uppercase font-zentry font-black text-5xl sm:right-10 sm:text-7xl md:text-9xl lg:text-[5rem] absolute bottom-5 right-5 z-40 text-[#dfdff2]'>
                    G<b>A</b>MMING
                </h1>
                
                <div className='absolute left-0 top-0 z-40 size-full'>
                    <div className='mt-24 px-5 sm:px-10'>
                        <h1 className='special-font uppercase font-zentry font-black text-9xl text-[#f0f2fa] flex items-center'>redefi<p>n</p>e</h1>
                        <p className='mb-5 max-w-64 font-robert-regular text-xl text-blue-100'>Enter the metagame layer <br /> unleash the play economy </p>
                        <Button id="watch-trailer" title="watch trailer" leftIcon={<FaLocationArrow />} containerClass="bg-yellow-300 flex items-center gap-2" />
                    </div>
                </div>
            </div>

            <h1 className='special-font uppercase font-zentry font-black text-5xl sm:right-10 sm:text-7xl md:text-9xl lg:text-[5rem] absolute bottom-5 right-5 text-black'>
                G<b>A</b>MMING
            </h1>
        </div>
    )
}

export default Hero;