import { useEffect, useState } from "react";
import { get } from "../../../../helpers";
import { Ballot } from "../types";

export const useBallotData = () => {
  const [ballotData, setBallotData] = useState<Ballot[] | []>([]);
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

  return { ballotData, error };
};
