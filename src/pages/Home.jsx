import { FourthSection } from "../components/HomePage/FourthSection";
import { SecondSection } from "../components/HomePage/SecondSection";
import { ThirdSection } from "../components/HomePage/ThirdSection";
import { TopBanner } from "../components/HomePage/TopBanner";
import { PageTitle } from "../components/Shared/PageTitle";

export const Home = () => {
  return (
    <>
      <PageTitle title={""} />
      <TopBanner />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </>
  );
};
