import Link from "next/link"
import { Cookie, ArrowLeft } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-irish-green transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar ao Início
          </Link>

          <div className="flex items-center gap-3 mb-8">
            <Cookie className="w-8 h-8 text-irish-green" />
            <h1 className="text-4xl font-bold font-serif text-gray-900">Política de Cookies</h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">Última atualização: {new Date().toLocaleDateString("pt-PT")}</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. O Que São Cookies</h2>
              <p className="text-gray-700">
                Cookies são pequenos ficheiros de texto que são colocados no seu computador ou dispositivo móvel quando
                visita o <strong>SitesApostasDesportivas.com</strong>. Os cookies ajudam-nos a fornecer uma melhor
                experiência ao lembrar as suas preferências e a analisar como utiliza o nosso site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Tipos de Cookies que Utilizamos</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">2.1 Cookies Essenciais</h3>
                  <p className="text-gray-700">
                    Estes cookies são necessários para o funcionamento adequado do site. Permitem funções básicas como
                    navegação de página e acesso a áreas seguras do site. O site não pode funcionar corretamente sem
                    estes cookies.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">2.2 Cookies de Análise e Desempenho</h3>
                  <p className="text-gray-700">
                    Utilizamos estes cookies para compreender como os visitantes interagem com o nosso site. Recolhem
                    informações anónimas sobre as páginas visitadas, tempo gasto no site e quaisquer erros encontrados.
                    Isto ajuda-nos a melhorar o desempenho do site.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">2.3 Cookies de Funcionalidade</h3>
                  <p className="text-gray-700">
                    Estes cookies permitem que o site se lembre das escolhas que faz (como o seu idioma ou região) e
                    fornecem funcionalidades melhoradas e mais personalizadas.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">2.4 Cookies de Marketing e Publicidade</h3>
                  <p className="text-gray-700">
                    Estes cookies rastreiam os seus hábitos de navegação para mostrar anúncios relevantes e medir a
                    eficácia das nossas campanhas de marketing. Podem ser definidos por nós ou por parceiros
                    publicitários terceiros.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Cookies de Terceiros</h2>
              <p className="mb-4 text-gray-700">
                Podemos utilizar serviços de terceiros que colocam cookies no seu dispositivo. Estes incluem:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>Google Analytics:</strong> Para análise de tráfego do site
                </li>
                <li>
                  <strong>Redes de Publicidade:</strong> Para mostrar anúncios relevantes
                </li>
                <li>
                  <strong>Plataformas de Redes Sociais:</strong> Para funcionalidades de partilha social
                </li>
                <li>
                  <strong>Links de Afiliados:</strong> Para rastrear referências a casas de apostas
                </li>
              </ul>
              <p className="mt-4 text-gray-700">
                Cada terceiro tem as suas próprias políticas de privacidade e cookies. Recomendamos que as reveja.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Como Gerir Cookies</h2>
              <p className="mb-4 text-gray-700">Pode controlar e gerir cookies de várias formas:</p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">4.1 Configurações do Navegador</h3>
                  <p className="text-gray-700">
                    A maioria dos navegadores permite bloquear ou eliminar cookies através das configurações. Consulte a
                    ajuda do seu navegador para mais informações:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700">
                    <li>Google Chrome</li>
                    <li>Mozilla Firefox</li>
                    <li>Safari</li>
                    <li>Microsoft Edge</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">4.2 Banner de Consentimento de Cookies</h3>
                  <p className="text-gray-700">
                    Quando visita o nosso site pela primeira vez, apresentamos um banner de consentimento de cookies
                    onde pode escolher quais categorias de cookies aceitar.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">4.3 Ferramentas de Exclusão</h3>
                  <p className="text-gray-700">
                    Pode utilizar ferramentas de exclusão do setor para cookies de publicidade, como o{" "}
                    <a
                      href="https://www.youronlinechoices.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 hover:underline"
                    >
                      Your Online Choices
                    </a>
                    .
                  </p>
                </div>
              </div>

              <p className="mt-4 text-gray-700 font-semibold">
                Nota: Bloquear ou eliminar cookies pode afetar a funcionalidade do site e a sua experiência de
                utilizador.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Duração dos Cookies</h2>
              <p className="mb-4 text-gray-700">Os cookies podem ser:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>Cookies de Sessão:</strong> Temporários e eliminados quando fecha o navegador
                </li>
                <li>
                  <strong>Cookies Persistentes:</strong> Permanecem no seu dispositivo por um período definido ou até os
                  eliminar manualmente
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Atualizações a Esta Política</h2>
              <p className="text-gray-700">
                Podemos atualizar esta Política de Cookies periodicamente para refletir alterações nas nossas práticas
                ou por outros motivos operacionais, legais ou regulamentares. Quaisquer alterações serão publicadas
                nesta página com uma data de revisão atualizada.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Mais Informações</h2>
              <p className="text-gray-700">
                Para mais informações sobre como protegemos os seus dados, consulte a nossa{" "}
                <Link href="/privacy" className="text-red-600 hover:underline">
                  Política de Privacidade
                </Link>
                .
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contacte-nos</h2>
              <p className="text-gray-700">
                Se tiver alguma questão sobre o nosso uso de cookies, contacte-nos através do{" "}
                <strong>SitesApostasDesportivas.com</strong>.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
