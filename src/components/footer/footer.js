import "./footer.css";
import { Button } from "../button/button";
import data from '../../data/data';

export const Footer = () => `
<div id="presupuesto">
    <h2>¿Necesitas un presupuesto?</h2>
    <p>${data.experience}</p>
    <a href="tel:${data.phoneNumber}">
        ${Button("btn", "LLamar ahora", "")}
    </a>
</div>
<div id="contacto">
    <section>
        <h4>Teléfono</h4>
         <p>${data.phoneNumber}</p>
    </section>
    <section>
        <h4>Email</h4>
         <p>${data.email}</p>
    </section>
    <section>
        <h4>Horario</h4>
         <p>${data.schedule}</p>
    </section>
</div>
`;