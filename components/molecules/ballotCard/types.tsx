import { Dispatch, SetStateAction } from "react";
import { Nominee } from "../../organisms/ballotCardList/types";

export interface BallotCardProps extends Nominee {
  isActiveNominee: boolean;
  setNomineeSelected: Dispatch<SetStateAction<string>>;
}
