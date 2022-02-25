import React from "react";
import "./Home.css";
import { motion } from "framer-motion";
import Button from '@mui/material/Button';

const Home = () => {
  return (
    <div className="main__home">
      <motion.div whileInView={{ x: [-100, 0],  opacity: [0, 1]}} transition={{ duration: 0.5 }}
      >
        <div className="home__content">
          <h1>
            Cleaning Products <br /> And <span>Detegents</span>
            <br /> Suplies
          </h1>
          <p>
            Leading Household, Industrial and Car Care Cleaning products <br/> and Raw
            Materials Suppliers in South Africa
          </p>

          <Button variant="outlined">Lean More <img src="https://img.icons8.com/external-kmg-design-flat-kmg-design/32/000000/external-right-arrow-user-interface-kmg-design-flat-kmg-design.png"/></Button>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
