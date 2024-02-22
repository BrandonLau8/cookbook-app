import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import NavigateUtil from "./NavigateUtil";
import useFoodService from "../services/food.service";
import { useParams } from "react-router-dom";
import { FoodItem } from "../context/FoodProvider";

const MenuListComposition: React.FC<{ id?: number }> = ({ id }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const { toCreateFood } = NavigateUtil();
  const { foods, setFoods, deleteFood } = useFoodService();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigateToEdit = () => {
    if (id !== undefined) {
      const selectedFood = foods.find((food) => food.id === id);
      if (selectedFood) {
        toCreateFood(id);
        console.log(id);
      } else {
        return null;
      }
    }
  };

  const handleDelete = () => {
    if(id !== undefined) {
        const selectedFood = foods.find((food) => food.id === id);
        const updatedFood = foods.filter((food) => food.id !== id)
        if(selectedFood) {
            deleteFood(id);
            setFoods(updatedFood);
            console.log(`${selectedFood.name} + deleted`)
        }
    }
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleNavigateToEdit}>Edit</MenuItem>
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
      </Menu>
    </div>
  );
};

export default MenuListComposition;
