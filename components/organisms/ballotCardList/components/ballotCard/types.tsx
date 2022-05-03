import { Dispatch, SetStateAction } from "react";
import { Nominee } from "../../types";

export interface BallotCardProps extends Nominee {
  isActiveNominee: boolean;
  setNomineeSelected: Dispatch<SetStateAction<string>>;
  ballotTitle: string;
}
