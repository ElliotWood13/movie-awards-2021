import { FormEvent, useEffect, useState } from "react";
import { get } from "../../../helpers";
import { SubmitNominations } from "../../molecules/submitNominations";
import { BallotCardList } from "./ballotCardList";
import { Ballot } from "./types";
import { Modal } from "../../molecules/modal";
import {
  BallotCardForm,
  SubmissionSuccessMessage,
} from "./ballotCardList.styles";
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

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.target["Best Picture"].value);
    console.log(e.target["Best Director"].value);
    console.log(e.target["Best Actor"].value);
    console.log(e.target["Best Actress"].value);
    console.log(e.target["Best Supporting Actor"].value);
    console.log(e.target["Best Supporting Actress"].value);
    console.log(e.target["Best Visual Effects"].value);
  };

  if (error) {
    return (
      <ErrorMessage text="Unfortunately there was a problem, please try again later..." />
    );
  }

  return (
    <>
      {!!ballotData.length ? (
        <BallotCardForm onSubmit={(e) => onSubmit(e)}>
          {ballotData.map((ballot, index) => (
            <BallotCardList
              key={ballot.id}
              ballotTitle={ballot.title}
              nominees={ballot.items}
              backgroundColor={onSetSectionBackgroundColor(index)}
            />
          ))}
          <SubmitNominations setOpenSubmissionModal={setOpenSubmissionModal} />
        </BallotCardForm>
      ) : null}
      {openSubmissionModal && (
        <Modal onCloseModal={() => setOpenSubmissionModal(false)}>
          <SubmissionSuccessMessage aria-label="Submission success">
            Thank you for your nominations! The awards will take place on 13th
            May 2022.
          </SubmissionSuccessMessage>
        </Modal>
      )}
    </>
  );
};
