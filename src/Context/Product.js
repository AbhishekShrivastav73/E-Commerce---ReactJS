import React from "react";
import { createContext } from "react";

const ProductContext =  createContext()

export default ProductContext; //Isko import kro jsx file me

//Context hm log ko ek provider dega
//isko as a wrapper use krnge 
// ProductContext se wrapper kr dnge to sab child ko access mil jaega data ko use krne ka


// ek provider bhi banana pdega uss k liye jsx chaiye varna wrapp kaise krnge