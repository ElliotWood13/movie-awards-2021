import { useEffect, useState } from "react";
import { get } from "../../../helpers";
import { SubmitNominations } from "../../molecules/submitNominations";
import { BallotCardList } from "./ballotCardList";
import { Ballot } from "./types";
import { Modal } from "../../molecules/modal";
import { SubmissionSuccessMessage } from "./ballotCardList.styles";
import { onSetSectionBackgroundColor } from "../../../helpers/onSetSectionBackground";
import { ErrorMessage } from "../../atoms/errorMessage/errorMessage";

export const Ballots = () => {
  const [ballotData, setBallotData] = useState<Ballot[] | []>([]);
  const [openSubmissionModal, setOpenSubmissionModal] = useState(false);
  const [error, setError] = useState(false);
  const ballotsEndpoint = "http://localhost:3000/api/ballots";

  useEffect(() => {
    get(ballotsEndpoint)
      .then((result) => {
        if (result.items) {
          setBallotData(result.items);
        }
      })
      .catch(() => setError(true));
  }, []);

  if (error)
    return (
      <ErrorMessage>
        Unfortunately there was a problem, please try again later...
      </ErrorMessage>
    );

  return (
    <>
      {!!ballotData.length ? (
        <>
          {ballotData.map((ballot, index) => (
            <BallotCardList
              key={ballot.id}
              ballotTitle={ballot.title}
              nominees={ballot.items}
              backgroundColor={onSetSectionBackgroundColor(index)}
            />
          ))}
          <SubmitNominations setOpenSubmissionModal={setOpenSubmissionModal} />
        </>
      ) : null}
      {openSubmissionModal && (
        <Modal callback={() => setOpenSubmissionModal(false)}>
          <SubmissionSuccessMessage aria-label="Submission success">
            Thank you for your nominations! The awards will take place on 13th
            May 2022.
          </SubmissionSuccessMessage>
        </Modal>
      )}
    </>
  );
};
