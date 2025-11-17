"use client"
import Image from "next/image";

export default function Gallery() {
    const galleryImages = [
        "/febriel.png",
        "/febriel.png",
        "/febriel.png",
        "/febriel.png",
        "/febriel.png",
        "/facebook.png",
    ];

    return (
        <div className="rounded-xl p-5 mt-6">
            <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-4">
                {galleryImages.map((img, idx) => (
                    <div
                        key={idx}
                        className="group relative overflow-hidden rounded-lg aspect-square hover:shadow-lg transition-shadow duration-300"
                    >
                        <Image
                            src={img}
                            width={300}
                            height={300}
                            alt={`Gallery ${idx + 1}`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
