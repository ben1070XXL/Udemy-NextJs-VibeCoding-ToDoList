import Image from "next/image";
import Navigation from "./navigation";

export default function Hero() {
    return (
      <section className="relative w-full min-h-screen flex flex-col overflow-hidden">
        <Navigation />
        <div className="flex flex-col items-center justify-center flex-grow">
          {/* Background Image */}
          <div className="absolute inset-0 -z-10 bg-gray-900">
            <div className="relative w-full h-full">
              <Image
                src="/images/blue_distortion.png"
                alt="Distorted background pattern"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>
            {/* Dark Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40" />
          </div>
    
          {/* Content */}
          <div className="relative z-10 px-4 text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight text-balance">
              Alle To Do's in der Hosentasche
            </h1>
    
            <p className="text-xl md:text-2xl text-gray-100 mb-8 font-light text-balance">
              Deine Aufgaben immer dabei – Produktivität ohne Umschweife
            </p>
    
            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-colors duration-200">
                Jetzt starten
              </button>
              <button className="px-8 py-3 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-lg backdrop-blur-sm border border-white/30 transition-colors duration-200">
                Mehr erfahren
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }
  