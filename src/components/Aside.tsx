import { Grid, Typography } from "@mui/material";
import React from "react";
import Carousel from "./Carousel";

const Aside = () => {
  return (
    <Grid
      container
      rowSpacing={1}
      sx={{ marginTop: { xs: 8, md: 20 }, textAlign: "center" }}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      <Grid item xs={12}>
        <Typography sx={{ fontSize: { xs: "1.3rem", md: "2.5rem" } }}>
          Onboarding Title
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ textAlign: "center" }}>
        <Typography
          variant="subtitle1"
          sx={{ margin: { md: "0 6rem", xs: "0 0" } }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor commodi
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Carousel />
      </Grid>
    </Grid>
  );
};

export default Aside;
