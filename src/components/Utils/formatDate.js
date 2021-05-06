import moment from "moment";

export const formatDateExpression = "yyyy-MM-DD";

export const formatDate = (stringDate) => {
  let date;
  if (!stringDate) {
    date = new Date();
  } else {
    date = stringDate;
  }
  const response = moment(date).format(formatDateExpression);
  return response;
};
