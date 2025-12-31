import './Main.css';
import data from '../../data/data';
import { changeTheme } from '../Nav/Nav';
import { Button } from '../button/button';

const AboutIt = () =>{
  return `
  <div>
    <h1>${data.name}</h1>
    <p>${data.aboutIt}</p>
    <a href="mailto:${data.email}?subject=Solicitud de Presupuesto - APG" style="text-decoration: none;">
      ${Button("btn", "Solicitar presupuesto", "")}
    </a>
    <a href="https://wa.me/${data.phoneNumber.replace(/\s+/g, '')}?text=Hola, estoy interesado en solicitar un presupuesto para una instalación eléctrica." target="_blank" style="text-decoration: none;">
    ${Button("btn", "Solicitar por WhatsApp", "")}
  </a>
  </div>
  <img src="${data.logoBlack}" alt="Logo APG" id="dark-logo"/>
  <img src="${data.logoWhite}" alt="Logo APG" id="white-logo"/>
  `
};

export const Works = () =>{
  return `
    <ul id="gallery-services">  
      ${data.services.map((p) =>
    `
      <li class="services-card">
        <h2>${p.icon}</h2>
        <h1>${p.works}</h1>
        <p>${p.description}</p>
      </li>
    `).join("")}
    </ul>
  `
};

const Main = () =>{
  const div = document.querySelector("#app");
  div.innerHTML = `
  <section id="home">
    ${AboutIt()}
  </section>
  <section id="services">
    ${Works()}
  </section>
`
  // // setTimeout(..., 50) espera esos milisegundos antes de ejecutar el código, respiro al navegador y evita errores al cargar la página. Garantiza que se pinta todo el contenido para que despues de eso, vuelva al inicio de la pagina, aplica el tema y activa los eventos de los botones.
  setTimeout(() => {
    // window.scrollTo(0, 0); Asegura que cuando se cargue Main(), el usuario esté en la parte de arriba de la página.   
    window.scrollTo(0, 0);
  //   //changeTheme Se ejecuta después de que el contenido ya está en el DOM, así puede aplicar las clases o estilos correctamente.
  // ButtonListeners();
  // ChatListeners();
  changeTheme();
  }, 50);
};


export default Main;