import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import { addFoods, listFoods } from "../services/FoodService";
import { Button, Grid } from "@mui/material";

import useSelectedInput from "../utils/useSelectedInput";

interface FoodItem {
  id: number;
  name: string;
}


const ListFoodComponent: React.FC = () => {
  const [foods, setFoods] = useState<FoodItem[]>([]);
  const { selectedInputId, toggleInput } = useSelectedInput();

  const inputRef = useRef(null);

  const addFood = () => {
    const newFood = { name: "" };
    addFoods(newFood).then((response) => {
      console.log(response.data);
      setFoods((prevFoods) => [...prevFoods, response.data]);
    }).catch((error) => {
      console.error(error);
  });
}

  useEffect(() => {
    if (selectedInputId !== null) {
        // Focus on the input of the selected item
        inputRef.current.focus();
    }
}, [selectedInputId]);

  useEffect(() => {
    listFoods()
      .then((response) => {
        setFoods(response.data.content);
        console.log(response.data.content);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Button onClick={addFood} variant="contained">
        Add Food
      </Button>
      <Grid
        container
        spacing={{ xs: 2, sm: 2, md: 2, lg: 2 }}
        columns={{ xs: 4, sm: 12, md: 12, lg: 12 }}
        rowGap={2}
      >
        {foods.map((food) => (
          <Grid key={food.id} item xs={4} sm={6} md={4} lg={4}>
            <Card key={food.id} sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    R
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
            
                
                title={
                  selectedInputId === food.id ? (
                    // Input field when selected
                    <input
                        ref={inputRef}
                        type="text"
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                toggleInput(food.id); // Toggle selection on enter
                            }
                        }}
                        readOnly={false}
                    />
                ) : (
                    // Display name when not selected
                    <strong>{food.name}</strong>
                )
            }
            // Event handler to toggle selection
            onClick={() => toggleInput(food.id)}
        />
              <CardMedia
                component="img"
                height="194"
                image="https://source.unsplash.com/random?wallpapers"
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};


export default ListFoodComponent;
