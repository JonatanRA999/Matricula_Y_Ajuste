import React, { useState } from "react";
import { Enviar } from "./EnviarOption";


export function PopupButton() {
  const [selectedOption, setSelectedOption] = useState(null);

  const openPopup = () => {
    const width = 700;
    const height = 300;
    const left = window.innerWidth / 2 - width / 2;
    const top = window.innerHeight / 2 - height / 2;

    setTimeout(() => {
      // Hacer la solicitud a la API
      fetch('https://matriculaajustesapi-santiagobedoyao.b4a.run/horarios/10009')
        .then(response => response.json())
        .then(data => {
          // Crear la lista de opciones
          const optionsList = document.createElement('ul');
          data.forEach(option => {
            const listItem = document.createElement('li');
            listItem.textContent = `Grupo: ${option.Grupo}, Código: ${option.Codigo}, Horario: ${option.Horario}, Cupos disponibles: ${option.CuposDisponibles}`;
            listItem.addEventListener('click', () => {
              setSelectedOption(option.Horario);
              popup.close();
            });
            optionsList.appendChild(listItem);
          });

          // Agregar la lista al HTML de la ventana emergente
          const popup = window.open('', 'popup', `width=${width}, height=${height}, left=${left}, top=${top}, center=yes`);
          popup.document.body.appendChild(optionsList);
          popup.resizeTo(width, height);
        });
    }, 0);
  };

  return (
    <div>
      <button onClick={openPopup}>Seleccionar</button>
      <div>Horario seleccionado: {selectedOption}</div>
      <Enviar mensaje={selectedOption}></Enviar>
    </div>
  );

}
