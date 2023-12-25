import { Grid, Box } from "@mui/material";
import DrawerDashboard from "./Drawer";
import Section from "./Section";

const DashboardComponent = () => {
  return (
    <Grid container spacing={2}>
      <Grid
        item
        md={2.5}
        xs={3}
        sx={{ backgroundColor: "#fff", marginTop: 2.5, height: "100vh" }}
      >
        <DrawerDashboard />
      </Grid>
      <Grid
        item
        md={9.5}
        xs={9}
        sx={{ overflowY: "auto", maxHeight: { md: "820px", xs: "720px" } }}
      >
        <Box sx={{ marginTop: { xs: 10, md: 20 } }}>
          <Section />
        </Box>
      </Grid>
    </Grid>
  );
};

export default DashboardComponent;
