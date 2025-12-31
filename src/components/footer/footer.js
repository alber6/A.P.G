import "./footer.css";
import { Button } from "../button/button";
import data from '../../data/data';

export const Footer = () => `
<div id="presupuesto">
    <h2>¿Necesitas un presupuesto?</h2>
    <p>${data.experience}</p>
    <p>${data.schedule}</p>
    <a href="tel:${data.phoneNumber}">
        ${Button("btn", "LLama ahora", "")}
    </a>
</div>
`;