import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { getPresupuesto } from '../../services/proyectos.js';
import { getGastos } from '../../services/gastos.js';

const TortaPrincial = ({ totalGastos, totalPresupuesto }) => {
  const [presupuesto, setPresupuesto] = useState(null);
  const [gasto, setGastos] = useState(null);
  const [hasError, setHasError] = useState(false); //Usando el hasError no me funcionaba - cambie el ternario por proyecto ? rendering() : loadingRendering() para que valide que no sea null proyecto

  useEffect(() => {
    const fetchPrespuesto = async () => {
      const getFunctionPresupuesto = getPresupuesto;
      const getFunctionGastos = getGastos;
      try {
        const presupuesto = await getFunctionPresupuesto();
        const gastos = await getFunctionGastos();
        setPresupuesto(presupuesto);
        setGastos(gastos);
      } catch (err) {
        setHasError(true);
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
            data: [`${totalGastos}`, `${totalPresupuesto}`, 25],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Estado actual en ` },
      }}
    />
  );

  return <div>{graficoTorta}</div>;
};

export default TortaPrincial;
