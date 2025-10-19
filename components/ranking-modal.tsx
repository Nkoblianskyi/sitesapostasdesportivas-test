"use client"

import { Button } from "@/components/ui/button"
import { X, Shield, AlertTriangle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { FirstListSite } from "@/data/betting-sites"
import type { JSX } from "react"

interface RankingModalProps {
  show: boolean
  onClose: () => void
  modalType: "age" | "terms" | "ranking" | "disclaimer"
  topSite: FirstListSite | null
  renderStars: (rating: number, size?: string) => JSX.Element[]
}

export const RankingModal = ({ show, onClose, modalType, topSite, renderStars }: RankingModalProps) => {
  if (!show) return null

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 sm:p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        className="relative w-full max-w-sm sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto max-h-[95vh] sm:max-h-[90vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-2 -right-2 z-10 bg-white hover:bg-gray-100 text-gray-800 rounded-full p-2 sm:p-3 shadow-lg border-2 border-gray-300 hover:border-gray-400 transition-all duration-200 hover:scale-110"
          aria-label="Fechar"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <div className="border-2 border-yellow-500 rounded-lg shadow-[0_0_20px_rgba(234,179,8,0.5)]">
          <div className="bg-white border-2 border-yellow-500 rounded-lg shadow-2xl">
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-3 px-4 rounded-t-lg relative border-b-2 border-yellow-700">
              <div className="text-center">
                <div className="text-sm sm:text-base font-bold font-sans tracking-wider text-white">MELHOR ESCOLHA</div>
              </div>
            </div>

            <div className="p-4 sm:p-6 md:p-8 bg-white">
              {modalType === "age" && (
                <div className="text-center">
                  <Shield className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-green-600 mx-auto mb-2 sm:mb-3" />
                  <p className="text-xs sm:text-sm md:text-base mb-2 sm:mb-3 text-gray-800 font-medium">
                    Você deve ter 18 anos ou mais para acessar sites de apostas. Por favor, jogue com responsabilidade.
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                    Se você tem um problema com jogos de azar, procure ajuda em{" "}
                    <Link
                      href="https://www.gambleaware.org/"
                      className="text-green-600 underline hover:text-green-700 transition-colors font-medium"
                    >
                      GambleAware.org
                    </Link>
                  </p>
                  <Button
                    onClick={onClose}
                    className="bg-green-600 hover:bg-green-700 text-white font-semibold w-full text-xs sm:text-sm transition-all duration-300 border border-green-700 shadow-lg"
                  >
                    Tenho 18+ e compreendo
                  </Button>
                </div>
              )}

              {modalType === "terms" && (
                <div className="overflow-y-auto max-h-[60vh]">
                  <p className="text-xs sm:text-sm mb-2 sm:mb-3 text-gray-800 font-medium">
                    Este site contém links de afiliados e podemos receber compensação quando você se registra através de
                    nossos links. Estamos comprometidos em fornecer análises honestas e imparciais.
                  </p>
                  <ul className="list-disc pl-3 sm:pl-4 space-y-1 text-xs sm:text-sm text-gray-700">
                    <li>Podemos receber comissões de afiliados de operadores de apostas</li>
                    <li>Nossos rankings são baseados em critérios objetivos</li>
                    <li>Todos os bónus e promoções estão sujeitos aos termos do operador</li>
                    <li>Sempre verifique os termos no site oficial do operador</li>
                  </ul>
                </div>
              )}

              {modalType === "disclaimer" && (
                <div className="text-center">
                  <AlertTriangle className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-yellow-600 mx-auto mb-2 sm:mb-3" />
                  <h3 className="text-base sm:text-lg font-bold mb-3 text-gray-900">Aviso Importante</h3>
                  <div className="text-left space-y-3 text-xs sm:text-sm text-gray-700">
                    <p>
                      Este site contém links de afiliados. Podemos receber comissões quando clica em links para casas de
                      apostas. As nossas análises mantêm-se independentes e imparciais.
                    </p>
                    <p className="font-semibold text-red-600">
                      Aposte com responsabilidade. Apenas para maiores de 18 anos. O jogo pode causar dependência.
                    </p>
                    <p>
                      Procure ajuda em{" "}
                      <Link
                        href="https://www.jogoresponsavel.pt"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 underline hover:text-green-700 font-medium"
                      >
                        JogoResponsavel.pt
                      </Link>
                    </p>
                  </div>
                  <Button
                    onClick={onClose}
                    className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold w-full text-xs sm:text-sm transition-all duration-300 border border-yellow-700 shadow-lg mt-4"
                  >
                    Compreendo
                  </Button>
                </div>
              )}

              {modalType === "ranking" && topSite && (
                <div className="text-center">
                  <div>
                    <div className="mb-4 sm:mb-6">
                      <div className="w-48 h-28 sm:w-40 sm:h-28 md:w-48 md:h-32 mx-auto mb-3 sm:mb-4 flex items-center justify-center bg-white border-2 border-yellow-500 rounded-lg p-2 shadow-lg">
                        <Image
                          src={topSite.logo || "/placeholder.svg"}
                          alt={topSite.name}
                          width={240}
                          height={120}
                          className="max-w-full max-h-full object-contain transition-transform duration-300"
                        />
                      </div>

                      <div className="flex items-center justify-center gap-2 mb-2">
                        <div className="flex gap-1">{renderStars(topSite.rating, "w-4 h-4 sm:w-5 sm:h-5")}</div>
                        <span className="text-base sm:text-lg font-bold text-yellow-600 font-sans">
                          {topSite.rating.toFixed(1)}
                        </span>
                      </div>
                    </div>

                    <div className="mt-2 mb-6 bg-gradient-to-r from-yellow-50 to-yellow-100 p-4 rounded-lg border border-yellow-300">
                      <p className="font-bold mb-2 text-lg sm:text-lg md:text-xl text-yellow-700 font-sans">
                        Bónus Exclusivo
                      </p>
                      <div className="text-center flex flex-col justify-center">
                        <div className="font-bold text-gray-900 text-lg sm:text-xl md:text-2xl leading-tight font-sans">
                          {topSite.modalBonus || topSite.bonus}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 sm:space-y-4">
                      <Link href={topSite.url} target="_blank" rel="noopener noreferrer">
                        <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-lg hover:shadow-xl transform transition-all duration-300 border-2 border-green-800 w-full max-w-xs mx-auto">
                          Obter Bónus Agora
                        </Button>
                      </Link>
                      <p className="text-[10px] sm:text-sm text-gray-600 max-w-xs mx-auto font-medium">
                        Jogue com responsabilidade. Aplicam-se termos e condições de apostas. Apenas 18+.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
