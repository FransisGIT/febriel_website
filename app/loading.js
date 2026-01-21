import Image from "next/image";

export default function Loading() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden" style={{ background: "linear-gradient(135deg, #f388ae 0%, #a78295 100%)" }}>
            {/* Floating particles */}
            <div className="absolute top-20 left-20 w-3 h-3 bg-white/30 rounded-full animate-fadeInOut" style={{ animationDelay: "0s" }}></div>
            <div className="absolute top-40 right-32 w-2 h-2 bg-white/40 rounded-full animate-fadeInOut" style={{ animationDelay: "1s" }}></div>
            <div className="absolute bottom-32 left-40 w-4 h-4 bg-white/20 rounded-full animate-fadeInOut" style={{ animationDelay: "0.5s" }}></div>
            <div className="absolute top-60 right-20 w-2 h-2 bg-white/30 rounded-full animate-fadeInOut" style={{ animationDelay: "1.5s" }}></div>
            <div className="absolute bottom-20 right-60 w-3 h-3 bg-white/25 rounded-full animate-fadeInOut" style={{ animationDelay: "0.8s" }}></div>
            <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-white/35 rounded-full animate-fadeInOut" style={{ animationDelay: "0.3s" }}></div>
            <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-white/25 rounded-full animate-fadeInOut" style={{ animationDelay: "1.2s" }}></div>

            <div className="flex flex-col items-center justify-center gap-6 relative z-10">
                <div className="relative">
                    <div className="w-36 h-36 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center p-1">
                        <Image src="/lumineer-gallery.jpg" width={128} height={128} alt="Lumineer Logo"
                            className="rounded-full object-cover" priority />
                    </div>
                </div>
                <div className="loader"></div>
                <div className="flex items-center gap-1 animate-glow">
                    <span className="text-white text-3xl font-bold tracking-wide animate-wave" style={{ animationDelay: "0s" }}>L</span>
                    <span className="text-white text-3xl font-bold tracking-wide animate-wave" style={{ animationDelay: "0.1s" }}>o</span>
                    <span className="text-white text-3xl font-bold tracking-wide animate-wave" style={{ animationDelay: "0.2s" }}>a</span>
                    <span className="text-white text-3xl font-bold tracking-wide animate-wave" style={{ animationDelay: "0.3s" }}>d</span>
                    <span className="text-white text-3xl font-bold tracking-wide animate-wave" style={{ animationDelay: "0.4s" }}>i</span>
                    <span className="text-white text-3xl font-bold tracking-wide animate-wave" style={{ animationDelay: "0.5s" }}>n</span>
                    <span className="text-white text-3xl font-bold tracking-wide animate-wave" style={{ animationDelay: "0.6s" }}>g</span>
                    <span className="text-white text-3xl font-bold animate-wave" style={{ animationDelay: "0.7s" }}>.</span>
                    <span className="text-white text-3xl font-bold animate-wave" style={{ animationDelay: "0.8s" }}>.</span>
                    <span className="text-white text-3xl font-bold animate-wave" style={{ animationDelay: "0.9s" }}>.</span>
                </div>
            </div>
        </div>
    );
}
