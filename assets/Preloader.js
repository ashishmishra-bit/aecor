import React from "react";
import ReactLoading from "react-loading";

const Preloader = () => {
  return (
    <div className="loader">
      <ReactLoading type={"bars"} color={"#745eda"} height={100} width={100} />

      <style jsx>{`
        .loader {
          
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export default Preloader;
