export interface ILandingPageData {
  section01: {
    title: string;
    subTitle: string;
  };
  section02: {
    title: string;
    content: {
      title: string;
      subTitle: string;
      text: string;
    };
  };
  section03: {
    content: {
      title: string;
      subTitle: string;
      text: string;
    };
  };
}

export const LANDING_PAGE_DATA = {
  section01: {
    title: "Be good to yourself",
    subTitle:
      "We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.",
  },
  section02: {
    title: "What we can help with",
    content: {
      title: "HAIR LOSS",
      subTitle: "Hair loss needn’t be irreversible. We can help!",
      text: "We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.",
    },
  },
  section03: {
    content: {
      title: "ERECETILE DYSFUNCTION",
      subTitle: "Erections can be a tricky thing. But no need to feel down!",
      text: "We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.",
    },
  },
};

export async function getLandingPageData() {
  return LANDING_PAGE_DATA;
}
