import React from "react";
import { useNavigate } from "react-router-dom";


const NavigateUtil = () => {
  const navigate = useNavigate();

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
  };
};

export default NavigateUtil;
