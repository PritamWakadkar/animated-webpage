import React from 'react'
import Button from './Button'

const ImgclipBox = ({ src, clipClass }) => {
  return (
    <div className={clipClass}>
      <img
        src={src}
        alt="img"
        className="h-full w-full object-cover"
      />
    </div>
  )
}

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          
          <ImgclipBox
            clipClass="contact-clip-path-1"
            src="/img/contact-1.webp"
          />

          <ImgclipBox
            clipClass="contact-clip-path-2"
            src="/img/contact-2.webp"
          />

        </div>
        <div className='absolute -top-40 right-40 w-60 sm:top-1/2 md:w-auto md:right-10 lg:top-20 lg:w-80'>
              <ImgclipBox
            clipClass="absolute md:scale-125"
            src="/img/swordman-partial.webp"
          />
           <ImgclipBox
            clipClass="sword-man-clip-path md:scale-125"
            src="/img/swordman.webp"
          />
        </div>
        <div className='flex flex-col items-center text-center'>
          <p className='font-general text-[10px] uppercase'>
            Jion Zentry
          </p>
          <p className='special-font mt-10 w-full font-zentry text-5xl leading-[0.9] md:text-[6rem] font-bold'>
            lets b<b>u</b>ild the <br /> new era of <br /> g<b>a</b>meing t<b>o</b>gether
          </p>

          <Button title="contact us" containerClass="mt-10 cursor-pointer bg-blue-50 absolute" />
        </div>

      </div>
    </div>
  )
}

export default Contact
