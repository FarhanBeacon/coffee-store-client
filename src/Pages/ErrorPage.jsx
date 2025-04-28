import React from "react";
import BackToHomeBtn from "../components/BackToHomeBtn";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 min-h-screen">
      <BackToHomeBtn />
      <img src="/src/assets/404.gif" alt="image" />
    </div>
  );
};

export default ErrorPage;
