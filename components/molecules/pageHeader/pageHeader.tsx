import { PageTitle } from "../../atoms/pageTitle";
import { PageHeaderContent, PageHeaderWrapper } from "./pageHeader.styles";
import { PageHeaderProps } from "./types";

export const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <PageHeaderWrapper>
      <PageHeaderContent>
        <PageTitle text={title} />
      </PageHeaderContent>
    </PageHeaderWrapper>
  );
};
