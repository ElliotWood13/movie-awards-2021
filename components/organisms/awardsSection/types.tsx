export interface Nominee {
  id: string;
  photoUrL: string;
  title: string;
}

export interface Ballot {
  id: string;
  items: Nominee[];
}

export interface onSelectNomineeProps {
  ballotTitle: string;
  nomineeTitle: string;
}

export interface AwardsSectionProps {
  ballotTitle: string;
  nominees: Nominee[];
}
