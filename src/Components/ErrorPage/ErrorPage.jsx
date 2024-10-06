import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };
  return (
    <div>
      <h2 className="text-7xl">Error:{error.status}</h2>
      <button
        onClick={handleBack}
        className="btn  m-3 p-1 btn-xs sm:btn-sm md:btn-sm lg:btn-sm"
      >
        Accent
      </button>
    </div>
  );
};

export default ErrorPage;
