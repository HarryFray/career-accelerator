import { useEffect, useState } from "react";

import firebase from "../firebase";

const db = firebase.ref("/form");

const useFirebaseMethods = (review) => {
  const [allReviews, setAllReviews] = useState([]);

  useEffect(() => {
    db.on(
      "value",
      (snapshot) => {
        if (snapshot.val()) {
          setAllReviews(Object.values(snapshot.val()));
        }
      },
      (errorObject) => {
        setAllReviews([{ error: errorObject.code }]);
      }
    );
  }, []);

  const submitReview = (e) => {
    e.preventDefault();
    db.push(review)
      .then(() => console.log("shit was submitted yo"))
      .catch(() => console.log("shit did not work yo"));
  };

  return { submitReview, allReviews };
};

export default useFirebaseMethods;
