import axios, { AxiosResponse } from "axios";
import { useState, useEffect, useRef } from "react";
import useSelectedInput from "../utils/useSelectedInput";
import {
  useFoodContext,
  FoodItem,
  FoodServiceResponse,
} from "../context/FoodProvider";
import { useParams } from "react-router-dom";

const useFoodService = () => {
  const { foods, setFoods } = useFoodContext();
  const { selectedInputId, toggleInput } = useSelectedInput();
  const inputRef = useRef<HTMLInputElement>(null);
  const { id: foodId } = useParams();

  const REST_API_BASE_URL = "http://localhost:8080/api";

  const listFoods = () => {
    return axios.get(REST_API_BASE_URL + "/foods");
  };

  const addFoods = (
    newFood: FoodItem
  ): Promise<AxiosResponse<FoodServiceResponse>> => {
    return axios
      .post<FoodServiceResponse>(REST_API_BASE_URL + "/food/create", newFood)
      .then((response) => {
        console.log(response.data);
        setFoods((prevFoods) => [...prevFoods, newFood]);
        return response;
      })
      .catch((error) => {
        console.error(error);
        return Promise.reject(error);
      });
  };

  const updateFoods = (
    updatedFood: FoodItem,
    foodId: number
  ): Promise<AxiosResponse<FoodServiceResponse>> => {
    return axios
      .patch(REST_API_BASE_URL + `/food/${foodId}/update`, updatedFood)
      .then((response) => {
        console.log("updated" + response);
        return response;
      })
      .catch((error) => {
        console.error(error);
        return Promise.reject(error);
      });
  };

  useEffect(() => {
    listFoods()
      .then((response) => {
        setFoods(response.data.content);
        // console.log(response.data.content);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (selectedInputId !== null) {
      // Focus on the input of the selected item
      inputRef.current?.focus();
    }
  }, [selectedInputId]);

  return {
    foods,
    setFoods,
    listFoods,
    addFoods,
    updateFoods,
    selectedInputId,
    toggleInput,
    inputRef,
  };
};

export default useFoodService;
