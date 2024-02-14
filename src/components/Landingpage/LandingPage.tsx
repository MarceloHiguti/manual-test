import { ILandingPageData } from "@/services/landingPage.service";
import { FC } from "react";
import Section01 from "./Section01/Section01";
import Section02 from "./Section02/Section02";
import Section03 from "./Section03/Section03";
import Footer from "./Footer/Footer";

interface ILandingPage {
  landingPageData: ILandingPageData;
}

const LandingPage: FC<ILandingPage> = async ({ landingPageData }) => {
  return (
    <div>
      <Section01
        title={landingPageData.section01.title}
        subTitle={landingPageData.section01.subTitle}
      />
      <Section02
        title={landingPageData.section02.title}
        content={{
          title: landingPageData.section02.content.title,
          subTitle: landingPageData.section02.content.subTitle,
          text: landingPageData.section02.content.text,
        }}
      />
      <Section03
        content={{
          title: landingPageData.section03.content.title,
          subTitle: landingPageData.section03.content.subTitle,
          text: landingPageData.section03.content.text,
        }}
      />
      <Footer />
    </div>
  );
};

export default LandingPage;
