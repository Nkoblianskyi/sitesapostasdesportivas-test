import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-900 py-12 w-full border-t border-gray-200">
      <div className="w-full max-w-[1280px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 flex items-center justify-center">
                <Image src="/favicon.ico" alt="Logo" width={32} height={32} />
              </div>
              <h3 className="text-xl font-bold font-serif">SitesApostasDesportivas</h3>
            </div>
            <p className="text-sm text-gray-600 font-sans leading-relaxed">
              O seu guia completo para os melhores sites de apostas desportivas em Portugal.
            </p>
          </div>

          <div>
            <h4 className="text-base font-bold mb-4 font-serif">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/" className="hover:text-irish-green transition-colors">
                  Página principal
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-irish-green transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-irish-green transition-colors">
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-bold mb-4 font-serif">Contacto</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Para questões sobre os nossos rankings ou informações sobre jogo responsável.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 mb-8">
          <h4 className="text-base font-bold mb-6 text-center font-serif text-gray-900">
            Parceiros de Jogo Responsável
          </h4>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <Link
              href="https://www.srij.turismodeportugal.pt/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-50 p-3 rounded border border-gray-200 hover:border-irish-green transition-all duration-200"
            >
              <div className="relative w-[80px] h-[32px]">
                <Image src="/srij-new.svg" alt="SRIJ" fill className="object-contain" />
              </div>
            </Link>
            <Link
              href="https://www.sicad.pt/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-50 p-3 rounded border border-gray-200 hover:border-irish-gold transition-all duration-200"
            >
              <div className="relative w-[80px] h-[32px]">
                <Image src="/icad.png" alt="SICAD" fill className="object-contain" />
              </div>
            </Link>
            <Link
              href="https://www.gamcare.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-50 p-3 rounded border border-gray-200 hover:border-irish-burgundy transition-all duration-200"
            >
              <div className="relative w-[80px] h-[32px]">
                <Image src="/gamecare-new.svg" alt="GamCare" fill className="object-contain" />
              </div>
            </Link>
            <Link
              href="https://www.gambleaware.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-50 p-3 rounded border border-gray-200 hover:border-irish-green transition-all duration-200"
            >
              <div className="relative w-[80px] h-[32px]">
                <Image src="/gamble-aware.webp" alt="GambleAware" fill className="object-contain" />
              </div>
            </Link>
            <Link
              href="https://www.jogoresponsavel.pt/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-50 p-3 rounded border border-gray-200 hover:border-gray-400 transition-all duration-200"
            >
              <div className="relative w-[80px] h-[32px]">
                <Image src="/jogo-responsavel-new.png" alt="Jogo Responsável" fill className="object-contain" />
              </div>
            </Link>
          </div>
          <div className="mt-6 text-center">
            <Badge variant="outline" className="border-irish-burgundy text-irish-burgundy">
              18+
            </Badge>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center text-gray-600">
          <p className="text-sm mb-4 leading-relaxed max-w-3xl mx-auto">
            <strong className="text-gray-900">Aviso Legal:</strong> Este site contém links de afiliados. Podemos receber
            comissões quando se regista através dos nossos links, mas isto não afeta os nossos rankings que se baseiam
            em análises independentes. Todas as casas de apostas recomendadas possuem licença SRIJ válida. Apenas para
            maiores de 18 anos. O jogo pode causar dependência. Aposte com responsabilidade.
          </p>
          <p className="text-sm text-gray-500">
            &copy; 2025 SitesApostasDesportivas.com. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
