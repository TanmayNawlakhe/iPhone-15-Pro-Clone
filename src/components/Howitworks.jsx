import React, { useRef } from 'react'
import { chipImg, frameImg, frameVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from'gsap'
import { animateWithGsap } from '../utils/animations'

const Howitworks = () => {

    const videoRef = useRef();

    useGSAP(() => {
        animateWithGsap("#newm", { y: 0, opacity: 1 });
        animateWithGsap('.g_fadeIn', {opacity:1, y:0, ease: 'power1', duration:1});

        gsap.to('#frameVideo',{
            scrollTrigger:{
                trigger: '#frameVideo',
                toggleActions: 'play play restart reverse',
                start: 'top bottom',
            },
            onComplete: ()=>{
                videoRef.current.play();
            }
        });

        gsap.from('#chip', {
            scrollTrigger: {
                trigger: '#chip',
                toggleActions: 'restart none restart none',
                start: '20% bottom',
            },
            opacity: 0,
            scale: 2,
            duration: 2,
            ease: 'power2.inOut',
        })
    }, []);
    return (
        <section className='common-padding'>
            <div id='newm' className='section-heading'>
                <div id='chip' className='flex-center w-full my-20'>
                    <img src={chipImg} width={180} height={180} />
                </div>

                <div className='flex flex-col items-center'>
                    <h2 className='hiw-title'>
                        A17 Pro chip.
                        <br /> A monster win for gaming.
                    </h2>

                    <p className='hiw-subtitle'>
                        It's here. The biggest redesign in the history of Apple GPUs.
                    </p>

                </div>

                <div className='mt-10 md:mt-20 mb-14 flex flex-col justify-center items-center'>
                    <div className='relative w-fit h-full flex-center '>
                        <div className='overflow-hidden'>
                            <img
                                draggable='false'
                                src={frameImg}
                                alt='frame'
                                className='bg-transparent relative z-10'
                            />


                        </div>

                        <div className='hiw-video '>
                            <video
                                muted
                                ref={videoRef}
                                playsInline
                                
                                id='frameVideo'
                                className='pointer-events-none'>
                                <source src={frameVideo}
                                    type='video/mp4' />
                            </video>
                        </div>
                    </div>

                    <p className='text-gray hiw-text text-center mt-3'>
                        Honkai: Star Rail
                    </p>
                </div>


                <div className='hiw-text-container'>
                    <div className='flex justify-center flex-col items-center'>
                        <p className='hiw-text g_fadeIn'>
                                A17 Pro is an entirely new class of iPhone chip that delivers our{' '}
                            <span className='text-white'>
                                    best graphic performance by far </span>.
                        </p>
                        
                        <p className='hiw-text g_fadeIn'>
                                Mobile {' '}
                            <span className='text-white'>
                                    games will look and feel so immersive  </span>,
                                with increditbely detailed environment and characters.
                        </p>
                    </div>
            

                    <div className='flex-1 flex justify-center flex-col g_fadeIn'>
                        <p className='hiw-text'>New</p>
                        <p className='hiw-bigtext'>Pro-class GPU</p>
                        <p className='hiw-text'>with 6 cores</p>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Howitworks