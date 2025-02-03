import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setdata] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  //u could use use state to display the states of var in the ui of the website
  //this run at every render, the array makes it render at times only after thr first render
  //the array value is called a dependency and value is a usestate variable

  useEffect(() => {
    const abortCont = new AbortController();
    //used to stop the running of usefetch while switching to another page
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            // error coming back from server
            throw Error("could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setIsPending(false);
          setdata(data);
          setError(null);
        })
        .catch((err) => {
          // auto catches network / connection error
          if (err.name === "AbortError") {
            //this is used if there is a switch to a different route
            console.log("Fetch aborted");
          }
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);
    return () => {
      abortCont.abort();
      //pauses the fetch
    };
  }, [url]);
  return { data, isPending, error };
};

export default useFetch;
