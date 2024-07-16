import React from 'react'
import { hightlightsSlides } from '../constants'

const VideoCarousel = () => {
  return (
    <>
        <div className=' flex items-center'>
            {
                hightlightsSlides.map((list,i) => (
                    <div key={list.id} id='slider' className=' pr-10 sm:pr-20'>
                        <div className='video-carousel_container'>
                            <div className=' w-full h-full flex-center
                            bg-black overflow-hidden rounded-3xl'>
                                <video id='video' muted playsInline={true} preload='auto' >
                                    <source src={list.video} />
                                </video>
                            </div>

                            <div className='absolute top-12 left-[5%] z-10'>
                                {
                                    list.textLists.map((text) => (
                                        <p key={text} className=' md:text-2xl text-xl font-medium'>
                                            {text}
                                        </p>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </>
  )
}

export default VideoCarousel