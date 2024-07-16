import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { rightImg, watchImg } from '../utils'
import VideoCarousel from './VideoCarousel'

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", { opacity:1, y:0 })
    gsap.to(".link", { opacity:1, y:0 })
  } ,[])
  return (
    <section id='highlights' className='w-screen overflow-hidden h-full common-padding bg-zinc '>

      <div className=' screen-max-width'>
        <div className='mb-12 w-full md:flex items-end justify-between'>
          <h1 id='title' className=' section-heading '>
            Get the hightlights.
          </h1>

          <div className=' flex flex-wrap items-center gap-5'>
            <p className='link'>
              watch the film
            </p>
            <img src={watchImg} alt='watch'  className=' ml-2'/>
            <p className='link'>
              watch the event
            </p>
            <img src={rightImg} alt='right'  className=' ml-2'/>
          </div>
        </div>
        <VideoCarousel />
      </div>

    </section>
  )
}

export default Highlights