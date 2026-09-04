import quizIntro from "@/assets/quiz-intro.jpg";
import quizIngredients from "@/assets/quiz-ingredients.jpg";
import quizEbook from "@/assets/quiz-ebook.jpg";
import quizBenefits from "@/assets/quiz-benefits.jpg";
import quizParabens from "@/assets/quiz-parabens.jpg";

/**
 * URL do checkout para onde o botão final "Eu quero!" redireciona.
 * Substitua pelo link real do seu checkout (Hotmart, Kiwify, Stripe etc).
 */
export const CHECKOUT_URL = "https://pay.exemplo.com/checkout-segredos-curativos";

export type QuizOption = {
  label: string;
  subtitle?: string;
};

export type QuizStep =
  | {
      kind: "intro";
      title: string;
      subtitle?: string;
      image: string;
      imageAlt: string;
      buttonLabel: string;
    }
  | {
      kind: "question";
      progressLabel: string;
      progressPercent: number;
      title: string;
      subtitle?: string;
      image?: string;
      imageAlt?: string;
      options: QuizOption[];
      footerNote?: string;
    }
  | {
      kind: "benefits";
      title: string;
      subtitle?: string;
      image: string;
      imageAlt: string;
      items: string[];
      buttonLabel: string;
    };

export const steps: QuizStep[] = [
  {
    kind: "intro",
    title: "Essas receitas do livro não são pra qualquer um!",
    subtitle:
      "Então preciso que responda algumas perguntas rapidinho pra ver se ele foi feito pra você. 💙",
    image: quizIntro,
    imageAlt: "Livro de receitas naturais com ervas e uma xícara de chá",
    buttonLabel: "Continuar",
  },
  {
    kind: "question",
    progressLabel: "Pergunta 1 de 6",
    progressPercent: 16,
    title: "Vamos começar.",
    subtitle: "Escolha a opção abaixo.",
    options: [{ label: "Homem" }, { label: "Mulher" }],
    footerNote:
      "Ao iniciar o teste, você concorda com os nossos Termos de Uso e Políticas de Privacidade.",
  },
  {
    kind: "question",
    progressLabel: "Pergunta 2 de 6",
    progressPercent: 33,
    title: "VOCÊ SABIA",
    subtitle:
      "Que utilizar os ingredientes certos pode aliviar dores, aumentar sua imunidade, tratar doenças, alergias e outras enfermidades sem precisar de farmácia?",
    image: quizIngredients,
    imageAlt: "Ingredientes naturais: gengibre, cúrcuma, camomila, hortelã, mel e canela",
    options: [{ label: "Sabia 👍" }, { label: "Não Sabia 👎" }],
  },
  {
    kind: "question",
    progressLabel: "Pergunta 3 de 6",
    progressPercent: 50,
    title: "E me diz uma coisa, qual é seu objetivo com as receitas?",
    subtitle: "Escolha a opção abaixo.",
    options: [
      { label: "Aliviar dores no corpo, e nas articulações" },
      { label: "Melhorar minha ansiedade e dormir melhor" },
      { label: "Diminuir o inchaço e soltar o intestino" },
      { label: "Cuidar da pressão e do coração" },
      {
        label: "Outros problemas",
        subtitle:
          "Por exemplo: controlar o açúcar no sangue, melhorar imunidade ou simplesmente usar os chás pra ter uma rotina mais saudável.",
      },
    ],
  },
  {
    kind: "question",
    progressLabel: "Pergunta 4 de 6",
    progressPercent: 66,
    title: "E como é que você cuida da sua saúde hoje em dia?",
    subtitle: "Escolha a opção abaixo.",
    options: [
      { label: "Tomo muito remédio" },
      { label: "Tento me cuidar com coisas naturais" },
      { label: "Faz tempo que não cuido de mim" },
      { label: "Faço de outro jeito" },
      { label: "Outra" },
    ],
  },
  {
    kind: "question",
    progressLabel: "Pergunta 5 de 6",
    progressPercent: 83,
    title: "E seja sincero: tá satisfeito com a sua saúde do jeito que tá?",
    subtitle: "Escolha a opção abaixo.",
    options: [
      { label: "Sim, muito satisfeito!" },
      { label: "Um pouco satisfeito..." },
      { label: "Quase nada satisfeito..." },
      { label: "Totalmente insatisfeito." },
      { label: "Outra" },
    ],
  },
  {
    kind: "question",
    progressLabel: "Pergunta 6 de 6",
    progressPercent: 100,
    title: "Quer ter acesso a 200 receitas simples para melhorar sua saúde de forma natural?",
    image: quizEbook,
    imageAlt: "Capa do eBook Segredos Curativos da Natureza",
    options: [{ label: "Quero!" }, { label: "Com certeza!" }],
  },
  {
    kind: "benefits",
    title: "O que as receitas do livro podem fazer por você:",
    subtitle: "Faça o teste e veja os resultados você mesmo.",
    image: quizBenefits,
    imageAlt: "Prateleira de potes com ervas e chás naturais",
    items: [
      "Ajudar no alívio de dores e inflamações",
      "Reduzir ansiedade e melhorar o sono",
      "Desinchar e regular o intestino",
      "Fortalecer a imunidade",
      "Auxilia no controle da pressão e da glicose",
      "Trazer mais energia e bem-estar no dia a dia",
    ],
    buttonLabel: "Continuar",
  },
  {
    kind: "question",
    progressLabel: "Quase lá!",
    progressPercent: 100,
    title: "Parabéns!",
    subtitle:
      "Pelo que você respondeu, as receitas do Segredos Curativos da Natureza vão sim te ajudar a ter uma saúde melhor!",
    image: quizParabens,
    imageAlt: "Mulher sorrindo enquanto toma um chá natural",
    options: [{ label: "Sim, Ministro!" }, { label: "Claro que sim!" }],
  },
];
