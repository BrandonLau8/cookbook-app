import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";

import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

import { Button, Grid } from "@mui/material";
import useFoodService from "../services/food.service";
import MenuListComposition from "../utils/MenuUtil";
import NavigateUtil from "../utils/NavigateUtil";
import { Link } from "react-router-dom";

const AllFoodComponent: React.FC = () => {
  const {
    foods,
    setFoods,
    listFoods,
    addFoods,
    selectedInputId,
    toggleInput,
    inputRef,
  } = useFoodService();

  const { toCreateFood, toFoodProfile } = NavigateUtil();

  return (
    <>
      <Box
        sx={{
          position: "relative",
          marginLeft: "0px",
          marginRight: "0px",
          paddingX: "150px",
          justifyItems: "center",
        }}
      >
        <Grid
          container
          direction="row"
          display="flex"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={{ xs: 2, sm: 2, md: 2, lg: 2 }}
          columns={{ xs: 4, sm: 12, md: 12, lg: 20 }}
          rowGap={2}
          sx={{
            backgroundColor: "",
            border: "",
          }}
        >
          {foods.map((food) => (
            <Grid key={food.id} item xs={4} sm={6} md={4} lg={4} sx={{}}>
              <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      R
                    </Avatar>
                  }
                  action={<MenuListComposition id={food.id} />}
                  title={<strong>{food.name}</strong>}
                />

                <CardMedia
                  component="img"
                  height="194"
                  image="https://source.unsplash.com/random?wallpapers"
                  alt="Paella dish"
                  onClick={() => food.id && toFoodProfile(food.id)}
                />

                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
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
      </Box>
    </>
  );
};

export default AllFoodComponent;
