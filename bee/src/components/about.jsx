import React from "react";
import "./about.css";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";
import aboutImage from '../assets/home.jpg'

const About = () => {
  return (
    <div className="about__us">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <motion.div
            whileInView={{ x: [-100, 0] }}
            transition={{ duration: 0.5 }}
            className="about__heading"
          >
            <h1>
              Leading Chemical Supplier in <br />
              <span>South Africa</span>
            </h1>
            <p>
              We are a locally established South African Manufacturer and
              Distributor of Raw Chemicals and Cleaning Products and Services
              that provides high quality, cost effective hygiene related
              solutions and products. <br/> <br/>Through our structured empowerment
              programs, we create entrepreneurial and work opportunities for
              locals by offering training to manufacture and Reseller
              opportunities of our quality home and industrial cleaning and
              detergent products.
            </p>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={6}>
         <motion.div
         whileInView={{x: [100, 0]}}
         transition={{duration:.5}}
         className='about__image'>
         <img src={aboutImage}  alt='about-image'/>
         </motion.div>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
