import { Box } from "@mui/material";
import SiginComponent from "../components/SigninComponent";

const Signin = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: { md: 10, xs: 4 },
        padding: { md: "0 8rem", xs: "0 1rem" },
      }}
    >
      <SiginComponent />
    </Box>
  );
};

export default Signin;
