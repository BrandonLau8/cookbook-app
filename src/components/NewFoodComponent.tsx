import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React, { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import InputFileUpload from "../utils/FileUploadUtil";
import useFoodService from "../services/food.service";
import { useNavigate, useParams } from "react-router-dom";
import { useFoodContext } from "../context/FoodProvider";

const NewFoodComponent: React.FC<{ id?: number }> = ({ id }) => {
  const { addFoods, updateFoods, foods } = useFoodService();
  const [foodInput, setFoodInput] = useState<string>("");
  const navigate = useNavigate();
  const { id: foodId } = useParams();

  const handleFoodInput = (e: ChangeEvent<HTMLInputElement>) => {
    setFoodInput(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedFood = { name: foodInput };
    if (foodId !== undefined) {
      const parsedFoodId = parseInt(foodId);

      updateFoods(updatedFood, parsedFoodId);
    } else {
      addFoods({ name: foodInput });
    }
    navigate("/");
  };

  const currentFoodInput = () => {
    if (foodId) {
      const parsedFoodId = parseInt(foodId);
      const selectedFood = foods.find((food) => food.id === parsedFoodId);
      if (selectedFood) {
        return selectedFood.name;
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <TextField
          id="filled"
          label="Food"
          defaultValue={currentFoodInput()}
          variant="filled"
          onChange={handleFoodInput}
        />
        <TextField
          id="filled-multiline-flexible"
          label="Description"
          multiline
          maxRows={4}
          variant="filled"
        />
        <InputFileUpload />
        <Box
          component="img"
          sx={{
            height: 233,
            width: 350,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt="The house from the offer."
          src=""
        ></Box>
        <Button variant="contained" type="submit">
          Add Food
        </Button>
      </Box>
    </form>
  );
};

export default NewFoodComponent;
