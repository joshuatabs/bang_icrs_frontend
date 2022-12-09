import React from "react";
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';


export const SidebarData = [
    
  {
    title: "Fingerfood",
    path: "/fingerfoodmenu",
    icon: <FastfoodIcon></FastfoodIcon>
  },

  {
    title: "Meals",
    path: "/mealsmenu",
    icon: <LocalDiningIcon></LocalDiningIcon>
  },
  {
    title: "Drinks",
    path: "/drinksmenu",
    icon: <LocalDrinkIcon></LocalDrinkIcon>
  },
 
];