import { getLandingPageData } from "@/services/landingPage.service";
import LandingPage from "@/components/Landingpage/LandingPage";

export default async function Home() {
  const landingPageData = await getLandingPageData();

  return <LandingPage landingPageData={landingPageData} />;
}
