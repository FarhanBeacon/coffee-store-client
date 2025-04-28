import React from "react";
import BackToHomeBtn from "../components/BackToHomeBtn";
import error404 from "../assets/404.gif";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 min-h-screen">
      <BackToHomeBtn />
      <img src={error404} alt="image" />
    </div>
  );
};

export default ErrorPage;
