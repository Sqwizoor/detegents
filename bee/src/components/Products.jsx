import React from "react";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";
import service1 from "../assets/service-1.jpg";
import service2 from "../assets/service-2.jpg";
import service3 from "../assets/service-3.jpg";
import service4 from "../assets/service-4.jpg";
import logo from "../assets/logo.jpg";
import './Products.css'
const Products = () => {
  return (
    <div>
      <motion.div whileInView={{ x: [-200, 0] }} transition={{ duration: 1 }}
      className='products_heading'>
        <h1>Our <span>Services</span></h1>
      </motion.div>
      <Grid container spacing={2}
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "1rem auto",
      }}>
        <Grid item xs={12} md={3}>
          <motion.div
          whileHover={{scale:[1.1]}}
          className='product_image'>
            <img src={service1} alt="" />
          </motion.div>
        </Grid>
        <Grid item xs={12} md={3}>
          <motion.div
           whileHover={{scale:[1.1]}}
           className='product_image'>
            <img src={service2} alt="" />
          </motion.div>
        </Grid>
        <Grid item xs={12} md={3}>
          <motion.div
           whileHover={{scale:[1.1]}}
           className='product_image'>
            <img src={service3} alt="" />
          </motion.div>
        </Grid>
        <Grid item xs={12} md={3}>
          <motion.div
           whileHover={{scale:[1.1]}}
           className='product_image'>
            <img src={service4} alt="" />
          </motion.div>
        </Grid>
        <Grid item xs={12} md={3}>
          <motion.div
           whileHover={{scale:[1.1]}}
           className='product_image'>
            <img src={logo} alt="" />
          </motion.div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Products;
