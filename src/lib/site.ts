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
