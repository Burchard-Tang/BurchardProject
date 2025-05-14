import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

const Blogs = () => {
    return <Bar data={{
        labels: ["A", "B", "C"],
        datasets: [
            {
                label: "dataset one",
                data: [5, 6, 7],
                backgroundColor: [
                    "red",
                    "blue",
                    "green"
                ]
            },
        ],
        options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          },
    }} />;
};

export default Blogs;