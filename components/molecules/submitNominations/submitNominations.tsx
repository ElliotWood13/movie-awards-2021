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
          text="Submit Nominations"
          onClick={() => setOpenSubmissionModal(true)}
        />
      </SubmitNominationsContentWrapper>
    </SubmitNominationsWrapper>
  );
};
