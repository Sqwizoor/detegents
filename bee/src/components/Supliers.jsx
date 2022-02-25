import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import "./Sulpiers.css";

const Supliers = () => {
  return (
    <div>
      <Grid
        container
        spacing={2}
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "1rem auto",
        }}
      >
        <Grid item xs={12} md={4} sx={{ flexGrow: 1 }}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 1,
                width: 328,
                height: 328,
              },
            }}
          >
            <Paper elevation={4}>
              <div className="paper_image">
                <img src="https://img.icons8.com/fluency/48/000000/star.png" />
                <Typography variant="h6" component="h4">
                  Retail
                </Typography>
                <Typography variant="h6" component="h5">
                  Through Bulk Supply & “Tapped off” products using
                  agents that are strategically located. Re-sale of packaged
                  products under the NLN  Brand. Re-sale of packaged
                  products under House Brands.
                </Typography>
              </div>
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 1,
                width: 328,
                height: 328,
              },
            }}
          >
            <Paper elevation={3}>
              <div className="paper_image">
                <img src="https://img.icons8.com/fluency/48/000000/star.png" />
                <Typography variant="h6" component="h4">
                  Wholesale
                </Typography>
                <Typography variant="h6" component="h5">
                  End User such as Government Sector, Mines, Hospitality Sector,
                  Schools etc.
                </Typography>
              </div>
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={12} md={3} sx={{ flexGrow: 1 }}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 1,
                width: 328,
                height: 328,
              },
            }}
          >
            <Paper elevation={3}>
              <div className="paper_image">
                <img src="https://img.icons8.com/fluency/48/000000/star.png" />
                <Typography variant="h5" component="h4">
                  Consumer
                </Typography>
                <Typography variant="h6" component="h5">
                  Consumer Our finished products are packaged and branded
                  products through factory type outlets/stores using the
                  EzeeChem Brand.
                </Typography>
              </div>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Supliers;
