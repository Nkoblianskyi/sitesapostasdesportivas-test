"use client"

import { Button } from "@/components/ui/button"
import { Cookie } from "lucide-react"
import Link from "next/link"

interface CookieConsentProps {
  onAccept: () => void
}

export const CookieConsent = ({ onAccept }: CookieConsentProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-950 border-t-2 border-red-600 text-white p-3 sm:p-4 z-50 animate-slideUp">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
        <div className="flex items-center gap-2 sm:gap-3 text-center sm:text-left">
          <Cookie className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 text-red-500" />
          <p className="text-xs sm:text-sm">
            Usamos cookies para melhorar sua experiência. Ao continuar visitando este site, você concorda com o uso de
            cookies.
          </p>
        </div>
        <div className="flex gap-2 sm:gap-3 w-full sm:w-auto">
          <Link
            href="/cookies"
            className="text-red-500 hover:text-red-400 hover:underline text-xs sm:text-sm transition-colors"
          >
            Saiba Mais
          </Link>
          <Button
            onClick={onAccept}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold text-xs sm:text-sm px-3 py-1 sm:px-4 sm:py-2 hover:scale-105 transition-transform"
          >
            Aceitar
          </Button>
        </div>
      </div>
    </div>
  )
}
