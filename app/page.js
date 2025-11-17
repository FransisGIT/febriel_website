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
                    <div className="relative">
                        <div className="w-36 h-3w-36 rounded-full border-4 border-dotted border-pink-300 p-1">
                            <Image
                                src="/febriel.png"
                                width={128}
                                height={128}
                                alt="Avatar"
                                className="rounded-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col flex-1">
                        <h2 className="text-3xl font-bold text-center">
                            Febriel Art Studio
                        </h2>

                        <p className="text-slate-300 text-center md:text-left mt-2">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus repellat suscipit soluta nulla debitis tempore sapiente ea sequi vitae pariatur minus, deleniti, maiores voluptates ut eos, tempora odio repellendus reiciendis!
                        </p>

                        <div className="flex items-center gap-4 mt-3">
                            <div className="flex-1 h-0.5 bg-white"></div>
                            {/* <div className="flex-1 h-px bg-white"></div> */}
                        </div>
                    </div>

                    {/* SOCIAL MEDIA */}
                    <div className="flex justify-center lg:flex-col md:flex-col sm:flex-row flex-row gap-6 mt-2 text-xl">
                        <a href="#" className="hover:text-pink-400 transition hover:transform-3d hover:scale-125 ease-in-out duration-500">
                            <Image src="/instagram.svg" width={40} height={40} alt="instagram" className="w-10 h-10 rounded-lg" />
                        </a>
                        <a href="#" className="hover:text-blue-300 transition hover:transform-3d hover:scale-125 ease-in-out duration-500">
                            <Image src="/facebook.svg" width={40} height={40} alt="facebook" className="w-10 h-10 rounded-lg" />
                        </a>
                        <a href="#" className="hover:text-pink-400 transition hover:transform-3d hover:scale-125 ease-in-out duration-500">
                            <Image src="/mail.svg" width={40} height={40} alt="mail" className="w-10 h-10 rounded-lg" />
                        </a>
                        <a href="#" className="hover:text-blue-300 transition hover:transform-3d hover:scale-125 ease-in-out duration-500">
                            <Image src="/pinterest.svg" width={40} height={40} alt="pinterest" className="w-10 h-10 rounded-lg" />
                        </a>
                    </div>
                </div>

                {/* BUTTON DROPDOWN LINK */}
                <div className="flex lg:justify-center md:justify-center sm:justify-center justify-evenly gap-6 lg:mt-1 md:mt-1 mt-7 flex-wrap">
                    {["Gallery", "About", "Portfolio", "Contact"].map((btn) => (
                        <button
                            key={btn}
                            onClick={() => setOpenDropdown(openDropdown === btn ? null : btn)}
                            className="px-6 py-2 rounded-full border border-white/50 text-slate-200 bg-primary-1 transition hover:bg-primary-1/80 hover:shadow-lg font-bold">
                            {btn}
                        </button>
                    ))}
                </div>

                {/* GALLERY */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openDropdown === "Gallery" ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}>
                    <Gallery></Gallery>
                </div>

                {/* ABOUT */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openDropdown === "About" ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}>
                    <About></About>
                </div>

                {/* PORTFOLIO */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openDropdown === "Portfolio" ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}>
                    <Portfolio></Portfolio>
                </div>

                {/* CONTACT */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openDropdown === "Contact" ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}>
                    <Contact></Contact>
                </div>

                {/* BUTTON LINK */}
                <div className="mt-10">
                    <div className="flex flex-row justify-center items-center">
                        <a href="https://buymeacoffee.com/" className="px-5 py-2 rounded-full border border-white text-slate-200 bg-primary-1 transition w-fit flex gap-2 items-center hover:bg-primary-1/80 font-bold" target={"_blank"} rel={"noreferrer"}>
                            <Image src="/coffee.svg" width={24} height={24} alt="coffee" className="object-cover object-center" />
                            Buy Me a Coffee
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
