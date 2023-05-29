

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
          <td>21/07/2023</td>
          <td className='centrar-en-tabla'>2023/2</td>
        </tr>
        <tr>
          <td>Matriculas</td>
          <td>25/07/2023</td>
          <td className='centrar-en-tabla'>2023/2</td>
        </tr>
        <tr>
          <td>Ajustes</td>
          <td>31/07/2023</td>
          <td className='centrar-en-tabla'>2023/2</td>
        </tr>
        <tr>
          <td>Clases</td>
          <td>08/08/2023</td>
          <td className='centrar-en-tabla'>2023/2</td>
        </tr>
        <tr>
          <td>Examenes Finales</td>
          <td>22/11/2023</td>
          <td className='centrar-en-tabla'>2023/2</td>
        </tr>
        <tr>
          <td>Habilitaciones</td>
          <td>29/11/2023</td>
          <td className='centrar-en-tabla'>2023/2</td>
        </tr>
        <tr>
          <td>Validaciones</td>
          <td>06/12/2023</td>
          <td className='centrar-en-tabla'>2023/2</td>
        </tr>
        <tr>
          <td>Terminación Oficial</td>
          <td>15/12/2023</td>
          <td className='centrar-en-tabla'>2023/2</td>
        </tr>
      </table>
    </div>
  )
}
