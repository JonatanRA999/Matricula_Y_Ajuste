import React, { useState } from "react";
/***API PARA ESTUDIANTES https://matriculaajustesapi-santiagobedoyao.b4a.run/estudiantes */
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
            const selectedHorario = data.find((option) => option.Codigo === selectedValue);
            setSelectedOption(selectedHorario);
            popup.close();

            fetch("https://matriculaajustesapi-santiagobedoyao.b4a.run/registrarCurso", {
              method: "POST",
              body: JSON.stringify({
                "idEstudiante": "1006157087",
                //"codigoMatricula": "7411006157087",
                "codigoHorario": selectedValue
              }),
              headers: {
                "Content-Type": "application/json",
              },
            })
              .then((response) => response.json())
              .then((data) => {
                console.log("Curso registrado exitosamente:", data);
              })
              .catch((error) => {
                console.error("Error al registrar curso:", error);
              });
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
            listItem.textContent = `Código: ${option.Codigo}, Horario: ${option.Horario}, Cupos disponibles: ${option.CuposDisponibles}`;
            listItem.value = option.Codigo;
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
      {selectedOption && (
        <div>Horario: {selectedOption.Horario}</div>
      )}
    </div>
  );
}

