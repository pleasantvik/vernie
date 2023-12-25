import { Box, Button, Card, CardContent, Typography } from "@mui/material";

const ActivateAccount = () => {
  return (
    <Box sx={{ marginTop: { md: 5 }, marginBottom: { md: 0, xs: 2 } }}>
      <Card sx={{ borderRadius: 3 }}>
        <CardContent sx={{ padding: { md: "50px", xs: "30px" } }}>
          <Typography
            variant="h4"
            sx={{ fontSize: { md: "30px", xs: "15px" } }}
          >
            yay!!! your account has been created
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: { md: 5, xs: 3 },
            }}
          >
            <Card
              sx={{
                width: { md: "351px", xs: "300px" },
                height: { md: "239px", xs: "200px" },
                backgroundColor: "#BABABA",
                borderRadius: "16px",
              }}
            />
          </Box>
          <Typography
            variant="subtitle1"
            sx={{
              textAlign: "center",
              marginTop: 2,
              fontSize: { xs: "14px", md: "18px" },
            }}
          >
            Just one small step. We have sent an activation link to your email.
            Click the link to activate your account.
          </Typography>

          <Button
            fullWidth
            variant="contained"
            href="/signin"
            sx={{
              backgroundColor: "#000",
              padding: 1.4,
              marginTop: 3,
              fontSize: { md: "15px", xs: "13px" },
            }}
          >
            check Your Email
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ActivateAccount;
