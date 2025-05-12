import { Button, Container, Typography, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: "#000", minHeight: "100vh", color: "#fff" }}>
      <Container style={{ textAlign: "center", paddingTop: "100px" }}>
        <Typography
          gutterBottom
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            fontFamily: "sans-serif",
            color: "#fff",
          }}
        >
          Bienvenido a Factored
        </Typography>

        <Stack spacing={2} direction="column" alignItems="center" mt={4}>
          <Button
            variant="contained"
            onClick={() => navigate("/profile")}
            style={{
              backgroundColor: "#0047e5",
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            Iniciar sesión
          </Button>

          <Button
            variant="outlined"
            color="error"
            onClick={() => navigate("/esto-no-existe")}
          >
            Probar página 404
          </Button>
        </Stack>
      </Container>
    </div>
  );
};

export default Login;

