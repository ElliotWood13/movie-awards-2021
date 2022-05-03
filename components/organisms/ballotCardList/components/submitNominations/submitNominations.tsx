import { PrimaryButton } from "../../../../atoms/button";
import {
  SubmitNominationsWrapper,
  SubmitNominationsContentWrapper,
} from "./submitNominations.styles";
import { SubmitNominationsProps } from "./types";

export const SubmitNominations = ({
  setOpenSubmissionModal,
}: SubmitNominationsProps) => {
  return (
    <SubmitNominationsWrapper>
      <SubmitNominationsContentWrapper>
        <PrimaryButton
          buttonType="submit"
          text="Submit Nominations"
          ariaLabel="Submit your selected nominations"
          onClick={() => setOpenSubmissionModal(true)}
        />
      </SubmitNominationsContentWrapper>
    </SubmitNominationsWrapper>
  );
};
