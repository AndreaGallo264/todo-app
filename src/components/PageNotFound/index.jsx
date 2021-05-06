import React from "react";
import PageNotFoundImg from "../../assets/not-found.jpg";

const PageNotFound = () => {
  return (
    <img
      src={PageNotFoundImg}
      alt="Sorry we could not find the page you were looking for"
      style={{ width: "100%" }}
    />
  );
};

export default PageNotFound;
