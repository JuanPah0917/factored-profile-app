import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from "chart.js";
import { Radar } from "react-chartjs-2";

// Registrar componentes necesarios
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const SpiderChart = ({ skills }) => {
  const labels = Object.keys(skills);
  const dataValues = Object.values(skills);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Nivel de habilidad",
        data: dataValues,
        backgroundColor: "rgba(0, 71, 229, 0.2)", 
        borderColor: "#0047e5", 
        pointBackgroundColor: "#ffffff",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      r: {
        suggestedMin: 0,
        suggestedMax: 100,
        grid: {
          color: "rgba(255, 255, 255, 0.3)",
        },
        angleLines: {
          color: "rgba(255, 255, 255, 0.3)",
        },
        pointLabels: {
          color: "#fff",
          font: {
            size: 14,
          },
        },
        ticks: {
          color: "#ccc",
          backdropColor: "transparent",
          stepSize: 20,
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "#0047e5", 
        },
      },
    },
  };

  return <Radar data={data} options={options} />;
};

export default SpiderChart;
