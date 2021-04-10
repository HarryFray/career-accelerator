import { useEffect, useState } from "react";

import firebase from "../firebase";

const db = firebase.ref("/action");

const useActions = (action) => {
  const [allActions, setAllActions] = useState([]);

  useEffect(() => {
    db.on(
      "value",
      (snapshot) => {
        if (snapshot.val()) {
          setAllActions(snapshot.val());
        }
      },
      (errorObject) => {
        setAllActions([{ error: errorObject.code }]);
      }
    );
  }, []);

  const createAction = (e) => {
    e.preventDefault();
    db.push(action)
      .then(() => console.log("shit was submitted yo"))
      .catch(() => console.log("shit did not work "));
  };

  const deleteAction = (id) => {
    firebase.ref(`/action/${id}`).remove();
  };

  return { createAction, allActions, deleteAction };
};

export default useActions;
