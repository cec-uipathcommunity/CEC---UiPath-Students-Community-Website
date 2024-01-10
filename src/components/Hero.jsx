import React from 'react';
// import sak from '../image/sak_photo.jpeg'
import muk from '../image/mukesh.jpeg'
import arp from '../image/arpan.jpeg'
// import Footer from '../components/Footer';
const Hero = () => {

    return (<>
        <div className="h-screen bg-gray-50">
            <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-6xl">
                <section className="relative py-24 sm:py-27 lg:pt-25 xl:pb-12 flex flex-col lg:flex-row items-center justify-center lg:justify-start">
                    <div className="max-w-3xl text-center lg:text-left">
                        <p class="inline-flex px-4 py-2 text-sm sm:text-base lg:text-lg xl:text-xl text-gray-900 border border-gray-200 rounded-full font-pj">Made by Developers, for Developers</p>

                        <h1 className="mt-4 md:mt-5 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-gray-900 sm:leading-tight lg:leading-tight font-pj">
                            CEC - UiPath Students Community
                        </h1>

                        <p className="max-w-md mt-4 md:mt-6 text-sm md:text-base leading-6 md:leading-7 text-gray-600 font-inter">Transforming the World through Automation and AI</p>
                        <div className="mt-8 lg:mt-12 lg:flex lg:items-center">
                            <div className="flex justify-center flex-shrink-0 -space-x-4 overflow-hidden lg:justify-start">
                                {/* <img className="inline-block rounded-full w-14 h-14 ring-2 ring-white" src={sak} alt="" /> */}
                                <img className="inline-block rounded-full w-14 h-14 ring-2 ring-white" src={arp} alt="" />
                                <img className="inline-block rounded-full w-14 h-14 ring-2 ring-white" src={muk} alt="" />
                            </div>

                            <p className="mt-4 text-lg text-gray-900 lg:mt-0 lg:ml-4 font-pj">Get trained by<span className="font-bold"> our experts </span>and explore further.</p>
                        </div>
                        <div class="relative inline-flex mt-10 group">

                            <div class="absolute  transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt "></div>

                            <a href="/about" title="" class="relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">
                                Learn More
                            </a>
                        </div>
                    </div>

                    <div className="mt-6 md:mt-10 lg:mt-0 flex justify-center">
  <img
    className="object-cover object-top mx-auto rounded-lg md:w-56 lg:w-80"
    src="https://png.pngtree.com/png-vector/20220802/ourmid/pngtree-3d-rpa-cute-robot-cartoon-sky-blue-gradients-color-chatbot-png-image_6093532.png"
    alt="Img"
  />
</div>


{/* <div class="mt-8 md:absolute md:mt-0 md:top-32 lg:top-0 md:right-0">
                    <img class="w-full max-w-xs mx-auto lg:max-w-lg xl:max-w-xl" src="https://png.pngtree.com/png-vector/20220802/ourmid/pngtree-3d-rpa-cute-robot-cartoon-sky-blue-gradients-color-chatbot-png-image_6093532.png" alt="" />
                </div> */}
                </section>



            </div>
        </div>
        {/* <Footer /> */}
    </>
    );
};

export default Hero;
