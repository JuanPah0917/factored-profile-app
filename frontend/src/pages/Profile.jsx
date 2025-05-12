import { useEffect, useState } from "react";
import { Typography, Container, Avatar, CircularProgress } from "@mui/material";
import SpiderChart from "../components/SpiderChart";

const Profile = () => {
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/employee")
      .then((res) => res.json())
      .then((data) => {
        setEmployee(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al obtener los datos del empleado:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div style={{ backgroundColor: "#000", minHeight: "100vh", color: "#fff" }}>
        <Container style={{ textAlign: "center", paddingTop: "100px" }}>
          <CircularProgress />
        </Container>
      </div>
    );
  }

  if (!employee) {
    return <Typography>Error cargando el perfil</Typography>;
  }

  return (
    <div style={{ backgroundColor: "#000", minHeight: "100vh", color: "#fff" }}>
      <Container style={{ textAlign: "center", paddingTop: "50px" }}>
        <Avatar
          alt={employee.name}
          src={employee.avatar_url}
          sx={{ width: 120, height: 120, margin: "0 auto 20px auto" }}
        />
        <Typography variant="h4" style={{ color: "#fff" }}>{employee.name}</Typography>
        <Typography variant="subtitle1" gutterBottom style={{ color: "#fff" }}>
          {employee.position}
        </Typography>

        <div style={{ maxWidth: "600px", margin: "50px auto" }}>
          <SpiderChart skills={employee.skills} />
        </div>
      </Container>
    </div>
  );
};

export default Profile;
