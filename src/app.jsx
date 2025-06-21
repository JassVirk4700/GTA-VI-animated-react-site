import React, { useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from "gsap";
import 'remixicon/fonts/remixicon.css';

function App() {
    let [showContent, setShowContent] = useState(false)
    const rockstarUrl = "https://www.rockstargames.com/"
    const gtaV_purchaseUrl = "https://store.rockstargames.com/game/buy-gta-v?utm_source=rockstargames.com&_gl=1*8ae7us*_ga*ODgyOTk5OTc0LjE3NTAwNjU3NjI.*_ga_PJQ2JYZDQC*czE3NTAwNjU3NjIkbzEkZzEkdDE3NTAwNjYyNzQkajU4JGwwJGgw"

    // VI mask animation
    useGSAP(() => {
        const tl = gsap.timeline();

        tl.to(".vi-mask-group", {
            rotate: 10,
            duration: 2,
            ease: "Power4.easeInOut",
            transformOrigin: "50% 50%"
        }).to(".vi-mask-group", {
            scale: 10,
            duration: 2,
            delay: -1.8,
            ease: "Expo.easeInOut",
            transformOrigin: "50% 50%",
            opacity: 0,
            onUpdate: function () {
                if (this.progress() >= .9) {
                    document.querySelector(".svg").remove();
                    setShowContent(true);
                    this.kill();
                }
            }
        });
    });

    // Entry animation for all components in first-page
    useGSAP(() => {
        if (!showContent) return;
        const main = document.querySelector(".main");

        gsap.to('.main', {
            scale: 1,
            rotate: 0,
            duration: 2,
            delay: "-1.2",
            ease: "Expo.easeInOut",
        });
        gsap.to('.bg', {
            scale: 1.2,
            rotate: 0,
            duration: 2,
            delay: "-0.8",
            ease: "Expo.easeInOut",
        });
        gsap.to('.sky', {
            scale: 1.3,
            rotate: 0,
            duration: .7,
            delay: "-0.8",
            ease: "Expo.easeInOut",
        });
        gsap.to('.text', {
            scale: 1,
            rotate: 0,
            duration: .7,
            delay: "-0.8",
            ease: "Expo.easeInOut",
        });
        gsap.to('.character', {
            scale: 0.8,
            bottom: "-60%",
            x: "-50%",
            rotate: 0,
            duration: 2,
            delay: "-0.8",
            ease: "Expo.easeInOut",
        });

        // To make the bg-sky-text move when Cursor changes in x-axis
        main?.addEventListener("mousemove", function (e) {
            const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
            gsap.to('.text', {
                x: `${xMove * 0.4}%`,
            });
            gsap.to('.sky', {
                x: xMove,
            });
            gsap.to('.bg', {
                x: xMove * 1.7,
            });
        });
    }, [showContent]);

    return (
        <>
            {/* Main VI mask animation */}
            <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
                <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
                    <defs>
                        <mask id="viMask">
                            <rect width="100%" height="100%" fill="black" />
                            <g className="vi-mask-group">
                                <text
                                    x="50%"
                                    y="50%"
                                    fontSize="250"
                                    textAnchor="middle"
                                    fill="white"
                                    dominantBaseline="middle"
                                    fontFamily="Arial Black"
                                >
                                    VI
                                </text>
                            </g>
                        </mask>
                    </defs>
                    <image
                        href="./bg.png"
                        width="100%"
                        height="100%"
                        preserveAspectRatio="xMidYMid slice"
                        mask="url(#viMask)"
                    />
                </svg>
            </div>
            {/* After VI mask animation */}
            {showContent && (
                <div className="main w-full rotate-[-10deg] scale-[1.7] ">
                    {/* 1st page */}
                    <div className="landing overflow-hidden relative w-full h-screen bg-black">
                        <div className="navbar absolute z-[10] top-0 left-0 w-full py-10 px-10">
                            <div className="logo flex gap-7 text-center ">
                                <div className="lines flex gap-[5px] flex-col">
                                    <div className="line w-13 h-2 bg-white "></div>
                                    <div className="line w-8 h-2 bg-white "></div>
                                    <div className="line w-5 h-2 bg-white "></div>
                                </div>
                                <a href={rockstarUrl}>
                                    <h3 className='text-4xl text-white -mt-[9px] leading-none '>Rockstar</h3>
                                </a>
                            </div>
                        </div>
                        <div className="imagesdiv relative overflow-hidden w-full h-screen">
                            {/* Sky */}
                            <img
                                className='sky absolute scale-[2] rotate-[-3deg] top-0 left-0 w-full h-full object-cover'
                                src="./sky.png"
                                alt="sky"
                            />
                            {/* Bg-buildings */}
                            <img
                                className='bg absolute scale-[2] rotate-[-3deg] top-0 left-0 w-full h-full object-cover'
                                src="./bg.png"
                                alt="bg"
                            />
                            {/* text Grand-theft-auto */}
                            <div className="text absolute top-20 left-1/2 -translate-x-1/2 flex flex-col gap-2 text-white rotate-[-10deg] scale-1.4">
                                <h1 className='text-[8rem] leading-none -ml-5 pl-15'>grand</h1>
                                <h1 className='text-[8rem] leading-none ml-40 pl-80'>theft</h1>
                                <h1 className='text-[8rem] leading-none -ml-5 pl-15'>auto</h1>
                            </div>
                            {/* Main-Girl-Character */}
                            <img
                                className='character absolute -bottom-[150%] scale-[3] rotate-[-20deg] left-1/2 -translate-x-1/2'
                                src="./girlbg.png"
                                alt="girl"
                            />
                        </div>
                        <div className="btmbar text-white absolute bottom-0 left-0 w-full py-12 px-10 bg-gradient-to-t from-black to-transparent">
                            <div className="flex gap-4 items-center">
                                <i className="ri-arrow-down-line text-2xl"></i>
                                <h3 className='font-[Helvetica] text-white text-xl'>Scroll down</h3>
                            </div>
                            <img className="h-[60px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " src="./ps5.png" alt="" />
                        </div>
                    </div>
                    {/* 2nd Page */}
                    <div className="page2 w-full h-screen flex items-center bg-black">
                        {/* Page content */}
                        <div className="cntnr w-full h-[80%] flex items-center text-white">
                            {/* Image Section */}
                            <div className="limg w-1/2 h-full flex justify-start items-center">
                                <img className="max-w-full h-auto object-contain scale-[0.8]" src="./imag.png" alt="GTA-Character" />
                            </div>
                            {/* Right Section */}
                            <div className="rg w-[30%]">
                                {/* Heading */}
                                <h1 className='text-6xl'>Still Running,</h1>
                                <h1 className='text-6xl'>Not Hunting.</h1>
                                {/* Description */}
                                <p className='mt-10 font-[Helvetica]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor a porro vitae minima sit possimus maxime nam quibusdam eius, odio vel eum at iure itaque?</p>
                                <p className='mt-4 font-[Helvetica]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima vitae aliquam accusantium inventore deleniti iusto excepturi fuga rerum corrupti quam laudantium quod nulla, optio culpa?</p>
                                {/* Download Button */}
                                <a href={gtaV_purchaseUrl} target="_blank" rel="noopener noreferrer">
                                    <button className='bg-yellow-400 text-2xl text-black p-5 mt-5 rounded-md transition-all duration-400 hover:cursor-pointer hover:bg-blue-400 hover:shadow-xl/30 hover:shadow-blue-600'>
                                        Download Now
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </>
    )
}
export default App;