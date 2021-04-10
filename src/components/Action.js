import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import useActions from "../hooks/useActions";

const StyledPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
  padding: 12px;

  .action {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      height: 36px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    button {
      margin-top: 12px;
    }
  }
`;

const Action = ({ className }) => {
  const [action, setAction] = useState("");

  const { createAction, allActions, deleteAction } = useActions(action);

  const handleSubmit = (e) => {
    createAction(e);
    setAction("");
  };

  const actions = Object.entries(allActions);

  return (
    <StyledPaper elevation={3} className={className}>
      {actions.map((action) => {
        return (
          <div key={action[1]} className="action">
            <h5>{`- ${action[1]}`}</h5>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              size="small"
              onClick={() => deleteAction(action[0])}
            >
              DONE
            </Button>
          </div>
        );
      })}
      <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <TextField
          onChange={(e) => setAction(e.target.value)}
          label="Action"
          name="Action"
          variant="outlined"
          value={action}
          multiline
          rows={3}
        />
        <Button type="submit" variant="contained" color="primary">
          Create
        </Button>
      </form>
    </StyledPaper>
  );
};

export default Action;
