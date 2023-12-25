import { Grid } from "@mui/material";
import { useState } from "react";
import SignupComponent from "../components/SignupComponent";
import Aside from "../components/Aside";
import ActivateAccount from "./ActivateAccount";

const Signup = () => {
  const [step, setStep] = useState(0);
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item md={6} xs={12}>
        <Aside />
      </Grid>
      <Grid
        md={6}
        xs={12}
        sx={{
          marginTop: { md: 10, xs: 5 },
          padding: { md: "0 8rem", xs: "0 1.4rem" },
          textAlign: "center",
        }}
      >
        {step === 0 && <SignupComponent setStep={setStep} />}
        {step === 1 && <ActivateAccount />}
      </Grid>
    </Grid>
  );
};

export default Signup;
