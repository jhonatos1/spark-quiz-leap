import quizIntro from "@/assets/quiz-intro.jpg";
import quizIngredients from "@/assets/quiz-ingredients.jpg";
import quizEbook from "@/assets/quiz-ebook.jpg";
import quizBenefits from "@/assets/quiz-benefits.jpg";
import quizParabens from "@/assets/quiz-parabens.jpg";

/**
 * URL do checkout para onde o botão final "Eu quero!" redireciona.
 */
export { CHECKOUT_URL } from "./checkout";

export type QuizOption = {
  emoji: string;
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
    options: [{ emoji: "👨", label: "Homem" }, { emoji: "👩", label: "Mulher" }],
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
    options: [{ emoji: "👍", label: "Sabia" }, { emoji: "👎", label: "Não Sabia" }],
  },
  {
    kind: "question",
    progressLabel: "Pergunta 3 de 6",
    progressPercent: 50,
    title: "E me diz uma coisa, qual é seu objetivo com as receitas?",
    subtitle: "Escolha a opção abaixo.",
    options: [
      { emoji: "🦴", label: "Aliviar dores no corpo, e nas articulações" },
      { emoji: "😴", label: "Melhorar minha ansiedade e dormir melhor" },
      { emoji: "🚽", label: "Diminuir o inchaço e soltar o intestino" },
      { emoji: "❤️", label: "Cuidar da pressão e do coração" },
      {
        emoji: "🩺", label: "Outros problemas",
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
      { emoji: "💊", label: "Tomo muito remédio" },
      { emoji: "🌿", label: "Tento me cuidar com coisas naturais" },
      { emoji: "⏳", label: "Faz tempo que não cuido de mim" },
      { emoji: "🔄", label: "Faço de outro jeito" },
      { emoji: "💬", label: "Outra" },
    ],
  },
  {
    kind: "question",
    progressLabel: "Pergunta 5 de 6",
    progressPercent: 83,
    title: "E seja sincero: tá satisfeito com a sua saúde do jeito que tá?",
    subtitle: "Escolha a opção abaixo.",
    options: [
      { emoji: "😄", label: "Sim, muito satisfeito!" },
      { emoji: "🙂", label: "Um pouco satisfeito..." },
      { emoji: "😕", label: "Quase nada satisfeito..." },
      { emoji: "😞", label: "Totalmente insatisfeito." },
      { emoji: "💬", label: "Outra" },
    ],
  },
  {
    kind: "question",
    progressLabel: "Pergunta 6 de 6",
    progressPercent: 100,
    title: "Quer ter acesso a 200 receitas simples para melhorar sua saúde de forma natural?",
    image: quizEbook,
    imageAlt: "Capa do eBook Segredos Curativos da Natureza",
    options: [{ emoji: "🙋", label: "Quero!" }, { emoji: "🤩", label: "Com certeza!" }],
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
    options: [{ emoji: "🫡", label: "Sim, Ministro!" }, { emoji: "🙌", label: "Claro que sim!" }],
  },
];
