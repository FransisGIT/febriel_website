"use client";
import { useState, useRef } from "react";
import Gallery from "../gallery/gallery";
import About from "../about/about";
import Portfolio from "../portfolio/portfolio";
import Contact from "../contact/contact";

export default function InteractiveCard() {
    const [openDropdown, setOpenDropdown] = useState(null);
    const buttonRefs = useRef({});

    const handleToggle = (name) => {
        setOpenDropdown(openDropdown === name ? null : name);
        if (openDropdown !== name) {
            setTimeout(() => {
                buttonRefs.current[name]?.scrollIntoView({ behavior: "smooth", block: "center" });
            }, 100);
        }
    };

    const menuItems = [
        { name: "Gallery", component: <Gallery /> },
        { name: "About", component: <About /> },
        { name: "Portfolio", component: <Portfolio /> },
        { name: "Contact", component: <Contact /> },
    ];

    return (
        <>
            <div className="flex lg:justify-center md:justify-center sm:justify-center justify-evenly gap-6 lg:mt-1 md:mt-1 mt-7 flex-wrap">
                {menuItems.map((item) => (
                    <div key={item.name} className="w-full sm:w-auto">
                        <button
                            ref={(el) => (buttonRefs.current[item.name] = el)}
                            onClick={() => handleToggle(item.name)}
                            className={`w-full sm:w-32 h-11 rounded-full border transition-all duration-300 font-bold ${openDropdown === item.name
                                ? "border-white bg-pink-400 text-white shadow-lg scale-105"
                                : "border-white/50 text-slate-200 bg-primary-1 hover:bg-primary-1/80 hover:shadow-lg"
                                }`}>
                            {item.name}
                        </button>

                        <div className={`transition-all duration-500 ease-in-out sm:hidden ${openDropdown === item.name ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
                            {item.component}
                        </div>
                    </div>
                ))}
            </div>

            <div className="hidden sm:block">
                {menuItems.map((item) => (
                    <div key={item.name} className={`transition-all duration-500 ease-in-out ${openDropdown === item.name ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
                        {item.component}
                    </div>
                ))}
            </div>
        </>
    );
}
