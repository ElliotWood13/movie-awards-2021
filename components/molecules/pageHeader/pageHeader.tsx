import { PageTitle } from "../../atoms/pageTitle";
import { PageHeaderContent, PageHeaderWrapper } from "./pageHeader.styles";

interface PageHeaderProps {
  title: string;
}

export const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <PageHeaderWrapper>
      <PageHeaderContent>
        <PageTitle text={title} />
      </PageHeaderContent>
    </PageHeaderWrapper>
  );
};
