import Paper from "@material-ui/core/Paper";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

import WeeklyForm from "./WeeklyForm";
import Feed from "./Feed";
import DayTimePicker from "./DayTimePicker";

const StyledLayout = styled.div`
  display: grid;
  height: calc(100vh - 48px);
  padding: 24px;
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  grid-template-columns: 1fr 1fr 1fr 2fr;
  grid-template-rows: 1fr 2fr;

  background: #5a5660;

  .Paper {
    padding: 12px;
  }

  .Goals {
    grid-column: 1 / 3;
  }

  .Weekly {
    grid-row: 2;
    grid-column: 1 / 3;
  }

  .score {
    grid-row: 2;
    grid-column: 3;
  }

  .Feed {
    grid-row: 1 / 3;
    grid-column: 4;
  }

  .day_time_picker {
    grid-column: 3 / 4;
  }
`;

const Layout = () => {
  const submitRequest = async (e) => {
    console.log("submit shit");
    e.preventDefault();
    const response = await fetch("/access", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: "harry.fray7@gmail.com",
        message: "brohhhhh",
      }),
    });
    const resData = await response.json();
    if (resData.status === "success") {
      alert("Message Sent.");
      this.resetForm();
    } else if (resData.status === "fail") {
      alert("Message failed to send.");
    }
  };

  return (
    <StyledLayout>
      <Button onClick={submitRequest} variant="contained" color="primary">
        Submit
      </Button>
      <Paper elevation={3} className="Paper Goals">
        Goals
        <h3>1. Increase hourly rate to 125 by the age of 30</h3>
        <h3>2. Enhance soft skill set</h3>
        <h3>3. Increase technical skill set</h3>
      </Paper>
      <DayTimePicker elevation={3} className="Paper day_time_picker" />
      <WeeklyForm className="Paper Weekly">Weekly form</WeeklyForm>
      <Paper elevation={3} className="Paper score">
        Score
      </Paper>
      <Feed elevation={3} className="Paper Feed" />
    </StyledLayout>
  );
};

export default Layout;
