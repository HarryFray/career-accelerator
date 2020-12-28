import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const StyledPaper = styled(Paper)`
  .form_control {
    display: flex;
    justify-content: space-between;
  }
  .select {
    width: 176px;
  }

  .day_input {
    margin-bottom: 10px;
  }

  .day_input,
  .time_input {
    width: 150px;
  }a

  .radio_group {
    margin-top: -10px;
  }
`;

const DayTimePicker = ({ className }) => {
  const [meridiem, setMeridiem] = useState("AM");
  const [day, setDay] = useState("Friday");
  const [time, setTime] = useState("3");

  const handleMeridiem = (event) => {
    setMeridiem(event.target.value);
  };

  const handleDay = (event) => {
    setDay(event.target.value);
  };

  const handleTime = (event) => {
    setTime(event.target.value);
  };
  return (
    <StyledPaper elevation={3} className={className}>
      <h3>{`You will be reminded on ${day}s at ${time} ${meridiem}`}</h3>
      <div className="form_control">
        <div className="select_group">
          <FormControl variant="outlined" className="day_input">
            <InputLabel id="day">Day</InputLabel>
            <Select
              value={day}
              onChange={handleDay}
              label="Day"
              className="day_input select"
              labelId="day"
            >
              <MenuItem value={"Monday"}>Monday</MenuItem>
              <MenuItem value={"Tuesday"}>Tuesday</MenuItem>
              <MenuItem value={"Wednesday"}>Wednesday</MenuItem>
              <MenuItem value={"Thursday"}>Thursday</MenuItem>
              <MenuItem value={"Friday"}>Friday</MenuItem>
              <MenuItem value={"Saturday"}>Saturday</MenuItem>
              <MenuItem value={"Sunday"}>Sunday</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined" className="time_input">
            <InputLabel id="time">Time</InputLabel>

            <Select
              value={time}
              onChange={handleTime}
              label="Time"
              className="time_input select"
              labelId="time"
            >
              <MenuItem value={"1"}>1</MenuItem>
              <MenuItem value={"2"}>2</MenuItem>
              <MenuItem value={"3"}>3</MenuItem>
              <MenuItem value={"4"}>4</MenuItem>
              <MenuItem value={"5"}>5</MenuItem>
              <MenuItem value={"6"}>6</MenuItem>
              <MenuItem value={"7"}>7</MenuItem>
              <MenuItem value={"8"}>8</MenuItem>
              <MenuItem value={"9"}>9</MenuItem>
              <MenuItem value={"10"}>10</MenuItem>
              <MenuItem value={"11"}>11</MenuItem>
              <MenuItem value={"12"}>12</MenuItem>
            </Select>
          </FormControl>
        </div>
        <RadioGroup
          className="radio_group"
          aria-label="gender"
          name="gender1"
          value={meridiem}
          onChange={handleMeridiem}
        >
          <FormControlLabel
            value="AM"
            control={<Radio color="primary" />}
            label="AM"
          />
          <FormControlLabel
            value="PM"
            control={<Radio color="primary" />}
            label="PM"
          />
        </RadioGroup>
      </div>
    </StyledPaper>
  );
};

export default DayTimePicker;
