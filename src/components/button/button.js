import "./button.css"

export const Button = (id, texto, bgColor) => {  
  return `<button id="${id}" style="background-color: ${bgColor}">${texto}</button>`;
};

