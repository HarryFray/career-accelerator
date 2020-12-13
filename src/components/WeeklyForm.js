import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";

import firebase from "../firebase";

const db = firebase.ref("/form");

const StyledPaper = styled(Paper)`
  display: flex;
  flex-direction: column;

  div {
    margin-bottom: 12px;
    width: 100%;
  }

  .numberInputFeild {
    display: flex;

    .first-number-feild {
      margin-right: 24px;
    }
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
  }
`;

const WeeklyForm = ({ className }) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    db.on(
      "value",
      (snapshot) => {
        console.log(Object.values(snapshot.val()))
      },
      (errorObject) => {
        console.log("The read failed: " + errorObject.code);
      }
    );
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    db.push(formData)
      .then(() => console.log("shit was submitted yo"))
      .catch(() => console.log("shit did not work yo"));
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name.toLocaleLowerCase().split(" ").join("-")]: event.target
        .value,
    });
  };

  return (
    <StyledPaper elevation={3} className={className}>
      <h2>Weeky Performance Form Available</h2>
      <form onSubmit={(e) => handleSubmit(e)} noValidate autoComplete="off">
        <TextField
          onChange={(e) => handleChange(e)}
          label="In what ways did I excel"
          name="In what ways did I excel"
          variant="outlined"
          multiline
          rows={3}
        />
        <TextField
          onChange={(e) => handleChange(e)}
          label="What were my week points"
          name="What were my week points"
          variant="outlined"
          multiline
          rows={3}
        />
        <TextField
          onChange={(e) => handleChange(e)}
          label="Cray brainstorm improvement idea"
          name="Cray brainstorm improvement idea"
          variant="outlined"
          multiline
          rows={3}
        />
        <div className="numberInputFeild">
          <TextField
            className="first-number-feild"
            onChange={(e) => handleChange(e)}
            id="standard-number"
            variant="outlined"
            label="Hours Worked"
            name="Hours Worked"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            onChange={(e) => handleChange(e)}
            id="standard-number"
            variant="outlined"
            label="Satisfaction out of 10"
            name="Satisfaction out of 10"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <TextField
          onChange={(e) => handleChange(e)}
          label="General thoughts"
          name="General thoughts"
          variant="outlined"
          multiline
          rows={3}
        />
        <div className="buttons">
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </div>
      </form>
    </StyledPaper>
  );
};

export default WeeklyForm;
