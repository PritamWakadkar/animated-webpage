import React, { useEffect, useRef, useState } from 'react';
import Button from './Button';
import { useWindowScroll } from 'react-use';
import gsap from 'gsap';

const navItems = ['Nexus', 'Vault', 'Prologue', 'About', 'Contact'];

const Navbar = () => {
  const navContainerRef = useRef(null);
  const audioElementRef = useRef(null);

  const [isAudioPlay, setIsAudioPlay] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);

  const { y: currentScrollY } = useWindowScroll();

  /* ---------------- SCROLL BACKGROUND ---------------- */
  useEffect(() => {
    if (!navContainerRef.current) return;

    if (currentScrollY > 50) {
      navContainerRef.current.classList.add('floating-nav');
    } else {
      navContainerRef.current.classList.remove('floating-nav');
    }
  }, [currentScrollY]);

  /* ---------------- GSAP ANIMATION ---------------- */
  useEffect(() => {
    if (!navContainerRef.current) return;

    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.25,
      ease: 'power2.out',
    });
  }, [isNavVisible]);

  /* ---------------- AUDIO ---------------- */
  const toggleAudioIndicator = () => {
    setIsAudioPlay(prev => !prev);
    setIsIndicatorActive(prev => !prev);
  };

  useEffect(() => {
    if (!audioElementRef.current) return;

    isAudioPlay
      ? audioElementRef.current.play()
      : audioElementRef.current.pause();
  }, [isAudioPlay]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 transition-all duration-500 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">

          {/* LEFT */}
          <div className="flex items-center gap-7">
            <img src="/img/logo.png" alt="logo" className="w-10" />

            <Button
              id="product-button"
              title="products"
              containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
            />
          </div>

          {/* RIGHT */}
          <div className="flex items-center">
            <div className="hidden md:flex">
              {navItems.map(item => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative ms-10 text-xs uppercase text-blue-50
                  after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full
                  after:origin-bottom-right after:scale-x-0 after:bg-white
                  after:transition-transform after:duration-300
                  hover:after:origin-bottom-left hover:after:scale-x-100"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* AUDIO INDICATOR */}
            <button
              className="ml-10 flex items-center space-x-1"
              onClick={toggleAudioIndicator}
            >
              <audio
                ref={audioElementRef}
                className="hidden"
                src="/audio/loop.mp3"
                loop
              />

              {[1, 2, 3, 4].map(bar => (
                <div
                  key={bar}
                  className={`indicator-line h-1 w-px rounded-full bg-white transition-all duration-200
                  ${isIndicatorActive ? 'animate-pulse' : ''}`}
                  style={{ animationDelay: `${bar * 0.1}s` }}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
