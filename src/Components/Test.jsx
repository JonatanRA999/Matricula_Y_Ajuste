import React, { useState } from "react";

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
          const optionsList = document.createElement('select');
          const defaultOption = document.createElement('option');
          defaultOption.textContent = 'Seleccionar';
          defaultOption.disabled = true;
          defaultOption.selected = true;
          optionsList.appendChild(defaultOption);
          data.forEach(option => {
            const listItem = document.createElement('option');
            listItem.textContent = `Grupo: ${option.Grupo}, Código: ${option.Codigo}, Horario: ${option.Horario}, Cupos disponibles: ${option.CuposDisponibles}`;
            listItem.addEventListener('click', () => {
              setSelectedOption(option.Horario);
               
              
            });
            optionsList.appendChild(listItem);
          });

          // Agregar el botón de aceptar
          const popup = window.open('', 'popup', `width=${width}, height=${height}, left=${left}, top=${top}, center=yes`);

          const acceptButton = popup.document.createElement('button');
          acceptButton.textContent = 'Aceptar';
          acceptButton.addEventListener('click', () => {
            if (selectedOption !== null) {
              popup.close();
            }
          });
          popup.document.body.appendChild(acceptButton);

          // Agregar la lista al HTML de la ventana emergente
          
          popup.document.body.appendChild(optionsList);
          popup.resizeTo(width, height);
        });
    }, 0);
  };

  return (
    <div>
      <button onClick={openPopup}>Seleccionar</button>
      <div>Horario seleccionado: {selectedOption}</div>
    </div>
  );
}