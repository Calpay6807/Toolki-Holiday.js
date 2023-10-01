import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Rezervation from "../../pages/rezervation";

const Aside = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [isHidden2, setIsHidden2] = useState(false);

  const toggleHeader = () => {
    setIsHidden(!isHidden);
  };

  const toggleHeader2 = () => {
    setIsHidden2(!isHidden2);
  };
  return (
    <>
      <div className="sec">
        <div className={isHidden ? "hidden1" : ""}>
          <div className="sec-1">
            <NavLink to={"/OurHotel"}>
              Our Hotel{" "}
              <span>
                <i class="bi bi-house-heart"></i>
              </span>
            </NavLink>
            <NavLink to={"/sepet"}>
              Rezervation{" "}
              <span>
                <i class="bi bi-house-heart"></i>
              </span>{" "}
            </NavLink>
            <NavLink to={"/cancel"}>
              Cancellation{" "}
              <span>
                <i class="bi bi-x-octagon"></i>
              </span>{" "}
            </NavLink>
            <NavLink to={"/GivingBack"}>
              Giving Back{" "}
              <span>
                <i class="bi bi-cash-coin"></i>
              </span>{" "}
            </NavLink>

            <div className="btn-3">
              <button onClick={toggleHeader} className="rate-button">
                <i class="bi bi-arrow-down-up"></i>
              </button>
            </div>
          </div>
        </div>
        <div className={isHidden2 ? "hidden2" : ""}>
          <div className="sec-2">
            <NavLink to={"/UserCommit"}>
              User Commit{" "}
              <span>
                <i class="bi bi-people"></i>
              </span>{" "}
            </NavLink>
            <NavLink to={"/question"}>
              questionnaire{" "}
              <span>
                <i class="bi bi-patch-question-fill"></i>
              </span>{" "}
            </NavLink>
            <NavLink to={"/emplooyess"}>
              employees{" "}
              <span>
                <i class="bi bi-people"></i>
              </span>{" "}
            </NavLink>
            <NavLink to={"/GivingBack"}>
              Giving Back{" "}
              <span>
                <i class="bi bi-cash-coin"></i>
              </span>{" "}
            </NavLink>

            <div className="btn-2">
              <button onClick={toggleHeader2} className="rate-button2">
                <i class="bi bi-arrow-down-up"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Rezervation />
    </>
  );
};

export default Aside;
