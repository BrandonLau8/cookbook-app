import React from "react";
import { useNavigate } from "react-router-dom";
import useAuthService from "../services/auth.service";


const NavigateUtil = () => {
  const navigate = useNavigate();

  const toLogin = () => {
    navigate("/login");
  }

  const toRegister = () => {
    navigate("/register");
  }

  const toCreateFood = (id?:number) => {
    if(id !== undefined) {
    navigate(`/${id}/createfood`);
    } else{
      navigate(`/createfood`);
    }
  };

  const toFoodProfile = (id:number) => {
    navigate(`/${id}`)
  }
  return {
    toCreateFood,
    toFoodProfile,
    toLogin,
    toRegister,
  };
};

export default NavigateUtil;
