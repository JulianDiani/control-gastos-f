import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
// import { fetchDailyData } from '../../api';
import { getPresupuesto } from '../services/proyectos.js';

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [presupuesto, setPresupuesto] = useState(null);

  useEffect(() => {
    const fetchPrespuesto = async () => {
      const getFunction = getPresupuesto;

      setPresupuesto(presupuesto);
    };
    fetchPrespuesto();
  }, []);

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ['Infectados', 'Recuperados', 'Fallecidos'],
        datasets: [
          {
            label: 'Personas',
            backgroundColor: [
              'rgba(0, 0, 255, 0.5)',
              'rgba(0, 255, 0, 0.5)',
              'rgba(255, 0, 0, 0.5)',
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Estado actual en ${country}` },
      }}
    />
  ) : null;

  return (
    <div>
      {/* Si hay un país definido, dibujo un barChart, sino, lineChart para los datos globales. */}
      barChart
    </div>
  );
};

export default Chart;
