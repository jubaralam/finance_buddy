// chartSetup.js
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,     // 🔥 This registers the 'bar' controller!
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend
  );
  