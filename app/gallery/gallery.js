"use client";
import Image from "next/image";
import { useState } from "react";
import { createPortal } from "react-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Gallery() {
    const [activeTab, setActiveTab] = useState("Art Baju/Celana");
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [loadedImages, setLoadedImages] = useState({});
    const [previewImage, setPreviewImage] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isFirstSlide, setIsFirstSlide] = useState(true);
    const [isLastSlide, setIsLastSlide] = useState(false);

    const galleryData = {
        "Art Baju/Celana": ["/images/celana art-pedang-hitam-putih.jpeg", "/images/celana-art-pedang.jpeg"],
        "Chibi": ["/images/chibi-pack1.png", "/images/images3.png"],
        "Art": ["/images/pedang-zodiak.png"],
    };

    const handleTabChange = (tab) => {
        if (tab === activeTab) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setActiveTab(tab);
            setIsTransitioning(false);
        }, 140);
    };

    const openPreview = (img, idx) => {
        setPreviewImage(img);
        setCurrentImageIndex(idx);
        setIsFirstSlide(idx === 0);
        setIsLastSlide(idx === galleryData[activeTab].length - 1);
    };

    return (
        <div className="rounded-xl p-5 mt-6">
            {/* Tab Buttons */}
            <div className="flex justify-center gap-2 sm:gap-3 mb-6 flex-wrap">
                {Object.keys(galleryData).map((tab) => (
                    <button
                        key={tab}
                        onClick={() => handleTabChange(tab)}
                        className={`px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-base rounded-lg transition-all duration-300 font-semibold ${activeTab === tab
                            ? "bg-pink-400 text-white shadow-lg scale-105 border"
                            : "border border-white/50 text-slate-200 bg-primary-1 hover:bg-primary-1/80 hover:shadow-lg font-bold"
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Gallery Grid */}
            <div className={`grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 transition-all duration-300 ${isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}>
                {galleryData[activeTab].map((img, idx) => {
                    const imgKey = `${activeTab}-${idx}`;
                    return (
                        <div
                            key={imgKey}
                            onClick={() => openPreview(img, idx)}
                            className="group relative overflow-hidden rounded-lg hover:shadow-lg transition-all duration-300 bg-slate-700/30 min-h-[200px] cursor-pointer"
                        >
                            {!loadedImages[imgKey] && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-12 h-12 border-4 border-pink-400 border-t-transparent rounded-full animate-spin" />
                                </div>
                            )}
                            <Image
                                src={img}
                                width={300}
                                height={400}
                                alt={`${activeTab} ${idx + 1}`}
                                priority={idx === 0}
                                quality={95}
                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                                onLoad={() => setLoadedImages((prev) => ({ ...prev, [imgKey]: true }))}
                                className={`w-full h-auto object-contain group-hover:scale-105 transition-all duration-300 ${loadedImages[imgKey] ? "opacity-100" : "opacity-0"
                                    }`}
                            />
                        </div>
                    );
                })}
            </div>

            {/* Preview Modal */}
            {previewImage && typeof window !== "undefined" &&
                createPortal(
                    <div className="fixed inset-0 bg-black/70 z-[9999] flex items-center justify-center">
                        <button
                            type="button"
                            onClick={() => setPreviewImage(null)}
                            className="fixed top-4 right-4 text-white hover:text-pink-400 text-4xl transition z-[10002] cursor-pointer"
                        >
                            ×
                        </button>

                        <div className="w-full max-w-6xl h-[90vh] px-16 relative flex items-center justify-center">
                            <button
                                type="button"
                                className={`swiper-button-prev-custom absolute left-6 top-1/2 -translate-y-1/2 text-white text-6xl hover:text-pink-400 transition z-[10001] cursor-pointer ${isFirstSlide ? "opacity-0 pointer-events-none" : "opacity-100"
                                    }`}
                            >
                                ‹
                            </button>

                            <Swiper
                                modules={[Navigation, Keyboard]}
                                navigation={{
                                    nextEl: ".swiper-button-next-custom",
                                    prevEl: ".swiper-button-prev-custom",
                                }}
                                keyboard={{ enabled: true }}
                                initialSlide={currentImageIndex}
                                onSlideChange={(swiper) => {
                                    const idx = swiper.activeIndex;
                                    setCurrentImageIndex(idx);
                                    setPreviewImage(galleryData[activeTab][idx]);
                                    setIsFirstSlide(idx === 0);
                                    setIsLastSlide(idx === galleryData[activeTab].length - 1);
                                }}
                                centeredSlides
                                slidesPerView={1}
                                className="w-full h-full"
                            >
                                {galleryData[activeTab].map((img, idx) => (
                                    <SwiperSlide key={idx} className="flex! items-center! justify-center!">
                                        <div className="w-full h-full flex items-center justify-center">
                                            <Image
                                                src={img}
                                                width={1200}
                                                height={1200}
                                                alt={`Preview ${idx + 1}`}
                                                quality={100}
                                                className="max-w-full max-h-full w-auto h-auto object-contain select-none"
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            <button
                                type="button"
                                className={`swiper-button-next-custom absolute right-6 top-1/2 -translate-y-1/2 text-white text-6xl hover:text-pink-400 transition z-[10001] cursor-pointer ${isLastSlide ? "opacity-0 pointer-events-none" : "opacity-100"
                                    }`}
                            >
                                ›
                            </button>
                        </div>
                    </div>,
                    document.body
                )}
        </div>
    );
}
