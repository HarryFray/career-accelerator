import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";

import useFirebaseMethods from "../hooks/useFirebaseMethods";
import useDate from "../hooks/useDate";

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
  const [queAnsPairs, setQueAnsPairs] = useState({});

  const { completeDate, submitAllowed } = useDate();
  const { submitReview } = useFirebaseMethods({ queAnsPairs, completeDate });

  const handleChange = (event) => {
    setQueAnsPairs({
      ...queAnsPairs,
      [event.target.name.toLocaleLowerCase().split(" ").join("-")]: event.target
        .value,
    });
  };

  return (
    <StyledPaper elevation={3} className={className}>
      {submitAllowed ? (
        <h2>Weeky Performance Form Available</h2>
      ) : (
        <h2>Weeky Performance Form Not Available</h2>
      )}
      <form onSubmit={(e) => submitReview(e)} noValidate autoComplete="off">
        <TextField
          disabled={!submitAllowed}
          onChange={(e) => handleChange(e)}
          label="In what ways did I excel"
          name="In what ways did I excel"
          variant="outlined"
          multiline
          rows={3}
        />
        <TextField
          disabled={!submitAllowed}
          onChange={(e) => handleChange(e)}
          label="What were my week points"
          name="What were my week points"
          variant="outlined"
          multiline
          rows={3}
        />
        <TextField
          disabled={!submitAllowed}
          onChange={(e) => handleChange(e)}
          label="Cray brainstorm improvement idea"
          name="Cray brainstorm improvement idea"
          variant="outlined"
          multiline
          rows={3}
        />
        <div className="numberInputFeild">
          <TextField
            disabled={!submitAllowed}
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
            disabled={!submitAllowed}
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
          disabled={!submitAllowed}
          onChange={(e) => handleChange(e)}
          label="General thoughts"
          name="General thoughts"
          variant="outlined"
          multiline
          rows={3}
        />
        <div className="buttons">
          <Button
            disabled={!submitAllowed}
            type="submit"
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </div>
      </form>
    </StyledPaper>
  );
};

export default WeeklyForm;
