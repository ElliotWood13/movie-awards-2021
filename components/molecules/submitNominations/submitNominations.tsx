import { PrimaryButton } from "../../atoms/button";
import {
  SubmitNominationsWrapper,
  SubmitNominationsContentWrapper,
} from "./submitNominations.styles";

export const SubmitNominations = ({ setOpenSubmissionModal }) => {
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
