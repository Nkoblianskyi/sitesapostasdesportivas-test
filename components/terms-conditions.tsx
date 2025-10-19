import Link from "next/link"

export const TermsConditions = () => {
  return (
    <section className="py-12 md:py-16 bg-gray-50 w-full">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-gray-900">
          Termos e Condições de Utilização
        </h2>

        <div className="prose prose-lg max-w-none">
          <h3 className="text-2xl font-serif font-semibold mb-4 text-gray-900">1. Natureza do Serviço</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            O SitesApostasDesportivas.com é um site de comparação e análise independente de casas de apostas desportivas
            em Portugal. Não somos uma casa de apostas e não aceitamos apostas diretamente.
          </p>

          <h3 className="text-2xl font-serif font-semibold mb-4 text-gray-900">2. Divulgação de Afiliados</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Este site contém links de afiliados para casas de apostas. Quando clica num link e se regista numa casa de
            apostas, podemos receber uma comissão. Esta comissão não afeta o preço que paga nem influencia as nossas
            análises e rankings, que se baseiam em critérios objetivos de avaliação.
          </p>

          <h3 className="text-2xl font-serif font-semibold mb-4 text-gray-900">3. Independência Editorial</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Mantemos total independência editorial. As nossas análises, rankings e recomendações baseiam-se
            exclusivamente em testes rigorosos, experiência do utilizador, segurança, licenciamento e qualidade de
            serviço. Nenhuma casa de apostas pode pagar para melhorar a sua posição nos nossos rankings.
          </p>

          <h3 className="text-2xl font-serif font-semibold mb-4 text-gray-900">4. Restrição de Idade</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Este site destina-se exclusivamente a maiores de 18 anos. As apostas desportivas são ilegais para menores em
            Portugal. Ao utilizar este site, confirma que tem pelo menos 18 anos de idade.
          </p>

          <h3 className="text-2xl font-serif font-semibold mb-4 text-gray-900">5. Jogo Responsável</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Promovemos o jogo responsável. O jogo deve ser uma forma de entretenimento, não uma fonte de rendimento.
            Aposte apenas o que pode perder. Se sentir que tem um problema com o jogo, procure ajuda imediatamente em{" "}
            <a
              href="https://www.jogoresponsavel.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-irish-green underline hover:no-underline"
            >
              JogoResponsavel.pt
            </a>{" "}
            ou ligue para a Linha Vida (1414).
          </p>

          <h3 className="text-2xl font-serif font-semibold mb-4 text-gray-900">6. Verificação de Informações</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Embora nos esforcemos para manter todas as informações atualizadas e precisas, os bónus, odds e termos das
            casas de apostas podem mudar sem aviso prévio. Recomendamos sempre que verifique os termos e condições
            diretamente no site oficial da casa de apostas antes de se registar.
          </p>

          <h3 className="text-2xl font-serif font-semibold mb-4 text-gray-900">7. Licenciamento e Legalidade</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Todas as casas de apostas recomendadas neste site possuem licença válida emitida pelo SRIJ (Serviço de
            Regulação e Inspeção de Jogos) para operar legalmente em Portugal. Apostar em sites não licenciados é ilegal
            em Portugal.
          </p>

          <h3 className="text-2xl font-serif font-semibold mb-4 text-gray-900">8. Limitação de Responsabilidade</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            O SitesApostasDesportivas.com não se responsabiliza por perdas financeiras resultantes de apostas. As
            decisões de apostar são da sua exclusiva responsabilidade. Não garantimos ganhos e alertamos que as apostas
            envolvem risco financeiro.
          </p>

          <h3 className="text-2xl font-serif font-semibold mb-4 text-gray-900">9. Proteção de Dados</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Respeitamos a sua privacidade e cumprimos o RGPD. Para mais informações sobre como tratamos os seus dados,
            consulte a nossa{" "}
            <Link href="/privacy" className="text-irish-green underline hover:no-underline">
              Política de Privacidade
            </Link>
            .
          </p>

          <h3 className="text-2xl font-serif font-semibold mb-4 text-gray-900">10. Contacto</h3>
          <p className="text-gray-700 leading-relaxed">
            Para questões sobre este site, as nossas análises ou para reportar problemas, contacte-nos através do nosso
            formulário de contacto.
          </p>
        </div>
      </div>
    </section>
  )
}
