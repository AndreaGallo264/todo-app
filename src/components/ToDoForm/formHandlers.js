import Swal from "sweetalert2";
import { formatDate } from "../Utils/formatDate";

export const handleChange = (event, userInput, setUserInput) => {
  setUserInput({ ...userInput, [event.target.name]: event.target.value });
};

export const handleDateChange = (event, userInput, setUserInput) => {
  const formatedDate = formatDate(event._d);
  setUserInput({ ...userInput, dueDate: formatedDate });
};

export const handleSubmit = (
  event,
  userInput,
  addTask,
  setUserInput,
  initialValue,
  history,
  incrementLastId
) => {
  event.preventDefault();
  if (!userInput.dueDate.includes("Invalid")) {
    incrementLastId();
    addTask(userInput);
    setUserInput(initialValue);
  }
  successAlert();
  history.push("/");
};

const successAlert = () => {
  Swal.fire({
    icon: "success",
    title: "Success!",
    text: "Your task was successfully created!",
    showConfirmButton: false,
    timer: 2000,
  });
};
