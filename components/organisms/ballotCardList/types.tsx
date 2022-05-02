export interface Nominee {
  id: string;
  photoUrL: string;
  title: string;
}

export interface Ballot {
  id: string;
  items: Nominee[];
}

export interface BallotCardListProps {
  ballotTitle: string;
  nominees: Nominee[];
  backgroundColor: string;
}
