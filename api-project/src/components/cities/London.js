import React from "react";
import { EverythingLondon } from "../../lib/Api";

const London = () => {
  const [state, setState] = React.useState({ londonNews: [] });

  const fetchLondonFromApi = async () => {
    try {
      const res = await EverythingLondon();
      setState({ londonNews: res.data });
    } catch (err) {
      console.log("an error has occured fetching London news", err);
    }
  };
  React.useEffect(() => {
    fetchLondonFromApi();
  }, []);
  console.log(state);
  return <p>London</p>;
};

export default London;
