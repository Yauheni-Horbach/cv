import { Header } from "../../components/Header";
import { PageWrapper } from "../../components/PageWrapper";

import { DescriptionSection, TitleSection } from "./components";

export const Main = () => {
  return (
    <PageWrapper>
      <Header />
      <TitleSection />
      <DescriptionSection />
    </PageWrapper>
  );
};
