import axios, { AxiosResponse } from "axios";
import { useState, useEffect, useRef } from "react";
import useSelectedInput from "../utils/useSelectedInput";
import {
  useFoodContext,
  FoodItem,
  FoodServiceResponse,
} from "../context/FoodProvider";
import { useParams } from "react-router-dom";

import { request } from "../utils/axios_helper";

const useFoodService = () => {
  const { foods, setFoods } = useFoodContext();
  const { selectedInputId, toggleInput } = useSelectedInput();
  const inputRef = useRef<HTMLInputElement>(null);
  const { id: foodId } = useParams();

  const REST_API_BASE_URL = "http://localhost:8080/api";

  // const listFoods = () => {
  //   return axios.get(REST_API_BASE_URL + "/foods");
  // };

  const allFoods = () => {
    request("GET", "/foods", {
      
    }).then((response) => {
      console.log(response.data);
      setFoods(response.data.content);
    });
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
      .put(REST_API_BASE_URL + `/food/${foodId}/update`, updatedFood)
      .then((response) => {
        console.log("updated" + response.data);
        return response;
      })
      .catch((error) => {
        console.error(error);
        return Promise.reject(error);
      });
  };

  const deleteFood = (foodId: number) => {
    return axios
      .delete(REST_API_BASE_URL + `/food/${foodId}/delete`)
      .then((response) => {
        console.log("updated" + response.data);
        return response;
      })
      .catch((error) => {
        console.error(error);
        return Promise.reject(error);
      });
  };

  useEffect(() => {
    allFoods();
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
    allFoods,
    addFoods,
    updateFoods,
    deleteFood,
    selectedInputId,
    toggleInput,
    inputRef,
  };
};

export default useFoodService;
