import './Nav.css';

export const changeTheme = () => {
  const themeBtn = document.querySelector("#themeBtn");
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("white");
    changeText();
  });
};
export const changeText = () => {
  const themeBtn = document.querySelector("#themeBtn");
  if (themeBtn.innerText === "💡") {
    themeBtn.innerText = "☾";
  } else {
    themeBtn.innerText = "💡";
  }
};

const Nav = (links) => `
  <nav>
    <ul>
      ${links.map((link) => 
        `<li>
            <a href="${link.path}">${link.name}</a>
        </li>
        `).join("")}
         <li>
        <button id="themeBtn">💡</button>
        </li>
    </ul>
  </nav>
  `;

export default Nav;
