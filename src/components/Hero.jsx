import React from 'react';
import webLogo from "../assets/anus_large.avif";
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

function Hero({ scrollToBelieve }) {
    return(
        <>
        <div className="hero-centered">
            <div id="hero-section">
                <div className="website-logo pt-8">
                    <img src={webLogo} alt="Uranus Logo" className="w-[25vw] lg:w-[9vw] mx-auto" />
                </div>
                <div className="hero-section-main pb-20">
                    <h1 data-aos="zoom-in" className="pt-16 lg:pt-32 text-[10vw] lg:text-[4vw] lg:pl-[250px] lg:pr-[250px] pl-3 pr-3 leading-[12vw] lg:leading-[5.5vw] text-center font-bold">
                    Explore the Universe of
                    <br/>
                    <b className="text-[13vw] leading-[19vw] lg:text-[7vw] lg:leading-[8vw]">$ANUS</b>
                    </h1>
                    <p className="mt-6 lg:mb-20 mb-14 text-[4.5vw] lg:text-[1.5vw] lg:pl-[350px] lg:pr-[350px] pl-3 pr-3 text-slate-300 lg:leading-[1.9vw] text-center">
                    Join us on a journey to the stars with $ANUS.</p>
                    <div className="flex flex-col lg:flex-row justify-center items-center mt-10 space-y-4 lg:space-y-0 lg:space-x-4">
                    <Link to="/brownpaper" className="flex justify-center items-center py-[15px] px-[40px] bg-custom-blue hover:bg-blue-700 transition duration-300 ease-in-out lg:text-[1.5vw] lg:leading-[2.2vw] font-semibold text-white rounded-[40px] shadow-lg hover:shadow-xl" style={{ textDecoration: 'none' }}>
                        <span className="mr-2">🚀</span> Brown Paper
                    </Link>
                    <button onClick={scrollToBelieve} className="flex justify-center items-center py-[15px] px-[40px] bg-transparent hover:bg-blue-700 border-2 border-custom-blue hover:border-transparent transition duration-300 ease-in-out lg:text-[1.5vw] lg:leading-[2.2vw] font-semibold text-custom-blue hover:text-white rounded-[40px] shadow-lg hover:shadow-xl" style={{ outline: 'none' }}>
                        <span className="mr-2">💰</span> How to buy $ANUS
                    </button>
                    {/* <a href="https://coinmarketcap.com/currencies/uranus-sol/" className="flex justify-center items-center py-[10px] px-[10px] bg-transparent hover:bg-blue-700 transition duration-300 ease-in-out text-custom-blue hover:text-white rounded-full shadow-lg hover:shadow-xl" style={{ outline: 'none', border: '2px solid', borderColor: 'currentColor' }}>
    <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill="currentColor"/>
        <text x="50%" y="50%" dy=".35em" fill="white" fontSize="12" textAnchor="middle" fontFamily="Arial" fontWeight="bold">C</text>
    </svg>
</a> */}
<a href="https://t.me/UranusCommunity" className="flex justify-center items-center py-[10px] px-[10px] bg-transparent hover:bg-blue-700 transition duration-300 ease-in-out text-custom-blue hover:text-white rounded-full shadow-lg hover:shadow-xl" style={{ outline: 'none', border: '2px solid', borderColor: 'currentColor' }}>
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" focusable="false" className="w-5 h-5 lg:w-6 lg:h-6" xmlns="http://www.w3.org/2000/svg">
        <path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path>
    </svg>
</a>

                </div>

                </div>
            </div>
        </div>
        </>
    );
}

export default Hero;
