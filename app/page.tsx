"use client"

import { useState, useEffect } from "react"
import { Star } from "lucide-react"
import { firstListSites, type FirstListSite } from "@/data/betting-sites"
import { AboutSection } from "@/components/about-section"
import { HowWeRank } from "@/components/how-we-rank"
import { SportsSection } from "@/components/sports-section"
import { FirstListSites } from "@/components/first-best-lists"
import { Hero } from "@/components/hero"
import { Faq } from "@/components/faq"
import { SafeSection } from "@/components/safe-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieConsent } from "@/components/cookie-consent"
import { RankingModal } from "@/components/ranking-modal"

declare global {
  interface Window {
    updateLinkParams?: () => void
  }
}

export default function HomePage() {
  const [showCookieConsent, setShowCookieConsent] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState<"age" | "terms" | "ranking" | "disclaimer">("age")
  const [topSites, setTopSites] = useState<FirstListSite[]>([])
  const [isClient, setIsClient] = useState(false)

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowCookieConsent(false)
    if (!showModal) {
      setShowModal(true)
      setModalType("ranking")
    }
  }

  useEffect(() => {
    setIsClient(true)
    setTopSites(firstListSites)

    const timer = setTimeout(() => {
      setShowModal(true)
      setModalType("ranking")
    }, 12000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (showModal && isClient) {
      const timer = setTimeout(() => {
        if (typeof window !== "undefined" && typeof window.updateLinkParams === "function") {
          window.updateLinkParams()
        }
      }, 100)

      return () => clearTimeout(timer)
    }
  }, [showModal, isClient])

  const openModal = (type: "age" | "terms" | "ranking" | "disclaimer") => {
    setModalType(type)
    setShowModal(true)
  }

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

  if (!isClient) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900 technical-grid">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400"></div>
      </div>
    )
  }

  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen bg-cover bg-center bg-fixed technical-grid"
      style={{
        backgroundImage: "url('/hero.jpg')",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(10, 10, 10, 0.8)",
      }}
    >
      <Header />

      <Hero onOpenModal={openModal} />

      <FirstListSites />

      <div className="w-full bg-white border-t border-gray-200">
        <AboutSection />
      </div>

      <div className="w-full bg-gray-50 border-t border-gray-200">
        <HowWeRank />
      </div>

      <div className="w-full bg-white border-t border-gray-200">
        <SportsSection />
      </div>

      <div className="w-full bg-gray-50 border-t border-gray-200">
        <SafeSection />
      </div>

      <div className="w-full bg-white border-t border-gray-200">
        <Faq />
      </div>

      <Footer />

      {showCookieConsent && <CookieConsent onAccept={acceptCookies} />}

      <RankingModal
        show={showModal}
        onClose={() => setShowModal(false)}
        modalType={modalType}
        topSite={topSites[0] || null}
        renderStars={renderStars}
      />
    </div>
  )
}
