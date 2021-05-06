import React, { useState, useEffect } from "react";
import MomentUtils from "@date-io/moment";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { formatDateExpression } from "../Utils/formatDate";

const CalendarInput = ({ selectedDate, handleDateChange }) => {
  const [valueDate, setDate] = useState(selectedDate);

  useEffect(() => {
    setDate(selectedDate);
  }, [selectedDate]);

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        format={formatDateExpression}
        margin="normal"
        label="Due date"
        value={valueDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          "aria-label": "change date",
        }}
        required
        name="dueDate"
        asp-format={`0:${formatDateExpression}`}
      />
    </MuiPickersUtilsProvider>
  );
};

export default CalendarInput;
