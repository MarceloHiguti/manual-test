import { getLandingPageData } from "@/services/landingPage.service";
import LandingPage from "@/components/Landingpage/LandingPage";

export default async function Home() {
  const landingPageData = await getLandingPageData(); // ability to render the data by Server Side Rendering and improve SEO

  return <LandingPage landingPageData={landingPageData} />;
}
