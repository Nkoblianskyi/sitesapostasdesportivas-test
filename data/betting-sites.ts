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

// export const bettingSites: BettingSite[] = [
//   {
//     id: 1,
//     name: "Lamabet",
//     logo: "/lamabet.svg",
//     category: "WELCOME BONUS",
//     bonus: "100% up to 1500€",
//     dopbonus: "+ FreeBet 10% up to 100€",
//     rating: 4.9,
//     reviewCount: 9472,
//     url: "https://qualityboost.top/K2MyVL1G",
//     featured: true,
//   },
//   {
//     id: 2,
//     name: "SpinStar",
//     logo: "/spinstar.svg",
//     category: "WELCOME PACK",
//     bonus: "100% up to 500€",
//     rating: 4.8,
//     reviewCount: 8892,
//     url: "https://qualityboost.top/4PzcK69L",
//     featured: true,
//   },
//   {
//     id: 3,
//     name: "Boomerang Bet",
//     logo: "/boomerang-bet.svg",
//     category: "WELCOME BONUS",
//     bonus: "100% up to 100€",
//     dopbonus: "+ Weekly Reload Bonus 50% up to 500€",
//     rating: 4.8,
//     reviewCount: 3638,
//     url: "https://qualityboost.top/kq6yxGWN",
//     featured: true,
//   },
//   {
//     id: 4,
//     name: "Tonybet",
//     logo: "/tonybet.svg",
//     category: "WELCOME BONUS",
//     bonus: "100% up to 100€",
//     dopbonus: "+ Up To €20 Risk-Free Bet",
//     rating: 4.8,
//     reviewCount: 8435,
//     url: "https://qualityboost.top/sGL9XBNB",
//     featured: true,
//   },
//   {
//     id: 5,
//     name: "20bet",
//     logo: "/20bet.webp",
//     category: "WELCOME BONUS",
//     bonus: "100% up to €100",
//     dopbonus: "+ Free Bets",
//     rating: 4.7,
//     reviewCount: 9327,
//     url: "https://qualityboost.top/6rB7V56m",
//     featured: true,
//   },
//   {
//     id: 6,
//     name: "Mr.Play",
//     logo: "/mr.play.png",
//     category: "WELCOME BONUS",
//     bonus: "BET €5 GET €20",
//     rating: 4.7,
//     reviewCount: 6658,
//     url: "https://qualityboost.top/GnP7DXD8",
//     featured: true,
//   },
//   {
//     id: 7,
//     name: "Betiton",
//     logo: "/betiton.png",
//     category: "WELCOME BONUS",
//     bonus: "BET €10 GET €50",
//     rating: 4.5,
//     reviewCount: 7581,
//     url: "https://qualityboost.top/VNFckJr2",
//     featured: true,
//   },
//   {
//     id: 8,
//     name: "BetVictor",
//     logo: "/betvictor.png",
//     category: "WELCOME BONUS",
//     bonus: "Bet €10 → Get €30 in Free Bets",
//     rating: 4.4,
//     reviewCount: 4357,
//     url: "https://qualityboost.top/cxcP6Qd2",
//     featured: true,
//   },
//   {
//     id: 9,
//     name: "Midnite",
//     logo: "/mid.svg",
//     category: "WELCOME BONUS",
//     bonus: "Bet €10 Get €20 + 50 Free Spins",
//     rating: 4.3,
//     reviewCount: 5657,
//     url: "https://qualityboost.top/xvX8GhxY",
//     featured: true,
//   },
// ]

export const firstListSites: FirstListSite[] = [
  {
    id: 1,
    name: "Lebull",
    logo: "/lebull.svg",
    category: "BÓNUS DE BOAS-VINDAS",
    bonus: "250% até 400€",
    dopbonus: "+ 50€ de Aposta Grátis",
    modalBonus: "250% até 400€ + 50€ de Aposta Grátis",
    rating: 9.9,
    reviewCount: 4654,
    url: "https://www.lebull.pt/",
    featured: true,
    badges: ["TENDÊNCIA"],
    isTrending: true,
    disclaimer:
      "18+. Promoção para novos utilizadores. Bónus de 250% até 400€ mais 50€ em aposta grátis. Depósito mínimo de 10€. Requisitos de rollover 6x. Odds mínimas 1.60. Válido 45 dias. Aplicam-se T&Cs. BeGambleAware.org",
  },
  {
    id: 2,
    name: "Luckia",
    logo: "/luckia.svg",
    category: "BÓNUS DE BOAS-VINDAS",
    bonus: "Aposta Grátis de Atualmente",
    rating: 9.8,
    reviewCount: 6432,
    url: "https://www.luckia.pt/",
    featured: true,
    badges: ["LINHA SUPERIOR"],
    isTopRating: true,
    isTopLine: true,
    disclaimer:
      "18+. Novos clientes apenas. Faça uma aposta mínima com odds mínimas de 1/1 (2.0) dentro de 14 dias após o registo. Apostas Grátis válidas por 7 dias em apostas selecionadas. Stake grátis não devolvido com ganhos. T&Cs aplicam-se. Jogue com responsabilidade.",
  },
  {
    id: 3,
    name: "Solverde",
    logo: "/solverde.svg",
    category: "BÓNUS DE BOAS-VINDAS",
    bonus: "300% até 30€",
    dopbonus: "em Aposta Grátis",
    modalBonus: "300% até 30€ em Aposta Grátis",
    rating: 9.5,
    reviewCount: 5765,
    url: "https://www.solverde.pt/",
    featured: true,
    badges: ["POPULAR", "TENDÊNCIA"],
    isPopular: true,
    isTrending: true,
    disclaimer:
      "18+. Oferta válida para novos registos. Bónus de 300% até 30€ em apostas grátis no primeiro depósito. Requisitos de apostas 5x. Válido por 30 dias. Aplicam-se termos e condições. Jogue responsavelmente.",
  },
  {
    id: 4,
    name: "Betclic",
    logo: "/betclic.svg",
    category: "BÓNUS DE BOAS-VINDAS",
    bonus: "100% Até 20€",
    rating: 9.3,
    reviewCount: 5298,
    url: "https://www.betclic.pt/",
    featured: true,
    badges: [""],
    isTopRating: true,
    isTopLine: true,
    disclaimer:
      "18+. Apenas novos clientes. Bónus de 100% até 20€ no primeiro depósito. Odds mínimas de 1.50. Rollover de 3x o valor do bónus. Válido por 21 dias. T&Cs completos no site. Jogue responsavelmente.",
  },
]
