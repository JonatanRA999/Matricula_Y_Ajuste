

import React from 'react'
import './Styles/StylesComponents.css';

export function CalendarioComponent()
{
  return (
    <div id='container-calendario'>
       <table id= "tabla-calendario" >
        <tr>
          <th>Actividad</th>
          <th>Fecha</th>
          <th>Semestre Academico</th>
        </tr>
        <tr>
          <td>Oferta Academica</td>
          <td>dia/mes/año</td>
          <td className='centrar-en-tabla'>2023/1</td>
        </tr>
        <tr>
          <td>Matriculas</td>
          <td>día/mes/año</td>
          <td className='centrar-en-tabla'>2023/1</td>
        </tr>
        <tr>
          <td>Ajustes</td>
          <td>día/mes/año</td>
          <td className='centrar-en-tabla'>2023/1</td>
        </tr>
        <tr>
          <td>Clases</td>
          <td>día/mes/año</td>
          <td className='centrar-en-tabla'>2023/1</td>
        </tr>
        <tr>
          <td>Examenes Finales</td>
          <td>día/mes/año</td>
          <td className='centrar-en-tabla'>2023/1</td>
        </tr>
        <tr>
          <td>Habilitaciones</td>
          <td>día/mes/año</td>
          <td className='centrar-en-tabla'>2023/1</td>
        </tr>
        <tr>
          <td>Validaciones</td>
          <td>día/mes/año</td>
          <td className='centrar-en-tabla'>2023/1</td>
        </tr>
        <tr>
          <td>Terminación Oficial</td>
          <td>día/mes/año</td>
          <td className='centrar-en-tabla'>2023/1</td>
        </tr>
      </table>
    </div>
  )
}
