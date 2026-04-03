import { ServiceCategory, Value, ContactInfo } from './types';

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    title: "Recuperação e Produção Vegetal",
    services: [
      {
        title: "Restauração Ecológica",
        items: [
          "Recuperação de áreas degradadas e nascentes",
          "Projetos de Agrofloresta e Manejo de Solo",
          "Manejo e conservação de solo e água"
        ],
        icon: "Sprout"
      },
      {
        title: "Produção de Mudas",
        items: [
          "Produção de mudas nativas em grande escala",
          "Bioeconomia de sementes e frutos nativos",
          "Instalação de viveiros e bancos de germoplasma"
        ],
        icon: "TreePine"
      }
    ]
  },
  {
    title: "Regularização e Licenciamento",
    services: [
      {
        title: "Documentação Rural",
        items: [
          "CAR (Cadastro Ambiental Rural)",
          "Georreferenciamento",
          "Crédito de Carbono e MDL"
        ],
        icon: "FileText"
      },
      {
        title: "Licenciamento Ambiental",
        items: [
          "Licenças LP, LI, LO",
          "Inventários Florestais e Faunísticos",
          "CRA (Cota de Reserva Ambiental)"
        ],
        icon: "ShieldCheck"
      }
    ]
  },
  {
    title: "Gestão e Tecnologia",
    services: [
      {
        title: "Consultoria Estratégica",
        items: [
          "Ecodesign de serviços e ciclo de vida",
          "Biorremediação e Biossegurança",
          "Planejamento ambiental funcional"
        ],
        icon: "Settings"
      },
      {
        title: "Gestão Especializada",
        items: [
          "Gestão de Biotérios",
          "Gestão de Jardins Botânicos",
          "Auditoria Ambiental"
        ],
        icon: "ClipboardCheck"
      }
    ]
  },
  {
    title: "Apicultura e Monitoramento",
    services: [
      {
        title: "Polinização e Meliponicultura",
        items: [
          "Instalação de polinização assistida",
          "Adequação de apiários e meliponários",
          "Sistemas de manejo produtivo"
        ],
        icon: "Bug"
      },
      {
        title: "Monitoramento Ambiental",
        items: [
          "Qualidade de água e impactos ambientais",
          "Monitoramento de fauna e flora",
          "Acompanhamento de restauração ecológica"
        ],
        icon: "Eye"
      }
    ]
  }
];

export const VALUES: Value[] = [
  {
    title: "Ética",
    description: "Compromisso inabalável com a verdade e a transparência em cada projeto.",
    icon: "Scale"
  },
  {
    title: "Integridade",
    description: "Coerência entre ciência rigorosa e práticas sustentáveis reais.",
    icon: "Shield"
  },
  {
    title: "Disciplina",
    description: "Rigor técnico e metodológico para garantir resultados duradouros.",
    icon: "Target"
  },
  {
    title: "Responsabilidade Social",
    description: "Inclusão produtiva de comunidades e valorização da biodiversidade humana.",
    icon: "Users"
  }
];

export const CONTACT: ContactInfo = {
  address: "Rua Grapíá Nº 65, Sala 05 - Carandá Bosque, Campo Grande, MS",
  phones: ["+55 67 9 9971-9237", "+55 67 9 9809-9534"],
  email: "flordeembauba@hotmail.com",
  instagram: "LIDIANEPOYER"
};
