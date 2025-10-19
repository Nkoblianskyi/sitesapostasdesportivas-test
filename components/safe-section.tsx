export const SafeSection = () => {
  return (
    <section className="py-12 md:py-16 bg-gray-50 w-full">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-gray-900">Jogo Responsável e Segurança</h2>

        <div className="prose prose-lg max-w-none space-y-6">
          <p className="text-gray-700 leading-relaxed">
            A segurança dos apostadores e a promoção do jogo responsável são prioridades absolutas na nossa avaliação.
            Todas as plataformas recomendadas implementam medidas rigorosas de proteção ao jogador.
          </p>

          <div>
            <h3 className="text-2xl font-serif font-semibold mb-4 text-gray-900">Ferramentas de Autocontrolo</h3>
            <p className="text-gray-700 leading-relaxed">
              As casas de apostas licenciadas em Portugal são obrigadas a disponibilizar ferramentas que permitem aos
              utilizadores controlar a sua atividade de jogo. Estas incluem limites de depósito diários, semanais e
              mensais, limites de apostas, períodos de pausa e opções de autoexclusão temporária ou permanente.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-serif font-semibold mb-4 text-gray-900">Sinais de Alerta</h3>
            <p className="text-gray-700 leading-relaxed">
              É importante reconhecer os sinais de que o jogo pode estar a tornar-se problemático: gastar mais dinheiro
              do que pode pagar, tentar recuperar perdas através de mais apostas, negligenciar responsabilidades
              pessoais ou profissionais, ou sentir ansiedade relacionada com apostas. Se identificar estes sinais,
              procure ajuda imediatamente.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-serif font-semibold mb-4 text-gray-900">Recursos de Apoio</h3>
            <p className="text-gray-700 leading-relaxed">
              Em Portugal, existem várias organizações que oferecem apoio gratuito e confidencial a pessoas com
              problemas de jogo. O SICAD (Serviço de Intervenção nos Comportamentos Aditivos e nas Dependências)
              disponibiliza linhas de apoio e programas de tratamento. Organizações internacionais como GamCare e
              GambleAware também oferecem recursos valiosos.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-serif font-semibold mb-4 text-gray-900">Proteção de Menores</h3>
            <p className="text-gray-700 leading-relaxed">
              Todas as plataformas licenciadas implementam verificações rigorosas de idade para impedir o acesso de
              menores. Os pais e responsáveis devem também tomar medidas para proteger crianças e adolescentes,
              utilizando software de controlo parental e mantendo informações de login seguras.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
