import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { getPresupuesto, getGastos } from '../../services/proyectos.js';

const TortaPrincial = () => {
  const [totalPresupuesto, setPresupuesto] = useState(null);
  const [totalGastos, setGastos] = useState(null);

  useEffect(() => {
    const fetchPrespuesto = async () => {
      const getFunctionPresupuesto = getPresupuesto;
      const getFunctionGastos = getGastos;

      try {
        const { totalPresupuesto } = await getFunctionPresupuesto();
        const { totalGastos } = await getFunctionGastos();
        setPresupuesto(totalPresupuesto);
        setGastos(totalGastos);
      } catch (err) {
        console.log('ERROR USE EFFECT : ' + err);
      }
    };
    fetchPrespuesto();
  }, []);

  const graficoTorta = (
    <Doughnut
      data={{
        labels: ['Disponible', 'Gastado', 'Resto'],
        datasets: [
          {
            label: 'Personas',
            backgroundColor: [
              'rgba(0, 0, 255, 0.5)',
              'rgba(0, 255, 0, 0.5)',
              'rgba(255, 0, 0, 0.5)',
            ],
            data: [totalGastos, totalPresupuesto, 25],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Estado actual del presupuesto` },
      }}
    />
  );

  return <div>{graficoTorta}</div>;
};

export default TortaPrincial;
