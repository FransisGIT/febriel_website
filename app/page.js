"use client";
import Image from "next/image";
import { useState } from "react";
import Gallery from "./gallery/gallery";
import About from "./about/about";
import Portfolio from "./portfolio/portfolio";
import Contact from "./contact/contact";

export default function Home() {
    const [openDropdown, setOpenDropdown] = useState(null);

    return (
        <div className="min-h-screen w-full flex items-center justify-center p-6">
            <div className="w-full max-w-3xl bg-slate-800/40 backdrop-blur-xl rounded-2xl p-8 shadow-xl text-white">
                <div className="flex items-center lg:flex-row md:flex-row sm:flex-col flex-col gap-6">
                    <div className="relative flex-shrink-0">
                        <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full border-4 border-dotted border-pink-300 p-1">
                            <Image src="/febriel.png" width={128} height={128} alt="Avatar"
                                className="rounded-full object-cover w-full h-full" />
                        </div>
                    </div>

                    <div className="flex flex-col flex-1 w-full min-w-0">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center lg:text-left mb-4 md:mb-8 m-auto">
                            Lumineer Gallery
                        </h2>
                        <div className="w-full overflow-hidden py-4">
                            <marquee
                                className="font-extrabold"
                                behavior="alternate"
                                scrollamount="3"
                                direction="left">
                                <span className="text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-shadow-3d text-pink-400">
                                    COMING SOON
                                </span>
                            </marquee>
                        </div>
                    </div>
                </div>

                {/* BUTTON DROPDOWN LINK */}
                {/* <div
            className="flex lg:justify-center md:justify-center sm:justify-center justify-evenly gap-6 lg:mt-1 md:mt-1 mt-7 flex-wrap">
            {["Gallery", "About", "Portfolio", "Contact"].map((btn) => (
            <button key={btn} onClick={()=> setOpenDropdown(openDropdown === btn ? null : btn)}
                className="px-6 py-2 rounded-full border border-white/50 text-slate-200 bg-primary-1 transition hover:bg-primary-1/80 hover:shadow-lg font-bold">
                {btn}
            </button>
            ))}
        </div> */}

                {/* GALLERY */}
                {/* <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openDropdown === "Gallery"
            ? "max-h-screen opacity-100" : "max-h-0 opacity-0" }`}>
            <Gallery></Gallery>
        </div> */}

                {/* ABOUT */}
                {/* <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openDropdown === "About"
            ? "max-h-screen opacity-100" : "max-h-0 opacity-0" }`}>
            <About></About>
        </div> */}

                {/* PORTFOLIO */}
                {/* <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openDropdown === "Portfolio"
            ? "max-h-screen opacity-100" : "max-h-0 opacity-0" }`}>
            <Portfolio></Portfolio>
        </div> */}

                {/* CONTACT */}
                {/* <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openDropdown === "Contact"
            ? "max-h-screen opacity-100" : "max-h-0 opacity-0" }`}>
            <Contact></Contact>
        </div> */}

                {/* BUTTON LINK */}
                {/* <div className="mt-10">
            <div className="flex flex-row justify-center items-center">
                <a href="https://buymeacoffee.com/"
                    className="px-5 py-2 rounded-full border border-white text-slate-200 bg-primary-1 transition w-fit flex gap-2 items-center hover:bg-primary-1/80 font-bold"
                    target={"_blank"} rel={"noreferrer"}>
                    <Image src="/coffee.svg" width={24} height={24} alt="coffee"
                        className="object-cover object-center" />
                    Buy Me a Coffee
                </a>
            </div>
        </div> */}
            </div>
        </div>
    );
}
