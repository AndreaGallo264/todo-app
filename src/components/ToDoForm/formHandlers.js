import Swal from "sweetalert2";
import { formatDate } from "../Utils/formatDate";
import { addTask, incrementId } from "../../store/actions";

export const handleChange = (event, userInput, setUserInput) => {
  setUserInput({ ...userInput, [event.target.name]: event.target.value });
};

export const handleDateChange = (event, userInput, setUserInput) => {
  if (event) {
    if (!event._d.toString().includes("Invalid")) {
      const formatedDate = formatDate(event._d);
      setUserInput({ ...userInput, dueDate: formatedDate });
    }
  } else {
    setUserInput({ ...userInput, dueDate: "" });
  }
};

export const handleSubmit = (
  event,
  userInput,
  dispatch,
  setUserInput,
  initialValue,
  history
) => {
  event.preventDefault();
  if (!userInput.dueDate.includes("Invalid") && userInput.dueDate.length > 0) {
    dispatch(incrementId());
    dispatch(addTask(userInput));
    setUserInput(initialValue);
    successAlert();
    history.push("/");
  }
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
