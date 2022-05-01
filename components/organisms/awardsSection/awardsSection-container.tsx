import { useEffect, useState } from "react";
import { get } from "../../../helpers";
import { SubmitNominations } from "../../molecules/submitNominations";
import { AwardsSection } from "./awardsSection";
import { Ballot } from "./types";
import { Modal } from "../../molecules/modal";
import { SubmissionSuccessMessage } from "./awardsSection.styles";

// TODO: Handle error returned from endpoint

export const Awards = () => {
  const [ballotData, setBallotData] = useState<Ballot[] | []>([]);
  const [openSubmissionModal, setOpenSubmissionModal] = useState(false);
  const ballotsEndpoint = "http://localhost:3000/api/ballots";

  useEffect(() => {
    get(ballotsEndpoint).then((result) => {
      if (result.items) {
        setBallotData(result.items);
      }
    });
  }, []);

  return (
    <>
      {ballotData.map((ballot) => (
        <AwardsSection
          key={ballot.id}
          ballotTitle={ballot.title}
          nominees={ballot.items}
        />
      ))}
      <SubmitNominations setOpenSubmissionModal={setOpenSubmissionModal} />
      {openSubmissionModal && (
        <Modal setModalOpen={setOpenSubmissionModal}>
          <SubmissionSuccessMessage>
            Thank you for submitting your nominees!
          </SubmissionSuccessMessage>
        </Modal>
      )}
    </>
  );
};
