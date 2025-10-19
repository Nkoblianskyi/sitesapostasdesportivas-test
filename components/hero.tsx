"use client"
import { Shield, Gift, Lock } from "lucide-react"

interface HeroProps {
  onOpenModal: (type: "age" | "terms" | "ranking" | "disclaimer") => void
}

export const Hero = ({ onOpenModal }: HeroProps) => {
  const currentDate = new Date().toLocaleDateString("pt-PT", {
    year: "numeric",
    month: "long",
  })

  return (
    <section className="w-full relative bg-black/60">
      {/* Background image for all screens */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/portuguese-football-stadium-crowd-exciting-match-a.jpg')",
        }}
      ></div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 py-2 md:py-6">
        <div className="text-center mb-6 md:mb-8 hidden md:block">
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Descubra as Melhores Casas de Apostas de Portugal com Rankings Completos
          </p>
        </div>

        <div className="text-center mb-2 md:mb-4">
          <p className="text-sm md:text-sm text-red-400">Atualizado Mensalmente - {currentDate}</p>
        </div>

        <div className="grid grid-cols-3 gap-2 md:gap-4 max-w-3xl mx-auto mb-2 md:mb-4">
          <div className="flex items-center justify-center gap-1 md:gap-2">
            <Shield className="w-4 h-4 md:w-6 md:h-6 text-irish-gold flex-shrink-0" />
            <span className="text-xs md:text-sm font-medium text-white">Licença SRIJ</span>
          </div>
          <div className="flex items-center justify-center gap-1 md:gap-2">
            <Gift className="w-4 h-4 md:w-6 md:h-6 text-irish-green flex-shrink-0" />
            <span className="text-xs md:text-sm font-medium text-white">Bónus Exclusivos</span>
          </div>
          <div className="flex items-center justify-center gap-1 md:gap-2">
            <Lock className="w-4 h-4 md:w-6 md:h-6 text-irish-burgundy flex-shrink-0" />
            <span className="text-xs md:text-sm font-medium text-white">Sites Seguros 18+</span>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-row justify-center gap-2 md:gap-6">
            <span
              onClick={() => onOpenModal("terms")}
              className="text-gray-200 hover:text-red-400 cursor-pointer underline hover:no-underline transition-all duration-300 text-[10px] sm:text-xs"
            >
              Info Publicitária
            </span>
            <span
              onClick={() => onOpenModal("age")}
              className="text-gray-200 hover:text-red-400 cursor-pointer underline hover:no-underline transition-all duration-300 text-[10px] sm:text-xs"
            >
              Apenas 18+
            </span>
            <span
              onClick={() => onOpenModal("disclaimer")}
              className="text-gray-200 hover:text-red-400 cursor-pointer underline hover:no-underline transition-all duration-300 text-[10px] sm:text-xs"
            >
              Aviso Importante
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
