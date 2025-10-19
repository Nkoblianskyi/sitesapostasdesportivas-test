import Link from "next/link"
import { Shield, ArrowLeft } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPolicy() {
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
            <Shield className="w-8 h-8 text-irish-green" />
            <h1 className="text-4xl font-bold font-serif text-gray-900">Política de Privacidade</h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">Última atualização: {new Date().toLocaleDateString("pt-PT")}</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introdução</h2>
              <p className="mb-4 text-gray-700">
                Bem-vindo ao <strong>SitesApostasDesportivas.com</strong>. A sua privacidade é importante para nós. Esta
                Política de Privacidade explica como recolhemos, usamos, divulgamos e protegemos as suas informações
                quando visita o nosso site.
              </p>
              <p className="text-gray-700">
                Ao utilizar o nosso site, concorda com a recolha e utilização de informações de acordo com esta
                política.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Informações que Recolhemos</h2>
              <p className="mb-4 text-gray-700">
                Recolhemos vários tipos de informações para melhorar o nosso serviço:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>Informações Pessoais:</strong> Nome, endereço de e-mail e outras informações que nos fornece
                  voluntariamente
                </li>
                <li>
                  <strong>Dados de Utilização:</strong> Informações sobre como utiliza o nosso site, incluindo páginas
                  visitadas e tempo gasto
                </li>
                <li>
                  <strong>Informações do Dispositivo:</strong> Tipo de navegador, endereço IP, sistema operativo e
                  identificadores únicos do dispositivo
                </li>
                <li>
                  <strong>Cookies e Tecnologias de Rastreamento:</strong> Utilizamos cookies para melhorar a sua
                  experiência
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Como Usamos as Suas Informações</h2>
              <p className="mb-4 text-gray-700">Utilizamos as informações recolhidas para:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Fornecer, operar e manter o nosso site</li>
                <li>Melhorar, personalizar e expandir o nosso site</li>
                <li>Compreender e analisar como utiliza o nosso site</li>
                <li>Desenvolver novos produtos, serviços, funcionalidades e características</li>
                <li>
                  Comunicar consigo, diretamente ou através de parceiros, para atendimento ao cliente, atualizações e
                  informações promocionais
                </li>
                <li>Enviar-lhe e-mails e newsletters (com o seu consentimento)</li>
                <li>Detetar, prevenir e resolver problemas técnicos</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Partilha de Informações</h2>
              <p className="mb-4 text-gray-700">
                Não vendemos, trocamos ou alugamos as suas informações pessoais a terceiros. Podemos partilhar
                informações nas seguintes situações:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>Com Prestadores de Serviços:</strong> Partilhamos informações com empresas terceiras que nos
                  ajudam a operar o nosso site
                </li>
                <li>
                  <strong>Para Cumprir Obrigações Legais:</strong> Quando exigido por lei ou para proteger os nossos
                  direitos
                </li>
                <li>
                  <strong>Com o Seu Consentimento:</strong> Podemos divulgar as suas informações para qualquer outro fim
                  com o seu consentimento
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Segurança de Dados</h2>
              <p className="text-gray-700">
                A segurança dos seus dados é importante para nós. Implementamos medidas de segurança técnicas e
                organizacionais apropriadas para proteger as suas informações pessoais contra acesso não autorizado,
                alteração, divulgação ou destruição. No entanto, nenhum método de transmissão pela Internet ou
                armazenamento eletrónico é 100% seguro.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Os Seus Direitos de Proteção de Dados</h2>
              <p className="mb-4 text-gray-700">
                De acordo com o Regulamento Geral sobre a Proteção de Dados (RGPD), tem os seguintes direitos:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>Direito de Acesso:</strong> Pode solicitar cópias dos seus dados pessoais
                </li>
                <li>
                  <strong>Direito de Retificação:</strong> Pode solicitar a correção de informações imprecisas
                </li>
                <li>
                  <strong>Direito ao Apagamento:</strong> Pode solicitar a eliminação dos seus dados pessoais
                </li>
                <li>
                  <strong>Direito de Restrição:</strong> Pode solicitar a restrição do processamento dos seus dados
                </li>
                <li>
                  <strong>Direito de Oposição:</strong> Pode opor-se ao processamento dos seus dados pessoais
                </li>
                <li>
                  <strong>Direito à Portabilidade:</strong> Pode solicitar a transferência dos seus dados para outra
                  organização
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Cookies</h2>
              <p className="text-gray-700">
                Utilizamos cookies e tecnologias de rastreamento semelhantes para melhorar a sua experiência no nosso
                site. Para mais informações, consulte a nossa{" "}
                <Link href="/cookies" className="text-red-600 hover:underline">
                  Política de Cookies
                </Link>
                .
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Links para Outros Sites</h2>
              <p className="text-gray-700">
                O nosso site pode conter links para sites de terceiros, incluindo casas de apostas. Não somos
                responsáveis pelas práticas de privacidade desses sites. Recomendamos que leia as políticas de
                privacidade de cada site que visita.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Alterações a Esta Política</h2>
              <p className="text-gray-700">
                Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre quaisquer alterações
                publicando a nova política nesta página e atualizando a data de "Última atualização".
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contacte-nos</h2>
              <p className="text-gray-700">
                Se tiver alguma questão sobre esta Política de Privacidade, contacte-nos através do nosso site{" "}
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
