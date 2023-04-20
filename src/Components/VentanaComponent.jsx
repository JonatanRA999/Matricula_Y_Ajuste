import React from "react";

export function PopupButton(){
    const openPopup = () => {
        const width = 500;
        const height = 300;
        const left = window.innerWidth / 2 - width / 2;
        const top = window.innerHeight / 2 - height / 2;
        setTimeout(() => {
            const popup = window.open('', 'popup', `width=${width}, height=${height}, left=${left}, top=${top}, center=yes`);
            popup.resizeTo(width, height);
        }, 0);
    };

    return (
        <button onClick={openPopup}>Seleccionar</button>
    )
}
