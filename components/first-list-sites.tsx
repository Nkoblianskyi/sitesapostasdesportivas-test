import { Card, CardContent } from "./ui/card"
import Link from "next/link"
import { Button } from "./ui/button"
import { firstListSites } from "@/data/betting-sites"
import Image from "next/image"
import { Star } from "lucide-react"

export const FirstListSites = () => {
  const renderStars = (rating: number, size = "w-4 h-4") => {
    const starRating = rating / 2

    return Array.from({ length: 5 }, (_, i) => {
      const fillPercentage = Math.max(0, Math.min(1, starRating - i))

      if (fillPercentage >= 1) {
        return <Star key={i} className={`${size} fill-[#D4AF37] text-[#B8941F] stroke-2`} />
      } else if (fillPercentage > 0) {
        return (
          <div key={i} className="relative inline-block">
            <Star className={`${size} fill-transparent text-[#B8941F] stroke-2`} />
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${fillPercentage * 100}%` }}>
              <Star className={`${size} fill-[#D4AF37] text-[#B8941F] stroke-2`} />
            </div>
          </div>
        )
      } else {
        return <Star key={i} className={`${size} fill-transparent text-[#B8941F] opacity-50 stroke-2`} />
      }
    })
  }

  return (
    <>
      <section id="rankings" className="py-4 sm:py-4 md:py-4 w-full">
        <div className="w-full max-w-[1280px] mx-auto">
          <div className="px-2 sm:px-4">
            <div className="space-y-2 sm:space-y-4">
              {firstListSites.map((site, index) => (
                <Card
                  key={site.id}
                  className="overflow-hidden bg-irish-cream border-2 border-irish-green hover:border-irish-gold transition-all duration-300 shadow-lg"
                >
                  <Link href={site.url} target="_blank" rel="noopener noreferrer" className="block">
                    <CardContent className="p-0 transition-colors duration-300 relative bg-irish-cream hover:bg-irish-cream/90">
                      {index < 4 && (
                        <div className="absolute top-0 left-0 z-10">
                          <div
                            className={`text-irish-cream px-4 py-2 text-sm font-mono font-bold ${
                              index === 0
                                ? "bg-irish-green"
                                : index === 1
                                  ? "bg-irish-burgundy"
                                  : index === 2
                                    ? "bg-irish-burgundy"
                                    : "bg-irish-burgundy"
                            }`}
                          >
                            {index === 0 && "TOP RATED"}
                            {index === 1 && "EXCLUSIVE"}
                            {index === 2 && "TRENDING"}
                            {index === 3 && "RECOMMENDED"}
                          </div>
                        </div>
                      )}

                      <div className="flex md:hidden min-h-[160px]">
                        <div className="flex flex-col items-center justify-center w-1/2 py-4 border-r-2">
                          <div className="bg-irish-green p-3 border border-irish-burgundy w-32 h-16 flex items-center justify-center mb-4">
                            <Image
                              src={site.logo || "/placeholder.svg"}
                              alt={site.name}
                              width={120}
                              height={60}
                              className="max-h-full max-w-full object-contain filter brightness-0 invert"
                            />
                          </div>
                          <div className="text-center">
                            <div className="flex justify-center gap-0.5 mb-1">
                              {renderStars(site.rating, "w-3 h-3")}
                            </div>
                            <div className="text-lg font-mono font-bold text-irish-burgundy">
                              {site.rating.toFixed(1)}
                            </div>
                            <div className="text-xs text-irish-burgundy font-mono">{site.reviewCount} reviews</div>
                          </div>
                        </div>

                        <div className="flex flex-col justify-center w-1/2 px-4 py-4">
                          <div className="text-center mb-6">
                            <p className="text-xs font-mono font-bold text-irish-burgundy mb-3">WELCOME BONUS</p>
                            <div className="font-mono font-bold text-irish-green text-lg leading-tight">
                              {site.bonus}
                            </div>
                            {site.dopbonus && (
                              <div className="font-mono font-bold text-irish-green text-sm leading-tight mt-2">
                                {site.dopbonus}
                              </div>
                            )}
                          </div>
                          <Button className="bg-irish-gold hover:bg-irish-gold/90 text-irish-green text-base px-4 py-4 font-mono font-semibold border-0 w-full">
                            GET BONUS
                          </Button>
                        </div>
                      </div>

                      <div className="hidden md:flex lg:hidden flex-row items-center justify-between gap-3 min-h-[140px] px-4 py-4">
                        <div className="flex items-center gap-3 w-48 flex-shrink-0">
                          <div className="bg-irish-green text-irish-cream w-10 h-10 flex items-center justify-center text-base font-mono font-bold flex-shrink-0 rounded-full">
                            {index + 1}
                          </div>
                          <div className="w-32 h-16 flex items-center justify-center bg-irish-green border border-irish-burgundy p-2 flex-shrink-0">
                            <Image
                              src={site.logo || "/placeholder.svg"}
                              alt={site.name}
                              width={120}
                              height={60}
                              className="max-w-full max-h-full object-contain filter brightness-0 invert"
                            />
                          </div>
                        </div>

                        <div className="text-center flex-1 min-w-0 px-2">
                          <h3 className="text-lg font-mono font-bold text-irish-green mb-1 truncate">{site.name}</h3>
                          <div className="flex justify-center items-center gap-1">
                            <div className="flex">{renderStars(site.rating)}</div>
                            <span className="text-lg font-mono font-bold ml-1 text-irish-burgundy">
                              {site.rating.toFixed(1)}
                            </span>
                          </div>
                          <div className="text-xs text-irish-burgundy font-mono mt-1">{site.reviewCount} reviews</div>
                        </div>

                        <div className="flex flex-col items-center justify-center w-56 flex-shrink-0">
                          <p className="text-sm font-mono font-bold text-irish-burgundy mb-1">WELCOME BONUS</p>
                          <div className="text-center min-h-[48px] flex flex-col justify-center">
                            <div className="font-mono font-bold text-irish-green text-xl leading-tight">
                              {site.bonus}
                            </div>
                            {site.dopbonus && (
                              <div className="font-mono font-bold text-irish-green text-lg leading-tight mt-1">
                                {site.dopbonus}
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="text-center flex flex-col items-center gap-1 w-32 flex-shrink-0">
                          <Button className="bg-irish-gold hover:bg-irish-gold/90 text-irish-green text-xl px-6 py-4 font-mono border-0 w-full">
                            GET BONUS
                          </Button>
                          <p className="text-xs text-irish-burgundy font-mono">Play responsibly.</p>
                        </div>
                      </div>

                      <div className="hidden lg:flex flex-row items-center justify-between gap-4 px-6 py-8 min-h-[160px]">
                        <div className="flex items-center gap-5 w-80 flex-shrink-0">
                          <div className="bg-irish-green text-irish-cream w-12 h-12 flex items-center justify-center text-lg font-mono font-bold flex-shrink-0 rounded-full">
                            {index + 1}
                          </div>
                          <div className="w-56 h-20 xl:h-24 flex items-center justify-center bg-irish-green border border-irish-burgundy p-2 flex-shrink-0">
                            <Image
                              src={site.logo || "/placeholder.svg"}
                              alt={site.name}
                              width={140}
                              height={100}
                              className="max-w-full max-h-full object-contain filter brightness-0 invert"
                            />
                          </div>
                        </div>

                        <div className="text-center flex-1 min-w-0 px-4">
                          <h3 className="text-2xl font-mono font-bold text-irish-green mb-1">{site.name}</h3>
                          <div className="mt-1 flex justify-center items-center gap-1">
                            <div className="flex">{renderStars(site.rating)}</div>
                            <span className="text-xl font-mono font-bold text-irish-burgundy">
                              {site.rating.toFixed(1)}
                            </span>
                          </div>
                          <div className="text-sm text-irish-burgundy font-mono mt-1">{site.reviewCount} reviews</div>
                        </div>

                        <div className="flex flex-col items-center justify-center w-80 flex-shrink-0">
                          <p className="font-mono font-bold mb-2 text-sm text-irish-burgundy">WELCOME BONUS</p>
                          <div className="text-center min-h-[70px] flex flex-col justify-center">
                            <div className="font-mono font-bold text-irish-green xl:text-xl text-lg leading-tight">
                              {site.bonus}
                            </div>
                            {site.dopbonus && (
                              <div className="font-mono font-bold text-irish-green xl:text-lg mt-2 text-sm leading-tight">
                                {site.dopbonus}
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="text-center flex flex-col items-center gap-2 w-48 flex-shrink-0">
                          <Button className="bg-irish-gold hover:bg-irish-gold/90 text-irish-green text-xl px-6 py-4 font-mono border-0 w-full">
                            GET BONUS
                          </Button>
                          <p className="text-xs text-irish-burgundy font-mono">Play responsibly.</p>
                        </div>
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
