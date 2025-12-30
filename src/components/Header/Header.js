import './Header.css';
import Nav from '../Nav/Nav';


const links = [
  {
    name: "Inicio",
    path: "#home",
  },
  {
    name: "Servicios",
    path: "#services",
  },
  {
    name: "Contacto",
    path: "#contact",
  },
];

const Header = () =>
    `
      <h1>A.P.<span>G</span></h1>
      ${Nav(links)}
    `

export default Header;
