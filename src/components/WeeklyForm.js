import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";

const StyledPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  margin: 20px;

  div {
    margin-bottom: 12px;
    width: 100%;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
  }
`;

const WeeklyForm = () => {
  const [formData, setFormData] = useState("");

  const handleChange = (event) => {
    setFormData(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Make a request for a user with a given ID
  };

  return (
    <StyledPaper elevation={3}>
      <form onSubmit={(e) => handleSubmit(e)} noValidate autoComplete="off">
        <TextField
          onChange={(e) => handleChange(e)}
          label="QuestionA"
          variant="outlined"
        />
        <div className="buttons">
          <Button
            onClick={() => setFormData("")}
            variant="contained"
            color="secondary"
          >
            Clear Out
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </div>
      </form>
    </StyledPaper>
  );
};

export default WeeklyForm;
