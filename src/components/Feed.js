import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";

import useFirebaseMethods from "../hooks/useFirebaseMethods";

const StyledPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
  height: 100vh;

  .review {
    background: green;
    width: 100%;
    margin: 8px;
  }

  .questionsAnsPair {
    margin: 8px;
    background: #bada55;
  }
`;

const Feed = ({ className }) => {
  const { allReviews } = useFirebaseMethods();

  return (
    <StyledPaper elevation={3} className={className}>
      {allReviews.map((review, e) => {
        return (
          <div className="review">
            {Object.entries(review).map((pair) => {
              let que = pair[0];
              let ans = pair[1];

              return (
                <div className="questionsAnsPair">
                  <div>{"Q: " + que}</div>
                  <div>{"A: " + ans}</div>
                </div>
              );
            })}
          </div>
        );
      })}
    </StyledPaper>
  );
};

export default Feed;
