"use client"

import { Card, CardContent } from "./ui/card"
import Link from "next/link"
import { Button } from "./ui/button"
import { firstListSites } from "@/data/betting-sites"
import Image from "next/image"
import { Star } from "lucide-react"

export const FirstListSites = () => {
  const renderStars = (rating: number, size = "w-4 h-4") => {
    // Convert 10-point rating to 5-star system (divide by 2)
    const starRating = rating / 2

    return Array.from({ length: 5 }, (_, i) => {
      const fillPercentage = Math.max(0, Math.min(1, starRating - i))

      if (fillPercentage >= 1) {
        // Fully filled star - gold fill with darker gold stroke
        return <Star key={i} className={`${size} fill-[#D4AF37] text-[#B8941F] stroke-2`} />
      } else if (fillPercentage > 0) {
        // Partially filled star with gold
        return (
          <div key={i} className="relative inline-block">
            <Star className={`${size} fill-transparent text-[#B8941F] stroke-2`} />
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${fillPercentage * 100}%` }}>
              <Star className={`${size} fill-[#D4AF37] text-[#B8941F] stroke-2`} />
            </div>
          </div>
        )
      } else {
        // Empty star - gold stroke only
        return <Star key={i} className={`${size} fill-transparent text-[#B8941F] opacity-50 stroke-2`} />
      }
    })
  }

  return (
    <>
      <section
        id="rankings"
        className="py-4 sm:py-8 md:py-8 w-full relative bg-gradient-to-br from-[#169B62]/5 via-white to-[#D4AF37]/5"
      >
        {/* Decorative Portuguese flag color accents */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#169B62] via-[#D4AF37] to-[#A52A2A]"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#A52A2A] via-[#D4AF37] to-[#169B62]"></div>

        <div className="w-full max-w-[1300px] mx-auto">
          <div className="px-2 sm:px-2">
            <div className="space-y-3 sm:space-y-4">
              {firstListSites.map((site, index) => (
                <Card
                  key={site.id}
                  className={`overflow-hidden bg-white transition-all duration-300 shadow-md hover:shadow-xl ${
                    index === 0
                      ? "border-4 border-[#D4AF37] ring-2 ring-[#D4AF37]/20"
                      : "border border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <Link href={site.url} target="_blank" rel="noopener noreferrer" className="block">
                    <CardContent className="p-0 transition-colors duration-300 relative bg-white hover:bg-gray-50">
                      {index === 0 && (
                        <div className="absolute top-0 left-0 z-10">
                          <div className="bg-[#D4AF37] text-white px-4 py-2 text-xs font-bold tracking-wide uppercase">
                            Melhor Avaliada
                          </div>
                        </div>
                      )}

                      {/* Mobile Layout */}
                      <div className="flex md:hidden min-h-[100px] py-2">
                        <div className="flex flex-col items-center justify-center w-2/5 py-2 pt-6 border-r border-gray-200">
                          <div className="bg-black p-2 border border-gray-200 w-28 h-14 flex items-center justify-center mb-2">
                            <Image
                              src={site.logo || "/placeholder.svg"}
                              alt={site.name}
                              width={140}
                              height={80}
                              className="max-h-full max-w-full object-contain"
                            />
                          </div>
                          <div className="text-center flex flex-col items-center justify-center gap-1">
                            <div className="flex flex-row items-center gap-1">
                              <div className="flex gap-0.5">{renderStars(site.rating, "w-5 h-5")}</div>
                              <div className="text-2xl font-bold text-gray-900">{site.rating.toFixed(1)}</div>
                            </div>
                            <div className="text-xs text-gray-600">{site.reviewCount} avaliações</div>
                          </div>
                        </div>

                        <div className="flex flex-col justify-center w-3/5 px-2 py-2">
                          <div className="text-center mb-2">
                            <p className="text-[10px] font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                              Bónus de Boas-Vindas
                            </p>
                            <div className="font-bold text-[#169B62] text-xl leading-tight">{site.bonus}</div>
                            {site.dopbonus && (
                              <div className="font-bold text-[#169B62] text-lg leading-tight mt-1">{site.dopbonus}</div>
                            )}
                          </div>
                          <div className="flex flex-col items-center gap-1">
                            <Button className="bg-[#D4AF37] hover:bg-[#B8941F] text-white text-sm px-8 py-2 font-semibold uppercase tracking-wide">
                              Obter Bónus
                            </Button>
                            <span className="text-xs text-gray-500">Visitar Site</span>
                          </div>
                        </div>
                      </div>

                      {/* Tablet Layout */}
                      <div className="hidden md:flex lg:hidden flex-row items-center justify-between gap-3 min-h-[150px] px-4 py-4">
                        <div className="flex items-center gap-3 w-48 flex-shrink-0">
                          <div className="bg-gray-900 text-white w-10 h-10 flex items-center justify-center text-base font-bold flex-shrink-0 rounded-full">
                            {index + 1}
                          </div>
                          <div className="w-32 h-16 flex items-center justify-center bg-black border border-gray-200 p-2 flex-shrink-0">
                            <Image
                              src={site.logo || "/placeholder.svg"}
                              alt={site.name}
                              width={120}
                              height={60}
                              className="max-w-full max-h-full object-contain"
                            />
                          </div>
                        </div>

                        <div className="text-center flex-1 min-w-0 px-2">
                          <h3 className="text-lg font-serif font-bold text-gray-900 mb-1 truncate">{site.name}</h3>
                          <div className="flex justify-center items-center gap-1">
                            <div className="flex">{renderStars(site.rating)}</div>
                            <span className="text-lg font-bold ml-1 text-gray-900">{site.rating.toFixed(1)}</span>
                          </div>
                          <div className="text-xs text-gray-600 mt-1">{site.reviewCount} avaliações</div>
                        </div>

                        <div className="flex flex-col items-center justify-center w-56 flex-shrink-0">
                          <p className="font-semibold mb-2 text-xs text-gray-600 uppercase tracking-wide">
                            Bónus de Boas-Vindas
                          </p>
                          <div className="text-center min-h-[48px] flex flex-col justify-center">
                            <div className="font-bold text-[#169B62] text-2xl leading-tight">{site.bonus}</div>
                            {site.dopbonus && (
                              <div className="font-bold text-[#169B62] text-xl mt-2 leading-tight">{site.dopbonus}</div>
                            )}
                          </div>
                        </div>

                        <div className="text-center flex flex-col items-center gap-1 w-32 flex-shrink-0">
                          <Button className="bg-[#D4AF37] hover:bg-[#B8941F] text-white text-xs px-4 py-4 font-semibold uppercase tracking-wide">
                            Obter Bónus
                          </Button>
                          <span className="text-xs text-gray-500">Visitar Site</span>
                        </div>
                      </div>

                      {/* Desktop Layout */}
                      <div className="hidden lg:flex flex-row items-center justify-between gap-4 px-6 py-8 min-h-[160px]">
                        <div className="flex items-center gap-5 w-80 flex-shrink-0">
                          <div className="bg-gray-900 text-white w-12 h-12 flex items-center justify-center text-lg font-bold flex-shrink-0 rounded-full">
                            {index + 1}
                          </div>
                          <div className="w-56 h-20 xl:h-24 flex items-center justify-center bg-black border border-gray-200 p-2 flex-shrink-0">
                            <Image
                              src={site.logo || "/placeholder.svg"}
                              alt={site.name}
                              width={140}
                              height={100}
                              className="max-w-full max-h-full object-contain"
                            />
                          </div>
                        </div>

                        <div className="text-center flex-1 min-w-0 px-4">
                          <h3 className="text-2xl font-serif font-bold text-gray-900 mb-1">{site.name}</h3>
                          <div className="mt-1 flex justify-center items-center gap-1">
                            <div className="flex">{renderStars(site.rating)}</div>
                            <span className="text-xl font-bold text-gray-900">{site.rating.toFixed(1)}</span>
                          </div>
                          <div className="text-sm text-gray-600 mt-1">{site.reviewCount} avaliações</div>
                        </div>

                        <div className="flex flex-col items-center justify-center w-80 flex-shrink-0">
                          <p className="font-semibold mb-2 text-xs text-gray-600 uppercase tracking-wide">
                            Bónus de Boas-Vindas
                          </p>
                          <div className="text-center min-h-[70px] flex flex-col justify-center">
                            <div className="font-bold text-[#169B62] xl:text-2xl text-lg leading-tight">
                              {site.bonus}
                            </div>
                            {site.dopbonus && (
                              <div className="font-bold text-[#169B62] xl:text-xl mt-2 text-sm leading-tight">
                                {site.dopbonus}
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="text-center flex flex-col items-center gap-2 w-48 flex-shrink-0">
                          <Button className="bg-[#D4AF37] hover:bg-[#B8941F] text-white text-lg px-4 py-4 font-semibold uppercase tracking-wide">
                            Obter Bónus
                          </Button>
                          <span className="text-sm text-gray-500">Visitar Site</span>
                        </div>
                      </div>

                      <div className="bg-gray-100 px-2 py-2 border-t border-gray-200">
                        <p className="text-[10px] text-gray-600 text-center leading-tight">
                          18+. Apenas novos jogadores PT. Aplicam-se T&Cs. Por favor, jogue com responsabilidade.
                          jogosantarresponsavel.pt
                        </p>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
