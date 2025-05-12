import { Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: "#000", minHeight: "100vh", color: "#fff" }}>
      <Container style={{ textAlign: "center", paddingTop: "100px" }}>
        <Typography variant="h3" gutterBottom style={{ color: "#fff" }}>
          404 - Página no encontrada
        </Typography>
        <Typography variant="body1" gutterBottom style={{ color: "#fff" }}>
          La ruta que estás buscando no existe.
        </Typography>
        <Button
          variant="contained"
          onClick={() => navigate("/")}
          style={{
            backgroundColor: "#0047e5",
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          Volver al inicio
        </Button>
      </Container>
    </div>
  );
};

export default NotFound;
