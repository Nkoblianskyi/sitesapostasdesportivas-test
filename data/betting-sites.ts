export interface BettingSite {
  id: number
  name: string
  logo: string
  bonus: string
  url: string
  rating: number
  stars: number
  reviews: number
  badges: string[]
  terms: string
  isTopRating?: boolean
  isTopLine?: boolean
  isPopular?: boolean
  isTrending?: boolean
}

export interface FirstListSite {
  id: number
  name: string
  logo: string
  category: string
  bonus: string
  dopbonus?: string
  modalBonus?: string
  rating: number
  reviewCount: number
  url: string
  featured?: boolean
  disclaimer?: string
  badges?: string[]
  isTopRating?: boolean
  isTopLine?: boolean
  isPopular?: boolean
  isTrending?: boolean
}


export const firstListSites: FirstListSite[] = [
  {
    id: 1,
    name: "Luckia",
    logo: "/luckia.svg",
    category: "BÓNUS DE BOAS-VINDAS",
    bonus: "Aposta Grátis de Atualmente",
    rating: 9.8,
    reviewCount: 3584,
    url: "https://www.luckia.pt/",
    featured: true,
    badges: ["LINHA SUPERIOR"],
    isTopRating: true,
    isTopLine: true,
    disclaimer:
      "18+. Novos clientes apenas. Faça uma aposta mínima com odds mínimas de 1/1 (2.0) dentro de 14 dias após o registo. Apostas Grátis válidas por 7 dias em apostas selecionadas. Stake grátis não devolvido com ganhos. T&Cs aplicam-se. Jogue com responsabilidade.",
  },
  {
    id: 2,
    name: "Lebull",
    logo: "/lebull.svg",
    category: "BÓNUS DE BOAS-VINDAS",
    bonus: "250% até 400€",
    dopbonus: "+ 50€ de Aposta Grátis",
    modalBonus: "250% até 400€ + 50€ de Aposta Grátis",
    rating: 9.6,
    reviewCount: 4251,
    url: "https://www.lebull.pt/",
    featured: true,
    badges: ["TENDÊNCIA"],
    isTrending: true,
    disclaimer:
      "18+. Promoção para novos utilizadores. Bónus de 250% até 400€ mais 50€ em aposta grátis. Depósito mínimo de 10€. Requisitos de rollover 6x. Odds mínimas 1.60. Válido 45 dias. Aplicam-se T&Cs. BeGambleAware.org",
  },

  {
    id: 3,
    name: "Betclic",
    logo: "/betclic.svg",
    category: "BÓNUS DE BOAS-VINDAS",
    bonus: "100% Até 20€",
    rating: 9.3,
    reviewCount: 5214,
    url: "https://www.betclic.pt/",
    featured: true,
    badges: [""],
    isTopRating: true,
    isTopLine: true,
    disclaimer:
      "18+. Apenas novos clientes. Bónus de 100% até 20€ no primeiro depósito. Odds mínimas de 1.50. Rollover de 3x o valor do bónus. Válido por 21 dias. T&Cs completos no site. Jogue responsavelmente.",
  },
  {
    id: 4,
    name: "Solverde",
    logo: "/solverde.svg",
    category: "BÓNUS DE BOAS-VINDAS",
    bonus: "300% até 30€",
    dopbonus: "em Aposta Grátis",
    modalBonus: "300% até 30€ em Aposta Grátis",
    rating: 9.1,
    reviewCount: 4265,
    url: "https://www.solverde.pt/",
    featured: true,
    badges: ["POPULAR", "TENDÊNCIA"],
    isPopular: true,
    isTrending: true,
    disclaimer:
      "18+. Oferta válida para novos registos. Bónus de 300% até 30€ em apostas grátis no primeiro depósito. Requisitos de apostas 5x. Válido por 30 dias. Aplicam-se termos e condições. Jogue responsavelmente.",
  },

]
