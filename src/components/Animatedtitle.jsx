 import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export const AnimatedTitle = ({ title, containerClass = "" }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "top 60%",
          toggleActions: "play none none reverse",
        },
      }).to(".animated-word", {
        opacity: 1,
        transform:
          "translate3d(0,0,0) rotateX(0deg) rotateY(0deg)",
        ease: "power2.inOut",
        stagger: 0.02,
        duration: 0.6,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`animated-title flex flex-col gap-1 text-7xl uppercase leading-[0.8] text-white sm:px-32 md:text-[6rem] ${containerClass}`}
    >
      {title.split("<br />").map((line, index) => (
        <div
          key={index}
          className="flex justify-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
        >
          {line.split(' ').map((word, i) => (
            <span
              key={i}
              className="animated-word special-font font-zentry font-black opacity-0 will-change-transform"
              style={{
                transform:
                  "translate3d(10px, 51px, -60px) rotateY(60deg) rotateX(-40deg)",
                transformOrigin: "50% 50% -150px",
              }}
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;
