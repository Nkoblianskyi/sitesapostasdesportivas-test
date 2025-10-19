import Image from "next/image"

export const Header = () => {
  return (
    <header className="bg-black/95 text-white py-1.5 w-full border-b-2 border-red-600">
      <div className="w-full max-w-[1280px] mx-auto px-4">
        <div className="flex items-center justify-center gap-2 sm:gap-3">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <Image src="/favicon.ico" alt="Logo" width={32} height={32} />
            </div>
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold font-sans tracking-tight">
              Sites Apostas <span className="text-red-600">Desportivas</span>
            </h1>
          </div>
        </div>
      </div>
    </header>
  )
}
