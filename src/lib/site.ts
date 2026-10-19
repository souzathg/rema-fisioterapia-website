export const PHYSIO_PHONE = "5511989609348";
export const PILATES_PHONE = "5511913393853";

export const ADDRESS = {
  street: "Rua Pereira Estéfano, 114, salas 812 e 1213",
  area: "Vila da Saúde, São Paulo - SP",
  mapsQuery: "Rua Pereira Estéfano, 114, Vila da Saúde, São Paulo",
};

export function whatsappUrl(phone: string, message: string): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export const PHYSIO_WA = whatsappUrl(
  PHYSIO_PHONE,
  "Olá! Gostaria de agendar uma avaliação de Fisioterapia.",
);
export const PILATES_WA = whatsappUrl(
  PILATES_PHONE,
  "Olá! Gostaria de agendar uma aula de Pilates.",
);

export const NAV = [
  { href: "#fisioterapia", label: "Fisioterapia" },
  { href: "#pilates", label: "Pilates" },
  { href: "#quem-somos", label: "Quem somos" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#faq", label: "Dúvidas" },
  { href: "#contato", label: "Contato" },
] as const;

export interface Service {
  title: string;
  text: string;
  image: string;
  alt: string;
}

export const SERVICES: Service[] = [
  {
    title: "Reabilitação pós-operatória",
    text: "Protocolo baseado em evidências científicas, com comunicação direta com o cirurgião responsável por cada caso.",
    image: "/images/clinic-3.jpg",
    alt: "Fisioterapeuta orientando paciente em bicicleta ergométrica",
  },
  {
    title: "Retorno precoce ao treino",
    text: "Você pode voltar a treinar antes da alta, com liberação gradual conforme a sua evolução.",
    image: "/images/clinic-4.jpg",
    alt: "Paciente realizando agachamento com acompanhamento do fisioterapeuta",
  },
  {
    title: "Recuperação muscular",
    text: "Recupere-se mais rápido da fadiga após treinos intensos e competições e mantenha a constância da sua performance.",
    image: "/images/clinic-1.jpg",
    alt: "Paciente em sessão de recuperação com botas de compressão",
  },
];

export const JOINTS = ["Joelho", "Quadril", "Tornozelo", "Ombro", "Coluna"];

export const STEPS = [
  { title: "Avaliação", text: "Entendemos sua lesão, sua rotina e seu objetivo esportivo." },
  { title: "Tratamento", text: "Programa contínuo com acompanhamento profissional em cada sessão." },
  { title: "Retorno ao treino", text: "Liberação gradual, ainda durante o tratamento." },
  { title: "Alta", text: "Você volta ao esporte com segurança e confiança." },
];

export const FAQ = [
  {
    q: "Preciso de pedido médico para começar?",
    a: "Não é obrigatório para a avaliação. Se você já tem laudos, exames ou relatório cirúrgico, traga para a primeira consulta.",
  },
  {
    q: "Posso continuar treinando durante o tratamento?",
    a: "Na maioria dos casos, sim. Adaptamos o treino e liberamos o retorno de forma gradual, conforme a sua evolução.",
  },
  {
    q: "Vocês atendem pós-operatório?",
    a: "Sim. Seguimos protocolos baseados em evidências e conversamos diretamente com o seu cirurgião.",
  },
  {
    q: "O Pilates é para qualquer pessoa?",
    a: "Sim. As aulas são conduzidas por fisioterapeutas e adaptadas ao seu nível, histórico e objetivos.",
  },
  {
    q: "Como agendo?",
    a: "Pelo WhatsApp. Escolha o botão de Fisioterapia ou de Pilates e envie sua mensagem.",
  },
];

/** Link to the clinic's Google reviews. */
export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=rema+fisioterapia#lrd=0x94ce5bd0cae3a91b:0xb936c19d4995694,1,,,,";

/** Overall rating on the Google profile (out of 5). */
export const GOOGLE_RATING = 5;

/** Approximate review count shown next to the rating (update by hand). */
export const GOOGLE_REVIEW_COUNT = "90+";

export interface Review {
  author: string;
  /** 1–5 */
  rating: number;
  text: string;
  /** Relative date as shown on Google, e.g. "há 2 meses" */
  date: string;
}

export const REVIEWS: Review[] = [
  {
    author: "Cláudio M.",
    rating: 5,
    date: "há 4 meses",
    text: "Foram dois meses de fisioterapia por conta de uma ruptura do tendão de Aquiles. " +
     "Fui muitíssimo bem cuidado pelo Rafael e sua equipe. Profissionais de alto nível técnico, se destacam pela aplicaçã/o de metodologia de tratamento que busca reabilitar o paciente passo a passo, mediante exercícios funcionais. " +
     "Do primeiro dia que comecei o tratamento ao fim da primeira semana, já estava caminhando sem a bota ortopédica. Ao final do primeiro mês, evolui para um caminhar praticamente sem intercorrência. " +
     "No término do ciclo de 60 dias e 20 sessões, além de estar totalmente restabelecido, me senti capacitado a executar exercícios de corrida, equilíbrio e saltos. " +
     "Rafael e equipe, agradeço pelo tempo que passamos juntos, pela gentileza no trato comigo e sobretudo por me reabilitar à prática dos exercícios diários, com retorno plenamente funcional."
  },
  {
    author: "Gustavo S.",
    rating: 5,
    date: "há 5 meses",
    text: "Clínica especializada em reabilitação esportiva com profissionais altamente capacitados. Recomendo a clínica com total confiança para qualquer pessoa que procure um atendimento de excelência, comprometimento e resultados reais. Aproveito para parabenizar o Rafa, profissional de um conhecimento técnico incrível que se empenha a cada dia na busca pela excelência.",
  },
  {
    author: "Bianca C.",
    rating: 5,
    date: "há 5 meses",
    text: "Encontrei a rema pelo Google e fiquei surpresa com as avaliações! Fui para uma primeira consulta e logo de primeira soube que fecharia com eles! O atendimento é sensacional, eles nos acolhem e nos ajudam a passar por esse momento de recuperação! Tive uma lesão no joelho esquerdo e até então tinha perdido a esperança de voltar a correr. Voltei a ter esperança com a rema fisioterapia! Deixo aqui meus agradecimentos a toda equipe, especialmente a Katrina, que é uma profissional excelente que fez todo o acompanhamento comigo!",
  },
  {
    author: "Marcela C.",
    rating: 5,
    date: "há 5 meses",
    text: "Recomendo a fisioterapia Rema de olhos fechados. Desde a avaliação e ao longo do tratamento tive uma super assistência. Realmente meu objetivo foi atingido, cuidar e tratar minha dor e eles me ajudaram 100% no processo.",
  },
  {
    author: "Ricardo B.",
    rating: 5,
    date: "há um ano",
    text: "Fiz várias sessões de fisioterapia com o Rafael, tudo muito profissional, me explicou o detalhe de cada etapa e o que precisaria fazer, com certeza não teria voltado a ganhar os movimentos tão rápido, que perdi após minha fratura no tornozelo, se não fosse a atenção e o profissionalismo do Rafael. No começo da semana estava voltando a andar sem ajuda pela primeira vez e no final de semana já consegui marchar na minha formatura. Sou eternamente grato a equipe da ReMA Fisioterapia.",
  },
  {
    author: "Viviane P.",
    rating: 5,
    date: "há um ano",
    text: "Estou fazendo acompanhamento/reabilitação em fisioterapia na Fisio Rema e o atendimento que tenho recebido é excelente. Há quase três meses quem me atende é Michel, um profissional muito dedicado e cuidadoso. Toda a equipe é muito competente (Rafael, Ingrid, Bruna, Katrina) e acolhedora. O espaço é organizado, limpo e amistoso. Recomendo!",
  },
];
