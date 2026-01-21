import Image from "next/image";
import InteractiveCard from "./components/InteractiveCard";

export default function Home() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center p-6 relative overflow-y-auto overflow-x-hidden">
            {/* Floating particles */}
            <div className="fixed top-10 left-5 sm:top-20 sm:left-20 w-2 sm:w-3 h-2 sm:h-3 bg-white/20 rounded-full animate-fadeInOut" style={{ animationDelay: "0s" }}></div>
            <div className="fixed top-20 right-10 sm:top-40 sm:right-32 w-2 h-2 bg-white/30 rounded-full animate-fadeInOut" style={{ animationDelay: "1s" }}></div>
            <div className="fixed bottom-40 left-10 sm:bottom-32 sm:left-40 w-3 sm:w-4 h-3 sm:h-4 bg-white/15 rounded-full animate-fadeInOut" style={{ animationDelay: "0.5s" }}></div>
            <div className="fixed top-1/2 left-5 w-2 h-2 bg-white/20 rounded-full animate-fadeInOut" style={{ animationDelay: "0.6s" }}></div>
            <div className="fixed top-3/4 right-5 w-2 h-2 bg-white/25 rounded-full animate-fadeInOut" style={{ animationDelay: "1.8s" }}></div>
            <div className="fixed bottom-1/2 right-8 sm:right-16 w-2 h-2 bg-white/20 rounded-full animate-fadeInOut" style={{ animationDelay: "1.6s" }}></div>
            <div className="fixed top-1/3 right-12 sm:right-24 w-2 h-2 bg-white/30 rounded-full animate-fadeInOut" style={{ animationDelay: "0.2s" }}></div>
            <div className="fixed bottom-1/3 left-1/2 w-2 h-2 bg-white/15 rounded-full animate-fadeInOut" style={{ animationDelay: "1.7s" }}></div>

            {/* Particles above card */}
            <div className="fixed top-1/4 left-1/3 w-2 h-2 bg-white/20 rounded-full animate-fadeInOut z-20" style={{ animationDelay: "0.5s" }}></div>
            <div className="fixed top-1/2 right-1/3 w-3 h-3 bg-white/15 rounded-full animate-fadeInOut z-20" style={{ animationDelay: "1.1s" }}></div>
            <div className="fixed bottom-1/3 left-1/4 w-2 h-2 bg-white/25 rounded-full animate-fadeInOut z-20" style={{ animationDelay: "0.8s" }}></div>
            <div className="fixed top-2/3 right-1/4 w-2 h-2 bg-white/30 rounded-full animate-fadeInOut z-20" style={{ animationDelay: "1.5s" }}></div>
            <div className="fixed top-1/3 left-1/2 w-2 h-2 bg-white/20 rounded-full animate-fadeInOut z-20" style={{ animationDelay: "0.3s" }}></div>
            <div className="fixed bottom-1/2 left-2/3 w-2 h-2 bg-white/25 rounded-full animate-fadeInOut z-20" style={{ animationDelay: "0.7s" }}></div>

            <div className="w-full max-w-3xl bg-slate-800/40 backdrop-blur-xl rounded-2xl p-5 shadow-xl text-white relative z-10">
                <div className="flex items-center lg:flex-row md:flex-row sm:flex-col flex-col gap-6">
                    <div className="relative">
                        <div className="w-36 h-3w-36 rounded-full border-4 border-dotted border-primary-1 p-1">
                            <Image src="/lumineer-gallery.jpg" width={128} height={128} alt="Avatar"
                                className="rounded-full object-cover" priority loading="eager" />
                        </div>
                    </div>

                    <div className="flex flex-col flex-1">
                        <h2 className="text-3xl font-bold text-center">
                            Lumineer Gallery
                        </h2>

                        {/* <p className="text-slate-300 text-center md:text-left mt-2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus repellat suscipit soluta nulla
                    debitis tempore sapiente ea sequi vitae pariatur minus, deleniti, maiores voluptates ut eos, tempora
                    odio repellendus reiciendis!</p>

                    <div className="flex items-center gap-4 mt-3">
                        <div className="flex-1 h-0.5 bg-white"></div>
                    </div> */}

                        <div className="flex-1 h-px bg-white"></div>
                    </div>

                    {/* SOCIAL MEDIA */}
                    <div className="flex justify-center lg:flex-col md:flex-col sm:flex-row flex-row gap-6 mt-2 text-xl">
                        <a href="https://www.instagram.com/lumineer_gallery/"
                            className="hover:text-pink-400 transition hover:transform-3d hover:scale-125 ease-in-out duration-500" target={"_blank"} rel={"noreferrer"}>
                            <Image src="/instagram.svg" width={40} height={40} alt="instagram"
                                className="w-10 h-10 rounded-lg" />
                        </a>
                        <a href="#"
                            className="hover:text-blue-300 transition hover:transform-3d hover:scale-125 ease-in-out duration-500" target={"_blank"} rel={"noreferrer"}>
                            <Image src="/facebook.svg" width={40} height={40} alt="facebook" className="w-10 h-10 rounded-lg" />
                        </a>
                        <a href="#"
                            className="hover:text-pink-400 transition hover:transform-3d hover:scale-125 ease-in-out duration-500" target={"_blank"} rel={"noreferrer"}>
                            <Image src="/mail.svg" width={40} height={40} alt="mail" className="w-10 h-10 rounded-lg" />
                        </a>
                        <a href="#"
                            className="hover:text-blue-300 transition hover:transform-3d hover:scale-125 ease-in-out duration-500" target={"_blank"} rel={"noreferrer"}>
                            <Image src="/pinterest.svg" width={40} height={40} alt="pinterest"
                                className="w-10 h-10 rounded-lg" />
                        </a>
                    </div>
                </div>

                <InteractiveCard />

                {/* BUTTON LINK */}
                <div className="mt-10">
                    <div className="flex flex-row justify-center items-center">
                        <a href="https://buymeacoffee.com/"
                            className="px-5 py-2 rounded-full border border-white text-slate-200 bg-primary-1 transition w-fit flex gap-2 items-center hover:bg-primary-1/80 font-bold"
                            target={"_blank"} rel={"noreferrer"}>
                            <Image src="/coffee.svg" width={24} height={24} alt="coffee"
                                className="object-cover object-center" />
                            Buy Me a Coffee
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
