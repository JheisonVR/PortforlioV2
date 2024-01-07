import React from 'react'
import { TimeLine } from '../academic/components/TimeLine'
import { TimelineTwo } from './components'


const workBackground = [
  {
    title: 'Líder de Calidad y Datos',
    initialDate: '07/02/2023',
    endDate: 'Actualidad',
    company: 'Sodexo Beneficios e Incentivos',
  },
  {
    title: 'Practicante Salesforce Developer',
    initialDate: '01/02/2023',
    endDate: '30/05/2023',
    company: 'LabsXD',
  },
  {
    title: 'Representative Senior of Customer Centricity',
    initialDate: '16/05/2018',
    endDate: '27/07/2022',
    company: 'Mercado Libre',
  },
  {
    title: 'Practicante',
    initialDate: '01/09/2017',
    endDate: '31/01/2018',
    company: 'Contraloría de Bogotá',
  },
  {
    title: 'Asesor Daviplata',
    initialDate: '01/02/2017',
    endDate: '31/07/2017',
    company: 'Daviplata',
  },
]


const Work = () => {
  return (
    <main className="flex flex-col h-screen items-center bg-blue-300">
      <div className="h-20 flex items-center my-2">
        <h1 className="text-5xl text-white my-2 p-2 ">Work Background</h1>
      </div>
      <div className="flex bg-white shadow-2xl w-3/4 h-3/4 rounded-3xl ">
        <span className="relative rounded-full h-7 w-7 bg-emerald-700 shadow-2xl  "></span>
      </div>
    </main>
  );
}

export default Work