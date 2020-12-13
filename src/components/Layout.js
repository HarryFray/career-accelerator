import Paper from "@material-ui/core/Paper";
import styled from "styled-components";

import WeeklyForm from "./WeeklyForm";

const StyledLayout = styled.div`
  display: grid;
  height: calc(100vh - 48px);
  padding: 24px;
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  grid-template-columns: 1fr 1fr 1fr 2fr;
  grid-template-rows: 1fr 2fr;

  .Paper {
    padding: 12px;
  }

  .Goals {
    grid-column: 1 / 4;
  }

  .Weekly {
    grid-row: 2;
    grid-column: 1 / 3;
  }

  .Monthly {
    grid-row: 2;
    grid-column: 3;
  }

  .Feed {
    grid-row: 1 / 3;
    grid-column: 4;
  }
`;

const Layout = () => {
  return (
    <StyledLayout>
      <Paper elevation={3} className="Paper Goals">
        Goals
        <h3>1. Increase hourly rate to 125 by the age of 30</h3>
        <h3>2. Enhance soft skill set</h3>
        <h3>3. Increase technical skill set</h3>

      </Paper>
      <WeeklyForm className="Paper Weekly">Weekly form</WeeklyForm>
      <Paper elevation={3} className="Paper Monthly">
        Score
      </Paper>
      <Paper elevation={3} className="Paper Feed">
        feed
      </Paper>
    </StyledLayout>
  );
};

export default Layout;
