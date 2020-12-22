import React from "react";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";

import useFirebaseMethods from "../hooks/useFirebaseMethods";

const StyledPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 70px);
  overflow: scroll;

  .questionsAnsPair {
    margin: 8px;
  }

  .review {
    transition: 0.3s;
    width: calc(100% - 8px);
    margin: 8px;
    padding: 8px;
  }

  .review:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  .question {
    margin: 20px 0 0;
  }

  .answer {
    margin: 8px 0 0;
    font-weight: normal;
  }
`;

const Feed = ({ className }) => {
  const { allReviews } = useFirebaseMethods();

  return (
    <StyledPaper elevation={3} className={className}>
      {allReviews.map(({ completeDate, queAnsPairs }) => {
        return (
          <Paper key={completeDate} className="review">
            <h3>{completeDate}</h3>
            {Object.entries(queAnsPairs).map((pair) => {
              console.log("pair: ", pair);
              let que = pair[0];
              let ans = pair[1];

              return (
                <div className="questionsAnsPair" key={ans}>
                  <h4 className="question">{que.split("-").join(" ")}</h4>
                  <h4 className='answer'>{ans}</h4>
                </div>
              );
            })}
          </Paper>
        );
      })}
    </StyledPaper>
  );
};

export default Feed;
