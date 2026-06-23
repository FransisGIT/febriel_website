import Image from "next/image";
import InteractiveCard from "./components/InteractiveCard";

export default function Home() {
    return (
        <div className="min-h-screen w-full flex justify-center py-16 p-4 relative overflow-y-auto overflow-x-hidden">

            {/* Floating particles */}
            <div className="fixed top-10 left-5 sm:top-20 sm:left-20 w-2 sm:w-3 h-2 sm:h-3 bg-white/20 rounded-full animate-fadeInOut" style={{ animationDelay: "0s" }} />
            <div className="fixed top-20 right-10 sm:top-40 sm:right-32 w-2 h-2 bg-white/30 rounded-full animate-fadeInOut" style={{ animationDelay: "1s" }} />
            <div className="fixed bottom-40 left-10 sm:bottom-32 sm:left-40 w-3 sm:w-4 h-3 sm:h-4 bg-white/15 rounded-full animate-fadeInOut" style={{ animationDelay: "0.5s" }} />
            <div className="fixed top-1/2 left-5 w-2 h-2 bg-white/20 rounded-full animate-fadeInOut" style={{ animationDelay: "0.6s" }} />
            <div className="fixed top-3/4 right-5 w-2 h-2 bg-white/25 rounded-full animate-fadeInOut" style={{ animationDelay: "1.8s" }} />
            <div className="fixed bottom-1/2 right-8 sm:right-16 w-2 h-2 bg-white/20 rounded-full animate-fadeInOut" style={{ animationDelay: "1.6s" }} />
            <div className="fixed top-1/3 right-12 sm:right-24 w-2 h-2 bg-white/30 rounded-full animate-fadeInOut" style={{ animationDelay: "0.2s" }} />
            <div className="fixed bottom-1/3 left-1/2 w-2 h-2 bg-white/15 rounded-full animate-fadeInOut" style={{ animationDelay: "1.7s" }} />

            {/* Particles above card */}
            <div className="fixed top-1/4 left-1/3 w-2 h-2 bg-white/20 rounded-full animate-fadeInOut z-20" style={{ animationDelay: "0.5s" }} />
            <div className="fixed top-1/2 right-1/3 w-3 h-3 bg-white/15 rounded-full animate-fadeInOut z-20" style={{ animationDelay: "1.1s" }} />
            <div className="fixed bottom-1/3 left-1/4 w-2 h-2 bg-white/25 rounded-full animate-fadeInOut z-20" style={{ animationDelay: "0.8s" }} />
            <div className="fixed top-2/3 right-1/4 w-2 h-2 bg-white/30 rounded-full animate-fadeInOut z-20" style={{ animationDelay: "1.5s" }} />
            <div className="fixed top-1/3 left-1/2 w-2 h-2 bg-white/20 rounded-full animate-fadeInOut z-20" style={{ animationDelay: "0.3s" }} />
            <div className="fixed bottom-1/2 left-2/3 w-2 h-2 bg-white/25 rounded-full animate-fadeInOut z-20" style={{ animationDelay: "0.7s" }} />

            <div className="w-full max-w-3xl bg-slate-800/40 backdrop-blur-xl rounded-2xl p-5 shadow-xl text-white relative z-10">

                <div className="flex items-center lg:flex-row md:flex-row flex-col gap-6">

                    {/* Avatar */}
                    <div className="relative">
                        <div className="w-36 h-36 rounded-full border-4 border-dotted border-primary-1 p-1">
                            <Image
                                src="/lumineer-gallery.jpg"
                                width={128}
                                height={128}
                                alt="Avatar"
                                className="rounded-full object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* Title */}
                    <div className="flex flex-col flex-1">
                        <h2 className="text-3xl font-bold text-center">
                            i did all you WANT, you just DUMPED ME
                        </h2>

                        <div className="flex-1 h-px bg-white mt-4"></div>
                    </div>

                    {/* SOCIAL MEDIA */}
                    {/*
                    <div className="flex justify-center lg:flex-col md:flex-col flex-row gap-6 mt-2 text-xl">
                        <a
                            href="https://www.instagram.com/lumineer_gallery/"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-pink-400 transition hover:scale-125 duration-500"
                        >
                            <Image
                                src="/instagram.svg"
                                width={40}
                                height={40}
                                alt="instagram"
                                className="w-10 h-10 rounded-lg"
                            />
                        </a>
                    </div>
                    */}
                </div>

                {/* Interactive Card */}
                {/* <InteractiveCard /> */}

                {/* BUTTON LINK */}
                {/*
                <div className="mt-10 flex justify-center">
                    <a
                        href="https://buymeacoffee.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="px-5 py-2 rounded-full border border-white text-slate-200 bg-primary-1 flex gap-2 items-center hover:bg-primary-1/80 font-bold"
                    >
                        <Image
                            src="/coffee.svg"
                            width={24}
                            height={24}
                            alt="coffee"
                        />
                        Buy Me a Coffee
                    </a>
                </div>
                */}
            </div>
        </div>
    );
}
