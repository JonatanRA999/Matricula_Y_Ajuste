import React, { useState } from "react";

export function PopupButton() {
  const [selectedOption, setSelectedOption] = useState(null);

  const openPopup = () => {
    const width = 700;
    const height = 300;
    const left = window.innerWidth / 2 - width / 2;
    const top = window.innerHeight / 2 - height / 2;

    setTimeout(() => {
      fetch("https://matriculaajustesapi-santiagobedoyao.b4a.run/horarios/10009")
        .then((response) => response.json())
        .then((data) => {
          const popup = window.open(
            "",
            "popup",
            `width=${width}, height=${height}, left=${left}, top=${top}, center=yes`
          );

          const acceptButton = document.createElement("button");
          acceptButton.textContent = "Aceptar";
          acceptButton.classList.add("accept-button");
          acceptButton.addEventListener("click", () => {
            const selectedValue = optionsList.value;
            setSelectedOption(selectedValue);
            popup.close();
          });

          const optionsList = document.createElement("select");
          optionsList.classList.add("options-list");
          const defaultOption = document.createElement("option");
          defaultOption.textContent = "Seleccionar";
          defaultOption.disabled = true;
          defaultOption.selected = true;
          optionsList.appendChild(defaultOption);

          data.forEach((option) => {
            const listItem = document.createElement("option");
            listItem.textContent = `Grupo: ${option.Grupo}, Código: ${option.Codigo}, Horario: ${option.Horario}, Cupos disponibles: ${option.CuposDisponibles}`;
            listItem.value = option.Horario;
            optionsList.appendChild(listItem);
          });

          popup.document.body.appendChild(optionsList);
          popup.document.body.appendChild(acceptButton);
          popup.resizeTo(width, height);
        });
    }, 0);
  };

  return (
    <div>
      <button onClick={openPopup}>Seleccionar</button>
      <div>Horario: {selectedOption}</div>
    </div>
  );
}
