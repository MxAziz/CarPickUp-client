import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();
    return (
      <div>
        <img className=" mx-auto" src="./pnf.webp" alt="error 404 img" />
        <div className=" text-center">
          <button
            onClick={() => navigate("/")}
            className="px-4 py-3 rounded-xl  bg-black text-white mt-4 font-bold"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
};

export default ErrorPage;